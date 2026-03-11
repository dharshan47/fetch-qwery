"use client";

import { useFetch } from "fetch-qwery";

export default function SSRFetchTest() {
  // This hook should work safely during SSR and hydrate on the client
  const { data, loading } = useFetch("https://dummyjson.com/quotes/1");

  return (
    <div className="p-4 border rounded shadow mt-4 bg-white">
      <h2 className="text-xl font-bold mb-2 text-orange-500">SSR & Hydration</h2>
      {loading ? (
        <p>Loading quote...</p>
      ) : (
        <div className="italic text-gray-700">
          &ldquo;{data?.quote}&rdquo;
          <span className="block mt-1 text-xs font-bold text-gray-400">&mdash; {data?.author}</span>
        </div>
      )}
      <p className="mt-4 text-[10px] bg-orange-50 p-2 rounded text-orange-800">
        Works seamlessly with Next.js Server & Client components.
      </p>
    </div>
  );
}
