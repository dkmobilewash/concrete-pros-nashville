import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function CTASection({ headline, body }: { headline: string; body: string }) {
  return (
    <section className="bg-brand-700">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">{headline}</h2>
        <p className="text-brand-100 max-w-2xl mx-auto mb-8">{body}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact/"
            className="rounded-md bg-amber-accent px-7 py-3.5 font-bold text-brand-900 shadow-lg hover:opacity-90 transition-opacity"
          >
            Request Your Free Estimate
          </Link>
          <a
            href={COMPANY.phoneHref}
            className="rounded-md border-2 border-white/50 px-7 py-3.5 font-bold text-white hover:bg-white/10 transition-colors"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
