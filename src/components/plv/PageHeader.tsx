import { BrandBadge } from "./BrandBadge";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-deep-navy text-white">
      <div className="content-container py-16 sm:py-20 lg:py-24">
        {eyebrow ? <BrandBadge>{eyebrow}</BrandBadge> : null}
        <div className="mt-5 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
