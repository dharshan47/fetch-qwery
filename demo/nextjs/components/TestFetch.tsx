"use client";

import { useFetch } from "fetch-qwery";

export default function TestFetch() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  if (loading) return <p>Loading from any API...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">Any API Support</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
