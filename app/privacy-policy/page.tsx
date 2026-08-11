import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}, covering how we collect, use, and protect information submitted through our website.`,
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }]} />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-headings:font-heading">
        <h1 className="font-heading text-4xl font-extrabold text-concrete-900 mb-6">Privacy Policy</h1>
        <div className="space-y-5 text-concrete-700 text-sm leading-relaxed">
          <p>Last updated: this page is a standard template and should be reviewed by the business owner before launch.</p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Information We Collect</h2>
          <p>
            When you submit our contact or estimate request form, we collect the information you provide directly
            — typically your name, phone number, email address, property address, and project details. We do not
            collect this information through any other means on this site beyond standard, aggregated web
            analytics.
          </p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">How We Use Your Information</h2>
          <p>
            We use the information you submit solely to respond to your estimate request, schedule a site visit,
            and communicate with you about your project. We do not sell or rent your personal information to
            third parties.
          </p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Data Retention</h2>
          <p>
            We retain estimate request information for as long as reasonably necessary to respond to your inquiry
            and maintain business records, consistent with standard recordkeeping practices for a Tennessee
            contractor.
          </p>
          <h2 className="font-heading text-xl font-bold text-concrete-900 pt-2">Contact Us</h2>
          <p>
            Questions about this policy can be directed to {COMPANY.email} or {COMPANY.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
