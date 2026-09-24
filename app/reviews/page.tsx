import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustStrip } from "@/components/TrustStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";
import { socialMeta } from "@/lib/seo";

const TITLE = "Reviews";
const DESCRIPTION =
  "See what Nashville-area homeowners and property managers say about Concrete Pros of Nashville's driveway, patio, foundation, and repair work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/reviews/" },
  ...socialMeta(`${TITLE} | ${COMPANY.name}`, DESCRIPTION, "/reviews/"),
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews/" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews/" }]} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-4">
          Customer Reviews
        </h1>
        <p className="text-concrete-600">
          We&apos;re a small, local crew — our reputation is built one job at a time. Here&apos;s what customers
          across Greater Nashville have to say.
        </p>
      </section>

      <TrustStrip />
      <TestimonialsSection />

      <CTASection
        headline="Add Your Project to the List"
        body="Get a free estimate and see why local homeowners and property managers keep calling us back."
      />
    </>
  );
}
