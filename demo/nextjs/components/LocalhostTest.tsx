"use client";

import { useFetch } from "fetch-qwery";

export default function LocalhostTest() {
  const { data, loading } = useFetch("/api/hello");

  return (
    <div className="p-4 border rounded shadow mt-4 bg-white">
      <h2 className="text-xl font-bold text-red-500">Localhost Speed</h2>
      <p className="text-sm text-gray-500 mb-2">Internal API test:</p>
      <div className="p-2 bg-gray-50 rounded border text-xs">
        {loading ? "Loading..." : JSON.stringify(data)}
      </div>
      <p className="mt-2 text-[10px] text-gray-400">
        Defaults to 5s staleTime on localhost.
      </p>
    </div>
  );
}
