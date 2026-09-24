import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

// Verified: Next.js automatically returns a 404 status and injects
// <meta name="robots" content="noindex"> for this page already, so no
// explicit `robots` field is needed here (it would just duplicate the tag).
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
};

const POPULAR_LINKS = [
  { href: "/services/", label: "Browse All Services" },
  { href: "/service-areas/", label: "See Where We Work" },
  { href: "/contact/", label: "Get a Free Estimate" },
  { href: "/blog/", label: "Read the Blog" },
];

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-4">Error 404</p>
      <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-4">
        We Couldn&apos;t Find That Page
      </h1>
      <p className="text-concrete-600 mb-10">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. If you followed a link to get here,
        it might be outdated — try one of these instead, or call us directly at{" "}
        <a href={COMPANY.phoneHref} className="font-semibold text-brand-600 hover:text-brand-700">
          {COMPANY.phone}
        </a>
        .
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {POPULAR_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-concrete-300 px-5 py-2.5 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link href="/" className="font-bold text-brand-600 hover:text-brand-700">
        ← Back to Home
      </Link>
    </section>
  );
}
