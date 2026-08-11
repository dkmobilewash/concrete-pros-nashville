import type { FAQ } from "@/lib/types";

export function FAQSection({ title = "Frequently Asked Questions", faqs }: { title?: string; faqs: FAQ[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-8 text-center">
        {title}
      </h2>
      <div className="divide-y divide-concrete-200 border-y border-concrete-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-lg font-bold text-concrete-900">
              {faq.question}
              <span className="mt-1 shrink-0 text-brand-600 transition-transform group-open:rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-concrete-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
