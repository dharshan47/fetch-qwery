import dynamic from 'next/dynamic';
import { Hero } from "@/components/home/hero";

const Features = dynamic(() => import("@/components/home/features").then(mod => mod.Features));
const Integration = dynamic(() => import("@/components/home/integration").then(mod => mod.Integration));
const CTA = dynamic(() => import("@/components/home/cta").then(mod => mod.CTA));
const Footer = dynamic(() => import("@/components/home/footer").then(mod => mod.Footer));

export default function HomePage() {
  return (
    <main className="relative flex flex-col min-h-screen selection:bg-primary/20">
      <Hero />
      <Features />
      <Integration />
      <CTA />
      <Footer />
    </main>
  );
}
