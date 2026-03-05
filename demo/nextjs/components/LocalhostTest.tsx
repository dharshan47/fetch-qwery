"use client";

import { useFetch } from "fetch-qwery";

export default function LocalhostTest() {
  const { data, loading } = useFetch("/api/hello");

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-xl font-bold">Localhost Optimization</h2>
      <p>Status: {loading ? "Fetching..." : "Done"}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
