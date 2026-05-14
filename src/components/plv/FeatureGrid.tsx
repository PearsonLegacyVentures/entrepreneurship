import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  meta?: string;
}

export function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={cn("grid gap-4", columns === 2 && "md:grid-cols-2", columns === 3 && "md:grid-cols-3", columns === 4 && "md:grid-cols-2 lg:grid-cols-4")}>
      {features.map((feature, index) => (
        <article key={feature.title} className="group rounded-2xl border border-light-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
            {feature.meta ? <span className="rounded-full bg-off-white px-3 py-1 text-xs font-medium text-muted-gray">{feature.meta}</span> : null}
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-charcoal">{feature.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-gray">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
