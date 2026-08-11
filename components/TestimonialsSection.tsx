import { COMPANY } from "@/lib/constants";

/**
 * No real reviews were supplied with this build. Per the build spec, we do
 * not fabricate named customer quotes. These illustrative cards are clearly
 * labeled as placeholders and should be replaced with real, attributed
 * Google/BBB reviews before launch.
 */
const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "Sample review placeholder — replace with a real, attributed customer quote before launch. Keep the tone specific: what was the project, and what stood out about working with the crew?",
    context: "Homeowner · Brentwood, TN (placeholder)",
  },
  {
    quote:
      "Sample review placeholder — replace with a real, attributed customer quote before launch. Real reviews naming the specific service (driveway, patio, repair) perform better for local search than generic praise.",
    context: "Homeowner · East Nashville, TN (placeholder)",
  },
  {
    quote:
      "Sample review placeholder — replace with a real, attributed customer quote before launch. Pull directly from Google reviews with the customer's permission where possible.",
    context: "Property Manager · Murfreesboro, TN (placeholder)",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-concrete-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-concrete-600">
            Real reviews are being compiled from our Google Business Profile — the cards below are placeholders
            pending real, attributed customer feedback.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_REVIEWS.map((r, i) => (
            <div key={i} className="rounded-lg bg-white border border-concrete-200 p-6">
              <p className="text-concrete-700 text-sm italic">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-concrete-500">{r.context}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={COMPANY.social.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 font-bold hover:text-brand-700"
          >
            Read our reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
