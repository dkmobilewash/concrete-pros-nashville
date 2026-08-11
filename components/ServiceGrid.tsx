import Link from "next/link";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export function ServiceGrid({ areaSlug, title = "Our Services" }: { areaSlug?: string; title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {title && (
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => {
          const href = areaSlug ? `/${service.slug}/${areaSlug}/` : `/${service.slug}/`;
          return (
            <Link
              key={service.slug}
              href={href}
              className="group rounded-lg border border-concrete-200 bg-white p-6 hover:border-brand-400 hover:shadow-md transition-all"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-concrete-900">{service.name}</h3>
              <p className="mt-1.5 text-sm text-concrete-600">{service.shortDescription}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
