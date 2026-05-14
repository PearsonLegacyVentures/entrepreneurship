import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({ title, description, primary, secondary }: CTASectionProps) {
  return (
    <section className="content-container py-16 sm:py-20">
      <div className="rounded-[2rem] border border-light-border bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-muted-gray">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg"><Link to={primary.href}>{primary.label}</Link></Button>
            {secondary ? <Button asChild variant="outline" size="lg"><Link to={secondary.href}>{secondary.label}</Link></Button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
