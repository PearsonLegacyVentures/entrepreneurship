import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { tools } from "@/lib/content";
import { PageHeader } from "@/components/plv/PageHeader";
import { ToolCard } from "@/components/plv/ToolCard";

export default function Tools() {
  return (
    <PageLayout>
      <Seo title="Founder Tools" description="Simple tools to help entrepreneurs think clearly, launch faster, and avoid building expensive fantasies." canonicalPath="/tools" />
      <PageHeader eyebrow="Tools" title="Founder Tools" description="Simple tools to help entrepreneurs think clearly, launch faster, and avoid building expensive fantasies." />
      <section className="content-container section-padding"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}</div></section>
    </PageLayout>
  );
}
