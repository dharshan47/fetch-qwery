"use client";

import { useFetch } from "fetch-qwery";

export default function SSRFetchTest() {
  // This hook should work safely during SSR and hydrate on the client
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-2">SSR & Hydration Safety</h2>
      {loading ? (
        <p>Loading post...</p>
      ) : (
        <div>
          <h3 className="font-bold">{data?.title}</h3>
          <p>{data?.body}</p>
        </div>
      )}
      <p className="mt-4 text-xs bg-gray-100 p-2 rounded">
        If this loaded without a "Hydration failed" error in console, it's working correctly!
      </p>
    </div>
  );
}
