import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => (href === "/" ? location.pathname === href : location.pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep-navy/95 text-white shadow-sm backdrop-blur-xl">
      <div className="content-container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-sm font-semibold text-gold">PLV</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.18em] text-white">Pearson Legacy</span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-white/55">Founder Lab</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-white ${isActive(item.href) ? "text-white" : "text-white/62"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-gold text-navy hover:bg-gold/90">
            <Link to="/start-here">Start the Setup Path</Link>
          </Button>
        </div>

        <button className="rounded-full border border-white/10 p-2 text-white lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-deep-navy lg:hidden">
          <nav className="content-container flex flex-col gap-1 py-5">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className={`rounded-xl px-3 py-3 text-base font-medium transition-colors ${isActive(item.href) ? "bg-white/8 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-gold text-navy hover:bg-gold/90">
              <Link to="/start-here" onClick={() => setMobileOpen(false)}>Start the Setup Path</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
