export function FounderPrincipleCard({ title, description, source }: { title: string; description: string; source?: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white">
      {source ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{source}</p> : null}
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/68">{description}</p>
    </article>
  );
}
