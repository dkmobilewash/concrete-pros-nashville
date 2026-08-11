import Link from "next/link";
import { Logo } from "@/components/Logo";
import { COMPANY } from "@/lib/constants";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export function Footer() {
  return (
    <footer className="bg-brand-800 text-concrete-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-concrete-300 max-w-xs">{COMPANY.founderNote}</p>
            <div className="mt-5 text-sm space-y-1 text-concrete-200">
              <p className="font-semibold text-white">{COMPANY.name}</p>
              <p>{COMPANY.addressLine1}</p>
              <p>{COMPANY.addressLine2}</p>
              <p>
                <a href={COMPANY.phoneHref} className="font-bold text-white hover:text-brand-200">
                  {COMPANY.phone}
                </a>
              </p>
              <p className="text-concrete-300">{COMPANY.hoursDisplay}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="text-concrete-300 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.slug}/`} className="text-concrete-300 hover:text-white transition-colors">
                    {a.name}, TN
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/" className="text-concrete-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/reviews/" className="text-concrete-300 hover:text-white transition-colors">Reviews</Link>
              </li>
              <li>
                <Link href="/contact/" className="text-concrete-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/services/" className="text-concrete-300 hover:text-white transition-colors">All Services</Link>
              </li>
              <li>
                <Link href="/service-areas/" className="text-concrete-300 hover:text-white transition-colors">All Service Areas</Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="text-concrete-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms/" className="text-concrete-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-700 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-concrete-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Family-owned &amp; locally
            operated in {COMPANY.city}, {COMPANY.state}.
          </p>
          <p>Licensed &amp; insured. Ask for documentation with your free estimate.</p>
        </div>
      </div>
    </footer>
  );
}
