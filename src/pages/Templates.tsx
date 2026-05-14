import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { templateCategories, templates } from "@/lib/content";
import { PageHeader } from "@/components/plv/PageHeader";
import { TemplateCard } from "@/components/plv/TemplateCard";

export default function Templates() {
  return (
    <PageLayout>
      <Seo title="Founder Templates & Toolkits" description="Practical assets for entrepreneurs who want to move faster without inventing every document from scratch." canonicalPath="/templates" />
      <PageHeader eyebrow="Templates" title="Founder Templates & Toolkits" description="Practical assets for entrepreneurs who want to move faster without inventing every document from scratch." />
      <section className="content-container py-10"><div className="flex flex-wrap gap-2">{templateCategories.map((category) => <span key={category} className="rounded-full border border-light-border bg-white px-4 py-2 text-sm font-medium text-charcoal">{category}</span>)}</div></section>
      <section className="content-container pb-20"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{templates.map((template) => <TemplateCard key={template.id} template={template} />)}</div></section>
    </PageLayout>
  );
}
