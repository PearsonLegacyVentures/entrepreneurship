import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Playbook } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function PlaybookCard({ playbook }: { playbook: Playbook }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-light-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="bg-off-white text-charcoal hover:bg-off-white">{playbook.category}</Badge>
        <Badge className="bg-navy text-white hover:bg-navy">{playbook.difficulty}</Badge>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-charcoal">{playbook.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-gray">{playbook.summary}</p>
      <div className="mt-6 border-t border-light-border pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">Outcome</p>
        <p className="mt-2 text-sm leading-6 text-charcoal">{playbook.outcome}</p>
      </div>
      <Link to={`/playbooks/${playbook.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
        View playbook <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
