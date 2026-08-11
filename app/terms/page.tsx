import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for use of the ${COMPANY.name} website.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms/" }]} />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl font-extrabold text-concrete-900 mb-6">Terms of Service</h1>
        <div className="space-y-5 text-concrete-700 text-sm leading-relaxed">
          <p>Last updated: this page is a standard template and should be reviewed by the business owner before launch.</p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Website Use</h2>
          <p>
            This website is provided by {COMPANY.name} for informational purposes and to allow visitors to
            request estimates for concrete contracting services. Content on this site — including pricing
            factors, timelines, and material information — is general in nature and does not constitute a formal
            quote until confirmed in writing after a site visit.
          </p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Estimates &amp; Contracts</h2>
          <p>
            Submitting a form on this site does not create a contract for services. All work is governed by a
            separate written estimate and, where applicable, a signed contract provided directly by{" "}
            {COMPANY.name}.
          </p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Limitation of Liability</h2>
          <p>
            Information on this website is provided &ldquo;as is&rdquo; without warranty of any kind.{" "}
            {COMPANY.name} is not liable for decisions made based solely on general information published on this
            site rather than a confirmed, project-specific estimate.
          </p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Contact Us</h2>
          <p>
            Questions about these terms can be directed to {COMPANY.email} or {COMPANY.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
