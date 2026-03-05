/**
 * Utility to preload images for "ultra-speed" rendering.
 * Uses requestIdleCallback or setTimeout to remain non-blocking.
 * Supports Next.js Image optimization hints and memory safety.
 */
export function preloadImages(urls: string[]) {
  if (typeof window === "undefined") return;

  // 1. Network-Awareness (Lighthouse / Data Usage)
  const conn = (navigator as any).connection;
  if (conn && (conn.saveData || /2g|slow-2g/.test(conn.effectiveType))) {
    return; // Skip preloading on slow/data-saving networks
  }

  const isNextJs = (window as any).next || (window as any).__NEXT_DATA__;

  const preload = () => {
    // Limit batch size for memory safety
    const batch = urls.slice(0, 15);

    // Clear old preload tags to prevent DOM bloat (Memory Safety)
    const existingTags = document.querySelectorAll(
      'link[data-fetch-qwery-preload="true"]',
    );
    if (existingTags.length > 50) {
      existingTags.forEach((el) => el.remove());
    }

    batch.forEach((url) => {
      if (!url || typeof url !== "string") return;

      const img = new Image();
      img.src = url;

      if (typeof (img as any).fetchPriority !== "undefined") {
        (img as any).fetchPriority = "high";
      }

      if (document.head) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = url;
        link.setAttribute("data-fetch-qwery-preload", "true");

        if (isNextJs && !url.includes("/_next/image")) {
          link.setAttribute("imagesrcset", url);
        }

        document.head.appendChild(link);
      }
    });
  };

  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(preload);
  } else {
    setTimeout(preload, 100);
  }
}

/**
 * Optimized asset discovery (Images & Links) in a single pass.
 * Minimized for bundle size and performance.
 */
export function discoverAssets(data: any): {
  images: string[];
  links: string[];
} {
  const i: string[] = [],
    l: string[] = [];
  if (!data) return { images: i, links: l };

  const re = /\.(jpg|jpeg|png|gif|webp|svg|avif|bmp|tiff)(\?.*)?$/i;
  const cls = [
    "unsplash",
    "cloudinary",
    "imgix",
    "imgur",
    "amazon",
    "google",
    "shopify",
  ];
  const lkK = ["next", "detail", "url", "href", "more"];
  const imK = ["image", "thumb", "icon", "picture", "photo"];

  const tv = (o: any, d = 0) => {
    if (!o || d > 6) return;
    if (typeof o === "string") {
      const lo = o.toLowerCase();
      if (
        re.test(o) ||
        cls.some((c) => lo.includes(c)) ||
        o.startsWith("data:image/")
      )
        i.push(o);
      else if (
        o.startsWith("http") &&
        (o.includes("/api/") || o.includes("/v1/"))
      )
        l.push(o);
    } else if (Array.isArray(o)) {
      o.slice(0, 10).forEach((x) => tv(x, d + 1));
    } else if (typeof o === "object") {
      Object.entries(o).forEach(([k, v]) => {
        if (
          typeof v === "string" &&
          (v.startsWith("http") || v.startsWith("/"))
        ) {
          const lk = k.toLowerCase();
          if (imK.some((x) => lk.includes(x))) i.push(v);
          else if (lkK.some((x) => lk.includes(x))) l.push(v);
        }
        tv(v, d + 1);
      });
    }
  };
  tv(data);
  return { images: [...new Set(i)], links: [...new Set(l)] };
}

export const findImages = (d: any) => discoverAssets(d).images;
export const findLinks = (d: any) => discoverAssets(d).links;
