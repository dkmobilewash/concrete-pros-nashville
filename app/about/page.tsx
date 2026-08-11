import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Concrete Pros of Nashville is a family-owned, locally operated concrete contractor based on 29th Ave N in Nashville, TN. Learn about our crew, our process, and why we do this work.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-6">
          About {COMPANY.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-concrete-700">
            <p>
              Concrete Pros of Nashville is a family-owned, locally operated concrete contractor based at{" "}
              {COMPANY.fullAddress}. We&apos;re not a franchise, and we&apos;re not a national roll-up buying up
              local crews — we&apos;re a Nashville business that answers its own phone and stands behind its own
              work.
            </p>
            <p>
              We got into this business the way most concrete contractors do: starting small, doing the work
              ourselves, and building a reputation one driveway, one patio, and one repair job at a time.
              That&apos;s still how we operate. The person who walks your site during the estimate is accountable
              for how the job turns out — there&apos;s no layer of subcontractors or call-center dispatch between
              you and the crew actually pouring your concrete.
            </p>
            <p>
              We specialize in the kind of concrete work Middle Tennessee actually needs: driveways and patios
              that account for our clay soil&apos;s seasonal swelling, foundations sized to local frost depth and
              bearing requirements, and repair work that fixes the cause of a problem, not just the symptom.
              We serve homeowners, HOAs, churches, and small commercial properties across the greater Nashville
              metro — see our full service area list for the specific communities we work in most.
            </p>
            <p>
              Every project runs through the same four-step process — site visit, written estimate, pour day,
              and a walkthrough when it&apos;s done — so you always know what&apos;s happening and when. We&apos;d
              rather lose a job to an honest &ldquo;this isn&apos;t the right fit for us&rdquo; than take on work
              we can&apos;t stand behind.
            </p>
          </div>
          <PlaceholderImage
            alt="The Concrete Pros of Nashville crew on site during a driveway pour in Nashville, TN"
            icon="driveway"
            tone={1}
          />
        </div>
      </section>

      <DifferentiatorsSection title="What Makes Us Different" />
      <ProcessSection intro="Simple, repeatable, and the same whether it's a small repair or a full driveway replacement." />

      <CTASection
        headline="Ready to Work With a Local Crew?"
        body="Get a free, no-pressure estimate from the people who'll actually be on site running the job."
      />
    </>
  );
}
