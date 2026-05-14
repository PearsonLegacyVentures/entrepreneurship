import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-light-border bg-white">
      <div className="content-container py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-navy text-sm font-semibold text-gold">PLV</span>
              <span>
                <span className="block text-sm font-semibold tracking-[0.16em] text-charcoal">Pearson Legacy</span>
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-muted-gray">Founder Lab</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-gray">{siteConfig.tagline}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-gray">Built from The Bahamas. Designed for serious founders.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Platform" items={siteConfig.footer.platform} />
            <FooterColumn title="Company" items={siteConfig.footer.company} />
            <div>
              <h4 className="text-sm font-semibold text-charcoal">Future Verticals</h4>
              <ul className="mt-4 space-y-3">
                {siteConfig.footer.future.map((item) => <li key={item} className="text-sm text-muted-gray">{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-light-border pt-6 text-sm text-muted-gray sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pearson Legacy Ventures. All rights reserved.</p>
          <Link to="/admin" className="text-muted-gray transition hover:text-charcoal">Admin placeholder</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-charcoal">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link to={item.href} className="text-sm text-muted-gray transition hover:text-charcoal">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
