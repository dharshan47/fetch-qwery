"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import dynamic from "next/dynamic";
import { Background } from "@/components/background";
const Terminal = dynamic(() => import("@/components/terminal").then(mod => mod.Terminal), {
  ssr: true,
  loading: () => <div className="h-64 w-full bg-muted animate-pulse rounded-lg border-2 border-foreground" />
});

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col"
    >
      <Background />
      <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container px-6 mx-auto relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="animate-fade-up inline-flex items-center border-2 border-foreground bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground mb-10 uppercase retro-shadow-sm">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-none h-3 w-3 bg-foreground"></span>
            </span>
            Now optimized for React 19 & Next.js 16
          </div>

          <h1 className="animate-fade-up delay-1 text-5xl font-black tracking-tighter sm:text-7xl md:text-9xl mb-8 uppercase text-foreground leading-[0.85] text-glow">
            Data Fetching <br />
            <span className="text-secondary retro-shadow-sm bg-foreground px-4 inline-block mt-4 -rotate-2 transform">
              Perfected.
            </span>
          </h1>

          <p className="animate-fade-up delay-2 text-lg text-muted-foreground md:text-2xl max-w-3xl mb-14 leading-relaxed font-medium">
            Ultra-lightweight, type-safe, and zero-config.{" "}
            <br className="hidden md:block" />
            The missing piece for your modern React stack.
          </p>

          <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-16 md:mb-24 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="/docs"
              aria-label="Start reading documentation and get building with Fetch-Qwery"
              className="group relative inline-flex h-16 items-center justify-center bg-accent border-2 border-foreground px-12 font-bold text-accent-foreground uppercase tracking-widest transition-transform hover:-translate-y-1 active:translate-y-1 retro-shadow"
            >
              Start Building
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/dharshan47/fetch-qwery"
              target="_blank"
              aria-label="View Fetch-Qwery source code on GitHub"
              className="inline-flex h-16 items-center justify-center border-2 border-foreground bg-background px-12 font-bold uppercase tracking-widest text-foreground transition-transform hover:-translate-y-1 active:translate-y-1 retro-shadow"
            >
              <Github className="mr-3 h-6 w-6" />
              GitHub
            </Link>
          </div>

          <div className="animate-fade-up delay-4 w-full relative px-4">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-foreground/5 dark:bg-foreground/[0.02] blur-[100px] pointer-events-none rounded-full" />
            <Terminal />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
