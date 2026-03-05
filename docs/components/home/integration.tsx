export function Integration() {
  return (
    <section aria-label="API Integration" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight uppercase text-glow">
                Seamlessly <br />
                <span className="text-secondary retro-shadow-sm bg-foreground px-4 inline-block mt-2 -rotate-1 transform">Connected.</span>
              </h2>
              <p className="text-foreground font-medium text-lg md:text-xl leading-relaxed max-w-xl">
                No providers, no context, no boilerplate. Just pure, reactive
                data fetching that works everywhere—from basic hooks to the most
                complex Server Components.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              {[
                "Native Suspense & Error Boundary support",
                "Smart stale-while-revalidate caching",
                "Automatic deduplication & retry logic",
                "Deep TypeScript generic support",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-none border-2 border-foreground bg-secondary flex items-center justify-center retro-shadow-sm shrink-0">
                    <div className="w-2 h-2 rounded-none bg-foreground" />
                  </div>
                  <span className="text-base md:text-lg font-bold tracking-widest uppercase text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group order-1 lg:order-2 w-full max-w-full overflow-hidden">
            <div className="relative bg-background border-2 border-foreground overflow-hidden retro-shadow">
              <div className="flex items-center gap-1.5 px-4 md:px-6 py-3 md:py-4 border-b-2 border-foreground bg-secondary">
                <div className="w-3 h-3 rounded-none bg-foreground" />
                <div className="w-3 h-3 rounded-none bg-foreground" />
                <div className="w-3 h-3 rounded-none bg-foreground" />
                <span className="ml-4 text-[12px] font-black text-foreground uppercase tracking-widest">
                  Profile.tsx
                </span>
              </div>
              <div className="p-4 md:p-8 overflow-x-auto bg-background">
                <pre className="text-xs md:text-base leading-relaxed font-bold font-mono">
                  <code>
                    <span className="text-purple-400 font-semibold italic">import</span>{" "}
                    {"{ "}
                    <span className="text-primary font-bold">useFetch</span>
                    {" } "}
                    <span className="text-purple-400 italic">from</span><span className="text-emerald-500"> 'fetch-qwery'</span>;
                    {"\n\n"}
                    <span className="text-purple-400 font-semibold italic">export default function</span> <span className="text-yellow-400 font-bold">Profile</span>() {"{\n"}
                    {"  "}<span className="text-blue-400">const</span>{" { "}data, isLoading, error{" } = "}
                    <span className="text-yellow-400 font-bold">useFetch</span>{"<"}
                    <span className="text-blue-300">User</span>
                    {">"}(<span className="text-emerald-500">'/api/user'</span>, {"{"}
                    {"\n    "}<span className="text-blue-300">revalidate</span>: <span className="text-yellow-400">60</span>,
                    {"\n    "}<span className="text-blue-300">suspense</span>: <span className="text-blue-400">true</span>
                    {"\n  }"});
                    {"\n\n"}
                    {"  "}<span className="text-purple-400 font-semibold italic">if</span> (isLoading) <span className="text-purple-400 font-semibold italic">return</span> {"<"}Spinner {"/>"};
                    {"  "}<span className="text-purple-400 font-semibold italic">if</span> (error) <span className="text-purple-400 font-semibold italic">return</span> {"<"}Error msg={"{error.message}"} {"/>"};
                    {"\n\n"}
                    {"  "}<span className="text-purple-400 font-semibold italic">return</span> {"<h1>{data.name}</h1>"};
                    {"\n}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
