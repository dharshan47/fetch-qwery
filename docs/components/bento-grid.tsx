"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Terminal as TerminalIcon } from "lucide-react";

const features = [
  {
    title: "Blazing Fast",
    description: "Optimized indexing and caching for sub-millisecond retrieval.",
    icon: Zap,
    className: "md:col-span-2",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    iconColor: "text-orange-500",
  },
  {
    title: "Type Safe",
    description: "End-to-end type safety for all API calls.",
    icon: Shield,
    className: "md:col-span-1",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    iconColor: "text-blue-500",
  },
  {
    title: "Vercel Native",
    description: "Optimized for Edge Runtime and RSC patterns.",
    icon: Globe,
    className: "md:col-span-1",
    gradient: "from-green-500/10 via-green-500/5 to-transparent",
    iconColor: "text-green-500",
  },
  {
    title: "Zero Config",
    description: "Everything you need out of the box. No boilerplate.",
    icon: TerminalIcon,
    className: "md:col-span-2",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    iconColor: "text-purple-500",
  },
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className={`group relative overflow-hidden bg-background p-10 transition-all duration-300 border-2 border-foreground retro-shadow hover:-translate-y-1 ${feature.className}`}
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className={`mb-6 inline-flex p-4 bg-secondary border-2 border-foreground retro-shadow-sm`}>
                <feature.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-3xl font-black mb-3 tracking-tight uppercase">{feature.title}</h3>
              <p className="text-foreground font-medium text-lg leading-relaxed">{feature.description}</p>
            </div>
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </motion.div>
      ))}
    </div>
  );
}
