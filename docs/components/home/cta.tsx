import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16 md:py-32 relative">
      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-none uppercase text-glow">
            Start building <br />
            the{" "}
            <span className="text-foreground border-b-8 border-foreground inline-block">
              future
            </span>{" "}
            today.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 md:pt-10 px-4 sm:px-0">
            <Link
              href="/docs"
              className="w-full sm:w-auto px-16 h-18 rounded-none bg-accent border-2 border-foreground text-accent-foreground font-black text-xl hover:-translate-y-1 transition-transform flex items-center justify-center retro-shadow uppercase tracking-widest"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/dharshan47/fetch-qwery"
              target="_blank"
              className="w-full sm:w-auto px-16 h-18 rounded-none border-2 border-foreground bg-background font-black text-xl hover:bg-secondary transition-all flex items-center justify-center retro-shadow uppercase tracking-widest text-foreground"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-foreground/5 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
