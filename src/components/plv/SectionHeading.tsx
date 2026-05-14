import { BrandBadge } from "./BrandBadge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <BrandBadge>{eyebrow}</BrandBadge> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-muted-gray sm:text-lg">{description}</p> : null}
    </div>
  );
}
