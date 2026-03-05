import TestFetch from "../../../components/TestFetch";

export default function AnyApiExample() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Any API Fetching Example</h1>
      <TestFetch />
      <p className="mt-8">
        <code>fetch-qwery</code> supports any REST API out-of-the-box with zero configuration 
        or context providers required.
      </p>
    </div>
  );
}
