import type { Template } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function TemplateCard({ template }: { template: Template }) {
  return (
    <article className="rounded-2xl border border-light-border bg-white p-5 shadow-sm transition duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="secondary" className="bg-off-white text-charcoal hover:bg-off-white">{template.category}</Badge>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{template.accessLevel}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-charcoal">{template.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-gray">{template.description}</p>
    </article>
  );
}
