import Link from "next/link";
import type { Area } from "@/lib/types";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAreaBySlug } from "@/data/areas";
import { DIFFERENTIATORS } from "@/lib/constants";

export function AreaPageView({ area }: { area: Area }) {
  const nearby = area.nearbyAreas
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is Area => Boolean(a));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas/" },
    { name: area.name, path: `/${area.slug}/` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), faqSchema(area.localFaqs)]} />
      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        eyebrow={`${area.county} · Concrete Pros of Nashville`}
        headline={`Concrete Contractor Serving ${area.name}, TN`}
        subheadline={`${area.distanceNote} We build and repair concrete throughout ${area.name}, from ${area.landmarks[0]} to ${area.landmarks[area.landmarks.length - 1]}.`}
        imageAlt={`Concrete Pros of Nashville project in ${area.name}, TN`}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5 text-concrete-700">
            <h2 className="font-heading text-2xl font-extrabold text-concrete-900">About Serving {area.name}</h2>
            {area.neighborhoodCharacter.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>{area.soilAndClimateNotes}</p>
          </div>
          <PlaceholderImage
            alt={`Concrete driveway and patio work in ${area.name}, TN, near ${area.landmarks[0]}`}
            icon="driveway"
            tone={2}
          />
        </div>
      </section>

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
            Why {area.name} Chooses Concrete Pros of Nashville
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title}>
                <h3 className="font-heading text-lg font-bold text-concrete-900">{d.title}</h3>
                <p className="mt-1.5 text-sm text-concrete-600">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGrid areaSlug={area.slug} title={`Services We Offer in ${area.name}`} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-concrete-900 mb-4">
          Permitting in {area.name}
        </h2>
        <p className="text-concrete-700">{area.permitAuthorityNote}</p>
      </section>

      <FAQSection title={`${area.name} FAQs`} faqs={area.localFaqs} />

      {nearby.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-2xl font-extrabold text-concrete-900 mb-6 text-center">
            Nearby Areas We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/${n.slug}/`}
                className="rounded-md border border-concrete-300 px-5 py-2.5 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
              >
                {n.name}, TN
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection
        headline={`Get a Free Estimate in ${area.name}`}
        body={`${area.distanceNote} Reach out for a free, no-obligation estimate on your ${area.name} project.`}
      />
    </>
  );
}
