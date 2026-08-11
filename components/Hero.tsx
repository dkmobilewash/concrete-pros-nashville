import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function Hero({
  eyebrow,
  headline,
  subheadline,
  imageAlt,
}: {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  imageAlt: string;
}) {
  return (
    <section className="relative bg-brand-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full bg-[repeating-linear-gradient(135deg,transparent,transparent_18px,rgba(255,255,255,0.06)_18px,rgba(255,255,255,0.06)_20px)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-brand-200 font-bold uppercase tracking-widest text-sm mb-3">{eyebrow}</p>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-concrete-100 max-w-2xl mb-8">{subheadline}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact/"
              className="rounded-md bg-amber-accent px-6 py-3.5 font-bold text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="rounded-md border-2 border-white/40 px-6 py-3.5 font-bold text-white hover:bg-white/10 transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
        <span className="sr-only">{imageAlt}</span>
      </div>
    </section>
  );
}
