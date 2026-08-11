import Link from "next/link";
import { Logo } from "@/components/Logo";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-concrete-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-concrete-700">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden sm:flex items-center gap-2 font-heading text-lg sm:text-xl font-bold text-brand-700 hover:text-brand-600"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02z" />
              </svg>
              {COMPANY.phone}
            </a>
            <Link
              href="/contact/"
              className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
