import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection({ title = "How It Works", intro }: { title?: string; intro?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900">{title}</h2>
        {intro && <p className="mt-3 text-concrete-600">{intro}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step) => (
          <div key={step.step} className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-heading text-lg font-bold text-white">
                {step.step}
              </span>
              <h3 className="font-heading text-xl font-bold text-concrete-900">{step.name}</h3>
            </div>
            <p className="text-sm text-concrete-600">{step.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
