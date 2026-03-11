"use client";

import { useFetch } from "fetch-qwery";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface Product {
  id: number;
  title: string;
}

export default function ParallelFetch() {
  const { data, loading, error } = useFetch<[User, Product]>([
    "https://dummyjson.com/users/1",
    "https://dummyjson.com/products/1",
  ]);

  if (loading) return <p className="p-4 border rounded shadow">Parallel loading...</p>;
  if (error) return <p className="p-4 border rounded shadow text-red-500">Error: {error.message}</p>;

  const [user, product] = data || [];

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4 text-purple-600">Parallel Data (Map Test)</h2>
      
      {/* Destructuring Test */}
      <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Destructuring Test</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between p-2 bg-purple-50 rounded">
          <span className="font-semibold">User:</span>
          <span>{user?.firstName} {user?.lastName}</span>
        </div>
        <div className="flex justify-between p-2 bg-purple-50 rounded">
          <span className="font-semibold">Product:</span>
          <span>{product?.title}</span>
        </div>
      </div>

      {/* Map Function Test */}
      <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">.map() Test</h3>
      <div className="space-y-1">
        {data?.map((item: { firstName?: string; title?: string }, i: number) => (
          <div key={i} className="text-xs p-1 border-l-2 border-purple-300 pl-2">
            Resource {i + 1}: {item.firstName || item.title}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-2 border-t text-[10px] text-gray-500 italic">
        Successfully verified .map() on {data?.length} resources.
      </div>
    </div>
  );
}
