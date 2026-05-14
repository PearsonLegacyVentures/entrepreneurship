import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { playbooks, tools } from "@/lib/content";
import { BrandBadge } from "@/components/plv/BrandBadge";
import { SectionHeading } from "@/components/plv/SectionHeading";
import { FeatureGrid } from "@/components/plv/FeatureGrid";
import { PlaybookCard } from "@/components/plv/PlaybookCard";
import { ResourceCard } from "@/components/plv/ResourceCard";
import { EmailCapture } from "@/components/plv/EmailCapture";

const setupPath = [
  { title: "Visualize the idea", description: "Use tools like Lovable to turn a rough idea into a live visual concept before wasting months overthinking." },
  { title: "Build digital legitimacy", description: "Set up the website, domain, professional email, social profiles, Google presence, and trust signals that make the business feel real." },
  { title: "Validate before you marry the idea", description: "Run simple ads, landing pages, and lead capture tests to see if the market actually cares." },
  { title: "Launch with systems", description: "Use AI, templates, SOPs, and simple automations to move faster without building chaos." },
  { title: "Grow with distribution", description: "Use SEO, Meta ads, founder-led content, and partnerships to turn attention into revenue." },
];

const founderTools = ["Business Name Checklist", "Website Launch Checklist", "Social Profile Audit", "Google Business Profile Checklist", "Ad Validation Tracker", "Pitch Deck Outline", "AI Prompt Vault", "Business Plan Builder"];

export default function Home() {
  const featuredPlaybooks = playbooks.filter((playbook) => playbook.featured).slice(0, 6);

  return (
    <PageLayout>
      <Seo title="Build your business like it’s supposed to exist" description="Pearson Legacy Ventures Founder Lab helps Caribbean entrepreneurs turn rough ideas into digitally legitimate businesses using practical systems, modern tools, and real execution." canonicalPath="/" />
      <section className="overflow-hidden bg-deep-navy text-white">
        <div className="content-container grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <BrandBadge>Founder Lab · Entrepreneurship</BrandBadge>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Build your business like it’s supposed to exist.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">Pearson Legacy Ventures Founder Lab helps Caribbean entrepreneurs turn rough ideas into digitally legitimate businesses using practical systems, modern tools, and real execution.</p>
            <p className="mt-6 max-w-2xl border-l border-gold/50 pl-5 text-base leading-8 text-white/66">Most entrepreneurs do not fail because the idea is bad. They fail because the setup is sloppy, the offer is unclear, the online presence looks unfinished, and the market was never properly tested.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90"><Link to="/start-here">Start the Setup Path</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white hover:text-navy"><Link to="/tools">Browse Founder Tools</Link></Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-5 text-charcoal sm:p-6">
              <div className="flex items-center justify-between border-b border-light-border pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-gray">Setup Path</p>
                  <h2 className="mt-2 text-2xl font-semibold">Digital legitimacy board</h2>
                </div>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">MVP</span>
              </div>
              <div className="mt-6 space-y-3">
                {["Visualize", "Validate", "Build", "Launch", "Grow"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-light-border bg-off-white p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gold" />
                      <span className="font-semibold text-charcoal">{item}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-gray">0{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-deep-navy p-5 text-white">
                <p className="text-sm leading-7 text-white/72">A founder war room for websites, domains, email, social presence, Google trust, ads, AI prompts, pitch assets, and the discipline to test before overbuilding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-container section-padding">
        <SectionHeading eyebrow="The path" title="The modern business setup path" description="A structured journey from rough idea to credible digital business infrastructure." />
        <div className="mt-10"><FeatureGrid features={setupPath} columns={3} /></div>
      </section>

      <section className="bg-white">
        <div className="content-container grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading eyebrow="Operating system" title="This is not a course. It is a founder operating system." description="Courses teach information. Founder Lab gives you repeatable setup systems, templates, prompts, checklists, and real execution paths." />
          <div className="rounded-[2rem] border border-light-border bg-off-white p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Founder infrastructure', 'Digital legitimacy', 'Market validation', 'Operational clarity'].map((item) => <div key={item} className="rounded-2xl bg-white p-5 font-semibold text-charcoal shadow-sm">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="content-container section-padding">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Playbooks" title="Featured Playbooks" description="Step-by-step systems for the first serious layers of the business." />
          <Button asChild variant="outline"><Link to="/playbooks">View all playbooks</Link></Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featuredPlaybooks.map((playbook) => <PlaybookCard key={playbook.id} playbook={playbook} />)}</div>
      </section>

      <section className="bg-white">
        <div className="content-container py-16 sm:py-20">
          <SectionHeading eyebrow="Tools" title="Founder Tools" description="Practical assets for thinking clearly, looking serious, and testing demand before the budget gets dramatic." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{founderTools.map((title, index) => <ResourceCard key={title} title={title} description={tools[index]?.description || "A practical founder asset prepared for the toolkit."} href="/tools" eyebrow={index === 0 ? "Available" : "Tool"} cta="View tools" />)}</div>
        </div>
      </section>

      <section className="content-container py-16 sm:py-20">
        <div className="rounded-[2rem] border border-light-border bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <SectionHeading eyebrow="Built from the field" title="Credibility without costume jewelry" description="This platform is built from real venture work across wellness, tourism, events, software, AI automation, digital marketing, SEO, partnerships, pitch competitions, and Caribbean market testing." />
        </div>
      </section>
      <EmailCapture />
    </PageLayout>
  );
}
