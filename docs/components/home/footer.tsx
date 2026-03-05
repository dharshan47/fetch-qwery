import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground py-16 md:py-24 bg-background relative z-10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-glow">Fetch-Qwery</div>
            <p className="text-foreground font-bold text-base md:text-lg max-w-sm leading-relaxed">
              The high-performance data fetching engine for modern React engineering teams.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="https://github.com/dharshan47/fetch-qwery" target="_blank" aria-label="GitHub Repository" className="h-12 w-12 flex items-center justify-center bg-secondary border-2 border-foreground hover:-translate-y-1 transition-transform retro-shadow-sm">
                <Github className="h-6 w-6 text-foreground" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-black uppercase tracking-widest text-xs">Resources</h3>
            <ul className="space-y-4 text-muted-foreground text-sm font-medium">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/docs/guides" className="hover:text-primary transition-colors">Guides</Link></li>
              <li><Link href="/docs/api" className="hover:text-primary transition-colors">API Reference</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-black uppercase tracking-widest text-xs">Product</h3>
            <ul className="space-y-4 text-muted-foreground text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-black uppercase tracking-widest text-xs">Support</h3>
            <ul className="space-y-4 text-muted-foreground text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">GitHub Discussions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Discord</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-semibold">
          <div>© 2026 Fetch-Qwery. All rights reserved.</div>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
