import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { playbooks, readingPrinciples, templates } from "@/lib/content";
import { PageHeader } from "@/components/plv/PageHeader";
import { SectionHeading } from "@/components/plv/SectionHeading";
import { FeatureGrid } from "@/components/plv/FeatureGrid";
import { PlaybookCard } from "@/components/plv/PlaybookCard";
import { TemplateCard } from "@/components/plv/TemplateCard";
import { FounderPrincipleCard } from "@/components/plv/FounderPrincipleCard";
import { CTASection } from "@/components/plv/CTASection";

const setupPaths = [
  { title: "Idea setup", description: "Clarify the customer, offer, first page, domain, and proof needed to make the idea legible." },
  { title: "Presence setup", description: "Create the website, social profiles, Google presence, WhatsApp flow, and trust signals that make people comfortable contacting you." },
  { title: "Validation setup", description: "Run landing page and Meta ad tests so customer behavior can challenge the founder’s assumptions." },
  { title: "Growth setup", description: "Use SEO, referrals, partnerships, founder-led content, and review systems to keep attention moving toward revenue." },
];

export default function Entrepreneurship() {
  return (
    <PageLayout>
      <Seo title="Entrepreneurship, without the cosplay" description="A practical build room for Caribbean founders who want to set up, validate, and grow businesses with digital infrastructure." canonicalPath="/entrepreneurship" />
      <PageHeader eyebrow="Flagship vertical" title="Entrepreneurship, without the cosplay." description="A practical build room for founders who want to set up, validate, and grow businesses with digital infrastructure, not motivational fog." />
      <section className="content-container section-padding">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Start here" title="The first job is not inspiration. It is setup." description="Founder Lab organizes the messy early work into a sequence: clarify, visualize, legitimize, test, launch, and distribute." />
          <div className="rounded-[2rem] border border-light-border bg-white p-6 shadow-sm sm:p-8">
            <p className="text-lg leading-8 text-charcoal">Caribbean founders often win through trust, referrals, WhatsApp, Facebook, Instagram, tourism traffic, Google search, and direct relationships. The platform respects that reality while building to a global standard.</p>
            <Button asChild className="mt-6"><Link to="/start-here">Start the Setup Path</Link></Button>
          </div>
        </div>
      </section>
      <section className="bg-white"><div className="content-container py-16 sm:py-20"><SectionHeading eyebrow="Setup paths" title="Build in the right order" description="Each path is designed to reduce business theater and create real signals." /><div className="mt-10"><FeatureGrid features={setupPaths} columns={4} /></div></div></section>
      <section className="content-container section-padding"><SectionHeading eyebrow="Featured guides" title="The core entrepreneurship playbooks" description="Guides that help founders make the business look real, test demand, and prepare for funding conversations." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{playbooks.slice(0, 6).map((playbook) => <PlaybookCard key={playbook.id} playbook={playbook} />)}</div></section>
      <section className="bg-white"><div className="content-container py-16 sm:py-20"><SectionHeading eyebrow="Templates" title="Documents that create movement" description="Not paperwork for decoration. Practical assets that help founders make decisions, publish faster, and follow up professionally." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{templates.slice(0, 8).map((template) => <TemplateCard key={template.id} template={template} />)}</div></div></section>
      <section className="content-container section-padding"><SectionHeading eyebrow="Founder systems" title="Systems beat scattered effort" description="The recurring operating standards behind the platform." /><div className="mt-10"><FeatureGrid columns={3} features={[{ title: "Execution infrastructure", description: "Templates, SOPs, prompts, and checklists that make repeatable work less fragile." }, { title: "Digital trust stack", description: "Website, domain, email, social presence, Google, reviews, and clear inquiry flows." }, { title: "Demand testing", description: "Landing pages, Meta ads, WhatsApp follow-up, and decision rules before overbuilding." }]} /></div></section>
      <section className="bg-deep-navy"><div className="content-container py-16 sm:py-20"><SectionHeading eyebrow="Recommended Reading & Thinking" title="Frameworks are useful when they improve judgment." description="The platform is influenced by high-level principles from business, execution, pricing, innovation, hiring, leadership, creativity, sales, and endurance literature — without pretending book notes are a business model." /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{readingPrinciples.map((principle) => <FounderPrincipleCard key={principle.title} {...principle} />)}</div></div></section>
      <CTASection title="Ready to stop circling the idea?" description="Begin with the setup path and build the first version of the business with enough clarity to test." primary={{ label: "Start Here", href: "/start-here" }} secondary={{ label: "Browse Playbooks", href: "/playbooks" }} />
    </PageLayout>
  );
}
