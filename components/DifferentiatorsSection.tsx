import { DIFFERENTIATORS } from "@/lib/constants";

export function DifferentiatorsSection({ title = "Why Choose Concrete Pros of Nashville" }: { title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {DIFFERENTIATORS.map((d) => (
          <div key={d.title} className="flex gap-4">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold text-concrete-900">{d.title}</h3>
              <p className="mt-1.5 text-concrete-600 text-sm">{d.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
