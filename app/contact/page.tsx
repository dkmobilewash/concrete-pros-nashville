import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate",
  description:
    "Request a free concrete estimate from Concrete Pros of Nashville. Call (615) 239-1809 or send us your project details and we'll follow up within one business day.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-4">
            Get a Free Estimate
          </h1>
          <p className="text-concrete-600">
            Tell us about your project and we&apos;ll schedule a site visit — usually within a few business days.
            Prefer to talk it through first? Give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-concrete-200 bg-concrete-50 p-6">
              <h2 className="font-heading text-xl font-bold text-concrete-900 mb-3">Contact Info</h2>
              <dl className="space-y-3 text-sm text-concrete-700">
                <div>
                  <dt className="font-semibold text-concrete-900">Phone</dt>
                  <dd>
                    <a href={COMPANY.phoneHref} className="text-brand-600 font-bold hover:text-brand-700">
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-concrete-900">Address</dt>
                  <dd>
                    {COMPANY.addressLine1}
                    <br />
                    {COMPANY.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-concrete-900">Hours</dt>
                  <dd>{COMPANY.hoursDisplay}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-concrete-900">Email</dt>
                  <dd>
                    <a href={`mailto:${COMPANY.email}`} className="text-brand-600 hover:text-brand-700">
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg border border-concrete-200 p-6">
              <h2 className="font-heading text-xl font-bold text-concrete-900 mb-2">Service Area</h2>
              <p className="text-sm text-concrete-600">
                We serve Belle Meade, Forest Hills, Brentwood, Green Hills, Franklin, Hendersonville, Gallatin,
                East Nashville, Murfreesboro, The Gulch, Downtown Nashville, Smyrna, and Lebanon — see our{" "}
                <Link href="/service-areas/" className="text-brand-600 hover:text-brand-700 font-semibold">
                  full service area list
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
