import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { PageHeader } from "@/components/plv/PageHeader";
import { SectionHeading } from "@/components/plv/SectionHeading";
import { FeatureGrid } from "@/components/plv/FeatureGrid";

const philosophy = ["Validate before overbuilding", "Make the business look real early", "Build digital infrastructure first", "Use AI as leverage", "Treat perception as a business asset", "Distribution beats silent perfection", "Execution beats fantasy planning"];

export default function About() {
  return (
    <PageLayout>
      <Seo title="About Pearson Legacy Ventures" description="Pearson Legacy Ventures is a venture-building platform focused on creating, testing, and scaling businesses from The Bahamas with global ambition." canonicalPath="/about" />
      <PageHeader eyebrow="About" title="Pearson Legacy Ventures" description="Pearson Legacy Ventures is a venture-building platform focused on creating, testing, and scaling businesses from The Bahamas with global ambition." />
      <section className="content-container section-padding"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><SectionHeading eyebrow="Founder Lab" title="The entrepreneurship vertical" description="Founder Lab is the entrepreneurship vertical, built to document and systemize the process of turning ideas into digitally legitimate businesses." /><div className="rounded-[2rem] border border-light-border bg-white p-6 shadow-sm sm:p-8"><p className="text-lg leading-8 text-charcoal">The platform is built for founders who need practical setup systems: websites, domains, email, social presence, Google visibility, AI leverage, pitch assets, and validation loops that can survive contact with the market.</p></div></div></section>
      <section className="bg-white"><div className="content-container py-16 sm:py-20"><FeatureGrid columns={4} features={[{ title: "What PLV Builds", description: "Venture concepts, digital infrastructure, AI workflows, tourism-facing products, and founder tools." }, { title: "Why Founder Lab Exists", description: "To make the early business-building process clearer, faster, and less dependent on guesswork." }, { title: "The Operating Philosophy", description: "Build credibility early, validate demand, and use systems to make execution repeatable." }, { title: "Built From Real Execution", description: "Informed by wellness, tourism, events, software, digital marketing, SEO, partnerships, and pitch work." }]} /></div></section>
      <section className="content-container section-padding"><SectionHeading eyebrow="Operating philosophy" title="The standards behind the work" description="Simple rules that keep the platform practical and commercially useful." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{philosophy.map((item) => <div key={item} className="rounded-2xl border border-light-border bg-white p-5 font-semibold text-charcoal shadow-sm">{item}</div>)}</div></section>
    </PageLayout>
  );
}
