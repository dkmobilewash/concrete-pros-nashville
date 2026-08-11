import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaGrid } from "@/components/AreaGrid";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas | Greater Nashville, TN",
  description:
    "Concrete Pros of Nashville serves Belle Meade, Forest Hills, Brentwood, Green Hills, Franklin, Hendersonville, Gallatin, East Nashville, Murfreesboro, The Gulch, Downtown Nashville, Smyrna, and Lebanon.",
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas/" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas/" }]} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-4">
          Where We Work
        </h1>
        <p className="text-concrete-600">
          Based on 29th Ave N in Nashville, we serve homeowners, HOAs, churches, and small commercial properties
          across 13 communities in the greater Nashville metro — each with its own soil, permitting, and
          neighborhood character we build around.
        </p>
      </section>

      <AreaGrid title="" />

      <CTASection
        headline="Don't See Your Neighborhood Listed?"
        body="We may still serve your area — give us a call and we'll let you know."
      />
    </>
  );
}
