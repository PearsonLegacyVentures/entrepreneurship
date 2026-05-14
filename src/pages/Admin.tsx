import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { PageHeader } from "@/components/plv/PageHeader";

const controls = ["Create playbook", "Edit article", "Upload template", "Publish/unpublish content", "Manage subscribers"];

export default function Admin() {
  return (
    <PageLayout>
      <Seo title="Admin Placeholder" description="Content management placeholder for Pearson Legacy Ventures Founder Lab." canonicalPath="/admin" />
      <PageHeader eyebrow="Admin" title="Content management coming soon" description="This route is prepared for future Supabase-backed controls without exposing admin functionality in the main navigation." />
      <section className="content-container section-padding"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{controls.map((control) => <div key={control} className="rounded-2xl border border-light-border bg-white p-5 text-sm font-semibold text-charcoal shadow-sm">{control}</div>)}</div></section>
    </PageLayout>
  );
}
