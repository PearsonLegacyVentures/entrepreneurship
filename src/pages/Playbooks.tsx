import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { playbookCategories, playbooks } from "@/lib/content";
import { PageHeader } from "@/components/plv/PageHeader";
import { PlaybookCard } from "@/components/plv/PlaybookCard";

export default function Playbooks() {
  return (
    <PageLayout>
      <Seo title="Founder Playbooks" description="Step-by-step systems for building digital legitimacy, testing demand, and launching smarter." canonicalPath="/playbooks" />
      <PageHeader eyebrow="Playbooks" title="Founder Playbooks" description="Step-by-step systems for building digital legitimacy, testing demand, and launching smarter." />
      <section className="content-container py-10">
        <div className="flex flex-wrap gap-2">{playbookCategories.map((category) => <span key={category} className="rounded-full border border-light-border bg-white px-4 py-2 text-sm font-medium text-charcoal">{category}</span>)}</div>
      </section>
      <section className="content-container pb-20"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{playbooks.map((playbook) => <PlaybookCard key={playbook.id} playbook={playbook} />)}</div></section>
    </PageLayout>
  );
}
