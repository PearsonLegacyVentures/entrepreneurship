import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { PageHeader } from "@/components/plv/PageHeader";
import { PathwaySteps } from "@/components/plv/PathwaySteps";
import { CTASection } from "@/components/plv/CTASection";

const steps = [
  { title: "Clarify the idea", description: "Name the customer, problem, promise, and first offer before building assets." },
  { title: "Build the first visual version", description: "Use Lovable to make the business tangible and expose weak assumptions early." },
  { title: "Secure the domain", description: "Buy a credible domain so the idea has a serious digital home." },
  { title: "Set up professional email", description: "Create domain-based email, aliases, signatures, and inquiry routing." },
  { title: "Create social presence", description: "Set up Facebook, Instagram, LinkedIn, and founder profiles with consistent naming." },
  { title: "Curate your timeline", description: "Clean the feed, pin useful context, and remove anything that weakens trust." },
  { title: "Set up Google Business Profile", description: "Prepare categories, photos, services, reviews, and search visibility." },
  { title: "Create the first landing page", description: "Publish one clear page that explains the offer and captures interest." },
  { title: "Test demand with Meta ads", description: "Use Facebook and Instagram ads to learn whether the market responds." },
  { title: "Build only after the market responds", description: "Invest more when customer behavior shows the idea deserves it." },
];

export default function StartHere() {
  return (
    <PageLayout>
      <Seo title="Start Here" description="If you have an idea but no real digital setup, this is where to begin." canonicalPath="/start-here" />
      <PageHeader eyebrow="Setup Path" title="Start Here" description="If you have an idea but no real digital setup, this is where to begin." />
      <section className="content-container section-padding"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"><aside className="lg:sticky lg:top-28 lg:self-start"><div className="rounded-[2rem] bg-deep-navy p-6 text-white sm:p-8"><h2 className="text-2xl font-semibold text-white">The first path</h2><p className="mt-4 text-sm leading-7 text-white/70">This sequence builds founder infrastructure before the business gets buried in logos, flyers, and private overthinking.</p><Button asChild className="mt-6 w-full bg-gold text-navy hover:bg-gold/90"><Link to="/playbooks/idea-to-digital-business">Begin with Idea to Digital Business</Link></Button></div></aside><PathwaySteps steps={steps} /></div></section>
      <CTASection title="Start with the first playbook" description="The Idea to Digital Business playbook turns the path into a practical execution sequence." primary={{ label: "Begin with Idea to Digital Business", href: "/playbooks/idea-to-digital-business" }} />
    </PageLayout>
  );
}
