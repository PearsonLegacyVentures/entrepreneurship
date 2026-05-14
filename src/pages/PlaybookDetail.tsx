import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { playbooks } from "@/lib/content";
import { CTASection } from "@/components/plv/CTASection";
import NotFound from "./NotFound";

export default function PlaybookDetail() {
  const { slug } = useParams();
  const playbook = playbooks.find((item) => item.slug === slug);
  if (!playbook) return <NotFound />;
  const related = playbooks.filter((item) => item.category === playbook.category && item.id !== playbook.id).slice(0, 3);

  return (
    <PageLayout>
      <Seo title={playbook.title} description={playbook.summary} canonicalPath={`/playbooks/${playbook.slug}`} />
      <section className="bg-deep-navy text-white"><div className="content-container py-12 sm:py-16"><Button asChild variant="ghost" className="mb-8 text-white/70 hover:bg-white/10 hover:text-white"><Link to="/playbooks"><ArrowLeft className="mr-2 h-4 w-4" /> Back to playbooks</Link></Button><div className="max-w-4xl"><div className="flex flex-wrap gap-2"><Badge className="bg-gold text-navy hover:bg-gold">{playbook.category}</Badge><Badge variant="outline" className="border-white/20 text-white">{playbook.difficulty}</Badge><Badge variant="outline" className="border-white/20 text-white">{playbook.estimatedTime}</Badge></div><h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">{playbook.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{playbook.summary}</p></div></div></section>
      <section className="content-container section-padding"><div className="grid gap-8 lg:grid-cols-[1fr_360px]"><div><div className="rounded-[2rem] border border-light-border bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">Outcome</p><p className="mt-3 text-xl leading-8 text-charcoal">{playbook.outcome}</p></div><div className="mt-8"><h2 className="text-3xl font-semibold tracking-tight text-charcoal">Modules</h2><div className="mt-6 space-y-4">{playbook.modules.map((module, index) => <article key={module.id} className="rounded-2xl border border-light-border bg-white p-5 shadow-sm"><div className="flex gap-4"><span className="font-mono text-sm text-gold">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-semibold text-charcoal">{module.title}</h3><p className="mt-2 text-sm leading-7 text-muted-gray">{module.description}</p></div></div></article>)}</div></div></div><aside className="space-y-5"><InfoPanel title="Tools needed" items={playbook.toolsNeeded} /><InfoPanel title="Templates included" items={playbook.templatesIncluded} /><div className="rounded-2xl bg-deep-navy p-6 text-white"><h3 className="text-xl font-semibold text-white">Start this playbook</h3><p className="mt-3 text-sm leading-7 text-white/70">Use this as your operating sequence. Full tracking and gated access can connect to Supabase later.</p><Button className="mt-5 w-full bg-gold text-navy hover:bg-gold/90">Start playbook</Button></div></aside></div></section>
      {related.length ? <section className="content-container pb-16"><h2 className="text-2xl font-semibold tracking-tight text-charcoal">Related playbooks</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.id} to={`/playbooks/${item.slug}`} className="rounded-2xl border border-light-border bg-white p-5 text-sm font-semibold text-charcoal transition hover:border-gold/40">{item.title}</Link>)}</div></section> : null}
      <CTASection title="Need help turning this into execution?" description="Pearson Legacy Ventures can help with website setup, AI automation, pitch assets, and digital presence audits." primary={{ label: "Work With Us", href: "/contact" }} />
    </PageLayout>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-2xl border border-light-border bg-white p-6 shadow-sm"><h3 className="font-semibold text-charcoal">{title}</h3><ul className="mt-4 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-gray"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}</li>)}</ul></div>;
}
