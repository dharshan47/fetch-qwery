"use client";

import { useFetch } from "fetch-qwery";

export default function ImagePreloadTest() {
  const { data, loading } = useFetch("https://picsum.photos/v2/list?limit=5", {
      preloadImages: true,
      autoPrefetch: true
  });

  if (loading) return <p>Loading images...</p>;

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-4">Image Preload Support</h2>
      <div className="grid grid-cols-5 gap-2">
        {data?.map((item: any) => (
          <div key={item.id} className="relative aspect-square">
             <img 
                src={item.download_url} 
                alt={item.author} 
                className="rounded w-full h-full object-cover"
                loading="eager"
             />
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Check network tab for preloaded images (link rel="preload").
      </p>
    </div>
  );
}
