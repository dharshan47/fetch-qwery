import SSRFetchTest from "../../../components/SSRFetchTest";

export default function SSRExample() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        SSR & Hydration Safety Example
      </h1>
      <SSRFetchTest />
      <div className="mt-8 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h3 className="font-bold">Pro Tip</h3>
        <p>
          Open your browser console. You should see NO hydration warnings. The
          library handles the transition from server-side loading to client-side
          data resolution seamlessly.
        </p>
      </div>
    </div>
  );
}
