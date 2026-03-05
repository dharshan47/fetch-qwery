import TestFetch from "../components/TestFetch";
import LocalhostTest from "../components/LocalhostTest";
import ImagePreloadTest from "../components/ImagePreloadTest";
import SSRFetchTest from "../components/SSRFetchTest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-5xl font-black mb-12 text-center text-blue-600 tracking-tight">
          fetch-qwery <span className="text-gray-400">Lab</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <TestFetch />
          <LocalhostTest />
          <ImagePreloadTest />
          <SSRFetchTest />
        </div>

        <div className="mt-12 p-8 bg-white border border-blue-100 shadow-xl rounded-2xl">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Verification Checklist
          </h3>
          <ul className="space-y-3 text-blue-900">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </span>
              Any API Support (JSONPlaceholder)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </span>
              Localhost Speed Boost (Check Console)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </span>
              Image Preloading (Link Header/Head preloads)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </span>
              SSR & Hydration Safety (Zero Mismatch)
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
