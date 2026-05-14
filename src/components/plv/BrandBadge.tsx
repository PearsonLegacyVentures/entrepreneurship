import { cn } from "@/lib/utils";

export function BrandBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold", className)}>
      {children}
    </span>
  );
}
