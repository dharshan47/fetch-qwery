import LocalhostTest from "../../../components/LocalhostTest";

export default function LocalhostExample() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Localhost Optimization Example
      </h1>
      <LocalhostTest />
      <p className="mt-8">
        When running on <code>localhost</code>, the library automatically
        increases stale times to prevent unnecessary re-fetching during
        development.
      </p>
    </div>
  );
}
