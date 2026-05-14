interface Step {
  title: string;
  description: string;
}

export function PathwaySteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative grid gap-4">
      {steps.map((step, index) => (
        <article key={step.title} className="grid gap-4 rounded-2xl border border-light-border bg-white p-5 shadow-sm sm:grid-cols-[72px_1fr] sm:p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-navy font-mono text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-charcoal">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-gray">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
