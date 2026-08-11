import Link from "next/link";
import type { Service } from "@/lib/types";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSection } from "@/components/ProcessSection";
import { AreaGrid } from "@/components/AreaGrid";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import { DIFFERENTIATORS } from "@/lib/constants";

export function ServicePageView({ service }: { service: Service }) {
  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.name, path: `/${service.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema(service),
          faqSchema(service.faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        eyebrow="Concrete Pros of Nashville"
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        imageAlt={`${service.name} project completed by Concrete Pros of Nashville`}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5 text-concrete-700">
            {service.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <PlaceholderImage
            alt={`Example of completed ${service.name.toLowerCase()} work by Concrete Pros of Nashville in the Nashville, TN metro`}
            icon={service.icon}
          />
        </div>
      </section>

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
            Signs You Need {service.name}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.commonProblems.map((problem, i) => (
              <li key={i} className="flex gap-3 rounded-lg bg-white border border-concrete-200 p-5">
                <span className="mt-0.5 shrink-0 text-brand-600">
                  <ServiceIcon icon={service.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm text-concrete-700">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.materials.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
            Materials &amp; Techniques
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {service.materials.map((m, i) => (
              <li key={i} className="flex gap-3 text-sm text-concrete-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {m}
              </li>
            ))}
          </ul>
        </section>
      )}

      <ProcessSection
        title="Our Process"
        intro={service.processNote || `Here's how a ${service.name.toLowerCase()} project runs from first call to final walkthrough.`}
      />

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-10 text-center">
            Why Choose Us for {service.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {DIFFERENTIATORS.slice(0, 4).map((d) => (
              <div key={d.title}>
                <h3 className="font-heading text-lg font-bold text-concrete-900">{d.title}</h3>
                <p className="mt-1.5 text-sm text-concrete-600">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AreaGrid serviceSlug={service.slug} title={`${service.name} Across the Nashville Metro`} />

      <FAQSection title={`${service.name} FAQs`} faqs={service.faqs} />

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-2xl font-extrabold text-concrete-900 mb-6 text-center">
            Related Services
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}/`}
                className="rounded-md border border-concrete-300 px-5 py-2.5 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection
        headline={`Get a Free ${service.name} Estimate`}
        body={`Tell us about your project and we'll schedule a site visit — usually within a few business days. Straight answers on scope, timeline, and cost.`}
      />
    </>
  );
}
