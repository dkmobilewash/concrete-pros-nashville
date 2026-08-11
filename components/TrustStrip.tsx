import { COMPANY } from "@/lib/constants";

// NOTE: rating/review count pull from lib/constants.ts placeholders.
// Replace with the real Google Business Profile figures before launch.
const ITEMS = [
  { label: `${COMPANY.reviewRatingPlaceholder}★ Google Rating`, sub: `${COMPANY.reviewCountPlaceholder}+ reviews` },
  { label: "Family-Owned", sub: "Locally operated, not a franchise" },
  { label: "Licensed & Insured", sub: "Documentation on request" },
  { label: "Free Written Estimates", sub: "No pressure, no hidden fees" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-concrete-200 bg-concrete-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {ITEMS.map((item) => (
            <div key={item.label}>
              <p className="font-heading text-lg sm:text-xl font-bold text-brand-700">{item.label}</p>
              <p className="text-xs sm:text-sm text-concrete-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
