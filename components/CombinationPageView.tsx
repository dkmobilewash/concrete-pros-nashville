import Link from "next/link";
import type { Area, Service } from "@/lib/types";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getCombinationContent } from "@/lib/combinationContent";
import { getServiceBySlug } from "@/data/services";
import { getAreaBySlug } from "@/data/areas";

export function CombinationPageView({ service, area }: { service: Service; area: Area }) {
  const content = getCombinationContent(service, area);

  const otherServicesInArea = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  const thisServiceNearbyAreas = area.nearbyAreas
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is Area => Boolean(a));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.name, path: `/${service.slug}/` },
    { name: area.name, path: `/${service.slug}/${area.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema(service, area),
          faqSchema(content.faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        eyebrow={`${area.name}, TN · ${area.county}`}
        headline={`${service.name} in ${area.name}, TN`}
        subheadline={service.heroSubheadline}
        imageAlt={`${service.name} completed by Concrete Pros of Nashville in ${area.name}, TN`}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5 text-concrete-700">
            {content.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <PlaceholderImage
            alt={`${service.name} project in ${area.name}, TN by Concrete Pros of Nashville`}
            icon={service.icon}
          />
        </div>
      </section>

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-6 text-center">
            Why {service.name} Matters in {area.name}
          </h2>
          <p className="text-concrete-700">{content.matters}</p>
        </div>
      </section>

      <ProcessSection
        title="What's Included"
        intro={`Our standard process, applied to ${service.name.toLowerCase()} work in ${area.name}.`}
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-concrete-900 mb-4">
          Permitting for {service.name} in {area.name}
        </h2>
        <p className="text-concrete-700">{content.permitNote}</p>
      </section>

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-concrete-900 mb-4 text-center">
            Why Choose Us for {service.name} in {area.name}
          </h2>
          <p className="text-concrete-700">{content.whyChooseUs}</p>
        </div>
      </section>

      <FAQSection title={`${service.name} in ${area.name} — FAQs`} faqs={content.faqs} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {otherServicesInArea.length > 0 && (
          <div>
            <h2 className="font-heading text-xl font-bold text-concrete-900 mb-4 text-center">
              Other Services in {area.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherServicesInArea.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${area.slug}/`}
                  className="rounded-md border border-concrete-300 px-4 py-2 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
                >
                  {s.name} in {area.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {thisServiceNearbyAreas.length > 0 && (
          <div>
            <h2 className="font-heading text-xl font-bold text-concrete-900 mb-4 text-center">
              {service.name} in Nearby Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {thisServiceNearbyAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${service.slug}/${a.slug}/`}
                  className="rounded-md border border-concrete-300 px-4 py-2 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
                >
                  {service.name} in {a.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 pt-2 text-sm">
          <Link href={`/${service.slug}/`} className="text-brand-600 font-semibold hover:text-brand-700">
            ← All {service.name} info
          </Link>
          <span className="text-concrete-300">|</span>
          <Link href={`/${area.slug}/`} className="text-brand-600 font-semibold hover:text-brand-700">
            All services in {area.name} →
          </Link>
        </div>
      </section>

      <CTASection headline={content.cta.headline} body={content.cta.body} />
    </>
  );
}
