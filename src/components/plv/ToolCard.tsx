import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { FounderTool } from "@/lib/types";

export function ToolCard({ tool }: { tool: FounderTool }) {
  const isAvailable = tool.status === "Available";
  return (
    <article className="rounded-2xl border border-light-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge className={isAvailable ? "bg-navy text-white hover:bg-navy" : "bg-off-white text-muted-gray hover:bg-off-white"}>{tool.status}</Badge>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">{tool.category}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-charcoal">{tool.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-gray">{tool.description}</p>
      <Button variant={isAvailable ? "default" : "outline"} className="mt-6 w-full justify-between" disabled={!isAvailable}>
        {isAvailable ? "Open tool" : "Notify me"} <ArrowRight className="h-4 w-4" />
      </Button>
    </article>
  );
}
