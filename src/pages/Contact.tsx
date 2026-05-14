import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";
import { PageHeader } from "@/components/plv/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const helpOptions = ["Website setup", "AI automation", "Business setup consulting", "Pitch deck help", "Digital presence audit", "Partnership opportunity", "Speaking/workshop"];
const budgets = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+", "Not sure yet"];

export default function Contact() {
  return (
    <PageLayout>
      <Seo title="Work With Pearson Legacy Ventures" description="Inquire about website setup, AI automation, business setup consulting, pitch deck help, digital presence audits, partnerships, and workshops." canonicalPath="/contact" />
      <PageHeader eyebrow="Work with us" title="Work With Pearson Legacy Ventures" description="Get help with website setup, AI automation, business setup consulting, pitch decks, digital presence audits, partnerships, or founder workshops." />
      <section className="content-container section-padding"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><h2 className="text-3xl font-semibold tracking-tight text-charcoal">Tell us what you are building.</h2><p className="mt-4 text-base leading-8 text-muted-gray">Use the form to explain the business, the stage, and where the setup is stuck. Keep it plain. We care more about clarity than performance theater.</p><div className="mt-8 grid gap-3">{helpOptions.map((item) => <div key={item} className="rounded-2xl border border-light-border bg-white p-4 text-sm font-semibold text-charcoal">{item}</div>)}</div></div><form className="rounded-[2rem] border border-light-border bg-white p-6 shadow-sm sm:p-8" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2"><Field label="Name"><Input required /></Field><Field label="Email"><Input type="email" required /></Field><Field label="Business name"><Input /></Field><Field label="What help do you need?"><Select><SelectTrigger><SelectValue placeholder="Select one" /></SelectTrigger><SelectContent>{helpOptions.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></Field><Field label="Budget range"><Select><SelectTrigger><SelectValue placeholder="Select one" /></SelectTrigger><SelectContent>{budgets.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></Field><Field label="What are you building?" className="sm:col-span-2"><Textarea rows={4} /></Field><Field label="Message" className="sm:col-span-2"><Textarea rows={5} /></Field></div><Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">Send inquiry</Button></form></div></section>
    </PageLayout>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return <div className={className}><Label className="mb-2 block text-sm font-semibold text-charcoal">{label}</Label>{children}</div>;
}
