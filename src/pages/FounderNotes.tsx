import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { articles } from "@/lib/content";
import { PageHeader } from "@/components/plv/PageHeader";
import { ArticleCard } from "@/components/plv/ArticleCard";

export default function FounderNotes() {
  return (
    <PageLayout>
      <Seo title="Founder Notes" description="Strategic notes on building businesses, testing demand, digital infrastructure, and Caribbean entrepreneurship." canonicalPath="/founder-notes" />
      <PageHeader eyebrow="Articles" title="Founder Notes" description="Strategic notes on building businesses, testing demand, digital infrastructure, and Caribbean entrepreneurship." />
      <section className="content-container section-padding"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <ArticleCard key={article.id} article={article} />)}</div></section>
    </PageLayout>
  );
}
