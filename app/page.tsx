import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceGrid } from "@/components/ServiceGrid";
import { AreaGrid } from "@/components/AreaGrid";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/generalFaqs";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.name} | Concrete Contractor in Nashville, TN`,
  description:
    "Family-owned concrete contractor serving Nashville, TN and the surrounding metro. Driveways, patios, foundations, stamped concrete, repair & more. Free written estimates — call (615) 239-1809.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero
        eyebrow="Family-Owned · Licensed & Insured · Serving Greater Nashville"
        headline="Concrete Built to Last in Nashville's Clay Soil and Weather"
        subheadline="Driveways, patios, foundations, and repairs from a local crew that shows up when it says it will and stands behind the work. Free written estimates, no pressure."
        imageAlt="Concrete Pros of Nashville crew finishing a freshly poured residential driveway in Nashville, TN"
      />
      <TrustStrip />

      <ServiceGrid title="What We Build" />

      <AreaGrid title="Proudly Serving Greater Nashville" />

      <DifferentiatorsSection />

      <ProcessSection intro="Every project — from a small repair to a full driveway replacement — follows the same four steps, so you always know what's next." />

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 mb-4">
            A Family Business, Not a Franchise
          </h2>
          <p className="text-concrete-600 max-w-2xl mx-auto mb-6">{COMPANY.founderNote}</p>
          <Link href="/about/" className="font-bold text-brand-600 hover:text-brand-700">
            Read our story →
          </Link>
        </div>
      </section>

      <TestimonialsSection />

      <FAQSection faqs={generalFaqs} />

      <CTASection
        headline="Get a Free, No-Pressure Estimate"
        body="Tell us about your project and we'll schedule a site visit — usually within a few business days. Straight answers on scope, timeline, and cost, every time."
      />
    </>
  );
}
