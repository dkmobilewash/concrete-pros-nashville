import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Concrete Services in Nashville, TN",
  description:
    "Driveways, patios, foundations, stamped concrete, repair, retaining walls, and more — explore every concrete service Concrete Pros of Nashville offers across the Nashville metro.",
  alternates: { canonical: "/services/" },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-4">
          Concrete Services
        </h1>
        <p className="text-concrete-600">
          From a single driveway repair to a full foundation pour, here&apos;s everything Concrete Pros of Nashville
          builds, repairs, and maintains across the greater Nashville metro.
        </p>
      </section>

      <ServiceGrid title="" />

      <CTASection
        headline="Not Sure Which Service You Need?"
        body="Tell us what's going on with your property and we'll help you figure out the right fix — no guesswork, no upsell."
      />
    </>
  );
}
