import Link from "next/link";
import { areas } from "@/data/areas";

export function AreaGrid({ serviceSlug, title = "Where We Work" }: { serviceSlug?: string; title?: string }) {
  return (
    <section className="bg-concrete-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area) => {
            const href = serviceSlug ? `/${serviceSlug}/${area.slug}/` : `/${area.slug}/`;
            return (
              <Link
                key={area.slug}
                href={href}
                className="rounded-lg border border-concrete-200 bg-white px-5 py-4 text-center font-heading font-bold text-concrete-800 hover:border-brand-400 hover:text-brand-700 hover:shadow-md transition-all"
              >
                {area.name}
                <span className="block text-xs font-sans font-normal text-concrete-500 mt-0.5">{area.county}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
