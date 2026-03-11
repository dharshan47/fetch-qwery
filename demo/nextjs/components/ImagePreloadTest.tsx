"use client";

import { useFetch } from "fetch-qwery";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
}

export default function ImagePreloadTest() {
  const { data, loading } = useFetch<ProductsResponse, Error, Product[]>("https://dummyjson.com/products?limit=5", {
    select: (d: ProductsResponse) => d.products,
    preloadImages: true,
  });

  if (loading) return <p className="p-4 border rounded shadow mt-4">Loading images...</p>;

  return (
    <div className="p-4 border rounded shadow mt-4 bg-white">
      <h2 className="text-xl font-bold mb-4 text-green-600">Image Preload (Products)</h2>
      <div className="grid grid-cols-5 gap-2">
        {data?.map((item: Product) => (
          <div key={item.id} className="relative aspect-square">
             <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="rounded w-full h-full object-cover border"
                loading="eager"
             />
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Checks JSON for images & preloads them instantly.
      </p>
    </div>
  );
}
