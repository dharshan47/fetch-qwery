import { QueryClient } from "@tanstack/react-query";

let browserClient: QueryClient | null = null;

/**
 * Returns a QueryClient instance.
 * - Browser: Persistent singleton (one per app)
 * - Server: Fresh instance per call (unless inside a Provider) to ensure SSR isolation.
 */
const STALE_TIME = 5 * 60 * 1000; // 5 minutes
const GC_TIME = 24 * 60 * 60 * 1000; // 24 hours
const PERSIST_KEY = "FETCH_QWERY_CACHE";
const MAX_CACHE_ITEMS = 50; 

/**
 * Returns a QueryClient instance with aggressive caching and persistence.
 * Pre-initialized in browser for absolute zero-latency resolution.
 */
const isBrowser = typeof window !== "undefined";

export function getInternalQueryClient() {
  if (!isBrowser) return new QueryClient();
  
  if (!browserClient) {
    browserClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: STALE_TIME,
            gcTime: GC_TIME,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      });

      // Ultra-fast hydration (Optional/Safe)
      // We wrap this in a timeout or check to avoid immediate hydration mismatch if possible,
      // but TanStack Query v5 handles cache updates fairly well.
      if (typeof window !== "undefined") {
        try {
          const s = localStorage.getItem(PERSIST_KEY);
          if (s) {
            const now = Date.now();
            const data = JSON.parse(s);
            data.forEach((e: any) => {
              if (now - e.updatedAt < GC_TIME) {
                browserClient?.setQueryData(e.queryKey, e.data, { updatedAt: e.updatedAt });
              }
            });
          }
        } catch {}

        browserClient.getQueryCache().subscribe(() => {
          try {
            const q = browserClient?.getQueryCache().getAll()
              .filter(x => x.state.status === "success" && x.state.data !== undefined)
              .sort((a, b) => b.state.dataUpdatedAt - a.state.dataUpdatedAt)
              .slice(0, MAX_CACHE_ITEMS)
              .map(x => ({ queryKey: x.queryKey, data: x.state.data, updatedAt: x.state.dataUpdatedAt }));
            localStorage.setItem(PERSIST_KEY, JSON.stringify(q));
          } catch {}
        });
      }
  }
  return browserClient;
}
