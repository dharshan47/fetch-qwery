"use client";

import { BentoGrid } from "@/components/bento-grid";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-12 md:py-24 bg-foreground/[0.02] border-y-2 border-foreground">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <h2 
              className="animate-fade-up text-4xl md:text-7xl font-extrabold tracking-tight leading-tight uppercase text-glow"
            >
              Engineering for <br />
              <span className="text-secondary retro-shadow-sm bg-foreground px-4 inline-block mt-2 -rotate-1 transform">Extreme Speed.</span>
            </h2>
            <p 
              className="animate-fade-up delay-1 text-xl text-muted-foreground leading-relaxed"
            >
              We've stripped away the overhead. Every millisecond counts, every byte is optimized. 
              Fetch-Qwery is designed to be the fastest way to get data into your components.
            </p>
            <div 
              className="animate-fade-up delay-2 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              {[
                { label: "Bundle Size", value: "< 1.2kb" },
                { label: "Memory Overhead", value: "Near Zero" },
                { label: "Type Coverage", value: "100%" },
                { label: "Latency Impact", value: "0ms" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-4 md:p-6 border-2 border-foreground retro-shadow transition-transform hover:-translate-y-1 bg-background">
                  <h3 className="text-2xl md:text-3xl font-black mb-1 text-foreground">{stat.value}</h3>
                  <div className="text-sm font-bold text-foreground bg-secondary inline-block px-2 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-foreground/5 blur-[120px] rounded-full" />
            <BentoGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
