import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandBadge } from "./BrandBadge";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  meta?: string;
  cta?: string;
}

export function ResourceCard({ title, description, href, eyebrow, meta, cta = "Open resource" }: ResourceCardProps) {
  return (
    <Link to={href} className="group block rounded-2xl border border-light-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5">
      <div className="mb-5 flex items-start justify-between gap-4">
        {eyebrow ? <BrandBadge className="tracking-[0.16em]">{eyebrow}</BrandBadge> : <span />}
        {meta ? <span className="rounded-full bg-off-white px-3 py-1 text-xs font-medium text-muted-gray">{meta}</span> : null}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-gray">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
        {cta} <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
