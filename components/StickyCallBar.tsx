import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function StickyCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-brand-700 border-t border-brand-800 shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-2 divide-x divide-brand-600">
        <a
          href={COMPANY.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02z" />
          </svg>
          Call Now
        </a>
        <Link href="/contact/" className="flex items-center justify-center gap-2 py-3.5 bg-amber-accent text-white font-bold text-sm">
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
