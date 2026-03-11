"use client";

import { useFetch } from "fetch-qwery";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
}

export default function TestFetch() {
  const { data: products, loading, error } = useFetch<ProductsResponse, Error, Product[]>(
    "https://dummyjson.com/products",
    {
      select: (data: ProductsResponse) => data.products,
    }
  );

  if (loading) return <p className="p-4 border rounded shadow">Loading products...</p>;
  if (error) return <p className="p-4 border rounded shadow text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">DummyJSON Products (using select)</h2>
      <ul className="space-y-2">
        {products?.slice(0, 5).map((product: Product) => (
          <li key={product.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span className="font-medium text-gray-800">{product.title}</span>
            <span className="text-blue-600 font-bold">${product.price}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-gray-400">Showing first 5 products</p>
    </div>
  );
}
