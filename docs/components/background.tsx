"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Noise Texture - Inlined for Performance */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 brightness-100 contrast-150" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Dynamic Monochrome Blobs - High Performance Styles */}
      <div 
        style={{ willChange: "transform, opacity" }}
        className="absolute -top-[20%] -left-[20%] w-[80%] h-[120%] bg-foreground/10 dark:bg-primary/12 rounded-full blur-[120px] z-0 animate-blob-1" 
      />
      <div 
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[20%] left-[10%] w-[100%] h-[80%] bg-foreground/[0.05] dark:bg-primary/8 rounded-full blur-[150px] z-0" 
      />
      <div 
        style={{ willChange: "transform, opacity" }}
        className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[120%] bg-foreground/10 dark:bg-primary/12 rounded-full blur-[100px] z-0 animate-blob-2" 
      />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] z-20" 
        style={{ 
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          color: 'var(--foreground)'
        }} 
      />
    </div>
  );
}
