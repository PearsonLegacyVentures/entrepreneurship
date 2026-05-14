import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailCapture() {
  return (
    <section className="content-container py-16 sm:py-20">
      <div className="grid gap-8 rounded-[2rem] bg-deep-navy p-6 text-white sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Founder checklist</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Get the founder setup checklist.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">A practical checklist for turning a business idea into a digital presence that customers, partners, and funders can take seriously.</p>
        </div>
        <form className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col xl:flex-row" onSubmit={(event) => event.preventDefault()}>
          <Input type="email" required placeholder="Email address" aria-label="Email address" className="h-12 border-white/15 bg-white text-charcoal placeholder:text-muted-gray" />
          <Button type="submit" className="h-12 bg-gold px-6 text-navy hover:bg-gold/90">Send Me the Checklist</Button>
        </form>
      </div>
    </section>
  );
}
