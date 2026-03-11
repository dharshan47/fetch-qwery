import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fetch-Qwery | High-Performance Data Fetching for React",
  metadataBase: new URL("https://fetch-qwery.vercel.app"),
  description:
    "The ultra-lightweight, type-safe, and zero-config data fetching engine for modern React engineering teams. Optimized for React 19 and Next.js 16.",
  keywords: [
    "react",
    "nextjs",
    "data fetching",
    "typescript",
    "performance",
    "suspense",
  ],
  openGraph: {
    title: "Fetch-Qwery | Data Fetching Perfected",
    description: "High-performance data fetching engine for modern React apps.",
    url: "https://fetch-qwery.vercel.app", // Placeholder, update if needed
    siteName: "Fetch-Qwery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fetch-Qwery | Data Fetching Perfected",
    description: "Ultra-lightweight, type-safe data fetching for React.",
  },
  icons: {
    icon: "/fq.png",
    apple: "/fq.png",
  },
};

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://fetch-qwery.vercel.app" />
      </head>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Fetch-Qwery",
              operatingSystem: "Any",
              applicationCategory: "DeveloperApplication",
              description: "High-performance data fetching engine for React.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
