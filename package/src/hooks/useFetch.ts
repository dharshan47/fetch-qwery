import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { getInternalQueryClient } from "../internal/queryClient";
import { discoverAssets, preloadImages } from "../utils/images";

/**
 * Ultra-performance data fetching hook with automatic prefetching.
 * Supports: Any API, Localhost, Parallel Fetching, Base URLs.
 */
export function useFetch<T = any, E = Error, TData = T>(
  input: string | string[] | (() => Promise<T>),
  opt: {
    key?: any;
    staleTime?: number;
    gcTime?: number;
    retry?: number | boolean;
    keepPreviousData?: boolean;
    enabled?: boolean;
    preloadImages?: boolean;
    autoPrefetch?: boolean;
    baseUrl?: string;
    headers?: HeadersInit;
    method?: string;
    body?: any;
    select?: (data: T) => TData;
  } = {},
) {
  let client: any;
  try {
    client = useQueryClient();
  } catch {
    client = getInternalQueryClient();
  }

  // Localhost Optimization: Longer staleTime for development
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");
  
  const defaultStale = isLocal ? 5000 : 0;

  const queryFn = useMemo(() => {
    if (typeof input === "function") return input;

    const fetcher = async (url: string) => {
      const fullUrl = opt.baseUrl
        ? `${opt.baseUrl.replace(/\/$/, "")}/${url.replace(/^\//, "")}`
        : url;
      const res = await fetch(fullUrl, {
        method: opt.method || "GET",
        headers: { "Content-Type": "application/json", ...opt.headers },
        body: opt.body ? JSON.stringify(opt.body) : undefined,
      });
      if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
      return res.json();
    };

    if (Array.isArray(input)) {
      return () => Promise.all(input.map(fetcher)) as Promise<T>;
    }
    return () => fetcher(input) as Promise<T>;
  }, [input, opt.baseUrl, opt.method, opt.headers, opt.body]);

  const queryKey = useMemo(
    () => (Array.isArray(opt.key) ? opt.key : [opt.key || input]),
    [opt.key, input],
  );

  const q = useQuery<T, E, TData>(
    {
      queryKey,
      queryFn,
      staleTime: opt.staleTime ?? defaultStale,
      gcTime: opt.gcTime,
      retry: opt.retry,
      placeholderData: opt.keepPreviousData ? (p: any) => p : undefined,
      enabled: opt.enabled,
      select: opt.select,
    },
    client,
  );

  const prefetch = async (url?: string) => {
    const target = url || (typeof input === "string" ? input : undefined);
    if (!target) return;

    await client.prefetchQuery({
      queryKey: [target],
      queryFn: async () => {
        const fullUrl = opt.baseUrl
          ? `${opt.baseUrl.replace(/\/$/, "")}/${target.replace(/^\//, "")}`
          : target;
        const res = await fetch(fullUrl, {
          method: opt.method || "GET",
          headers: { "Content-Type": "application/json", ...opt.headers },
          body: opt.body ? JSON.stringify(opt.body) : undefined,
        });
        const d = await res.json();
        if (opt.preloadImages !== false)
          preloadImages(discoverAssets(d).images);
        return d;
      },
      staleTime: opt.staleTime ?? defaultStale,
    });
  };

  useEffect(() => {
    if (q.data) {
      const { images: im, links: lk } = discoverAssets(q.data);
      if (opt.preloadImages !== false) preloadImages(im);

      const c =
        typeof navigator !== "undefined" ? (navigator as any).connection : null;
      if (
        opt.autoPrefetch !== false &&
        (!c || !(c.saveData || /2g|slow-2g/.test(c.effectiveType)))
      ) {
        lk.slice(0, 3).forEach((l) => prefetch(l));
      }
    }
  }, [q.data, opt.preloadImages, opt.autoPrefetch]);

  const { data, error, isLoading: loading, ...rest } = q;
  return {
    data,
    loading,
    error,
    prefetch,
    ...rest,
  };
}
