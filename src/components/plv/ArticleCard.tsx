import type { Article } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group rounded-2xl border border-light-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5">
      <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
        <span>{article.category}</span>
        <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal">{article.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-gray">{article.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
        Read note <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </article>
  );
}
