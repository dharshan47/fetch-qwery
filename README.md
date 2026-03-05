# 🚀 Fetch-Qwery

**The Zero-Config, Ultra-Performance React Calling Engine.**

[![npm version](https://img.shields.io/npm/v/fetch-qwery.svg?style=flat-square)](https://www.npmjs.com/package/fetch-qwery)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Fetch-Qwery is an insanely fast, minimal React hook explicitly designed to completely bypass setup boilerplate, maximize rendering speed edge-to-edge, and eliminate Next.js/Vite hydration flickers. It operates out of the box with intelligent caching, automatic smart-prefetching, and universal platform hydration.

## 🔥 Key Directives

- **Zero Configuration:** Simply `import { useFetch } from 'fetch-qwery'`. No Providers, no setup needed. Fast iteration from day one.
- **Micro Bundle:** Hand-optimized to guarantee minimal footprint overhead on your JS budgets. Production-ready tree-shaking included (`tsup`).
- **Lighthouse 100/100 Optimizer:** Next.js and Vercel edge-ready network-aware prefetching. Built-in network inspection avoids data-drain on slow hardware.
- **Universal Localhost Speed:** Intelligently skips stale-revalidation flickers during Dev mode to keep you coding fast, then zeroes it out securely for strict Production compliance.
- **React 18 & 19 Ready:** Full internal strict concurrency, avoiding all `useEffect` cascading re-renders. Immediate data availability on cached hits.

## 📦 Installation

```bash
npm install fetch-qwery
# or
pnpm add fetch-qwery
```

## ⚡ Usage

```tsx
import { useFetch } from "fetch-qwery";

function UserProfile() {
  const { data, loading, error } = useFetch(
    "https://api.github.com/users/octocat",
  );

  if (loading) return <div>Loading Profile...</div>;
  if (error) return <div>Failed to load 😭</div>;

  return (
    <div className="profile-card hero-gradient">
      <img src={data.avatar_url} alt={data.name} />
      <h1>{data.name}</h1>
    </div>
  );
}
```

## 🛠️ Advanced Options

Fetch-qwery fully supports complex API flows including parallel fetches, method overloads, and strict typing.

```ts
const { data } = useFetch(
  ["https://api.example.com/system", "https://api.example.com/alerts"],
  {
    staleTime: 60000,
    keepPreviousData: true,
    preloadImages: true,
    autoPrefetch: true,
  },
);
```

---


