import Link from "next/link";

/**
 * CSS-based recreation of the Concrete Pros of Nashville wordmark.
 *
 * The real logo file (concrete-pros-of-nashville-logo.png) referenced in the
 * build spec was not delivered with this build. Drop the real PNG into
 * /public/images/concrete-pros-of-nashville-logo.png and swap this component
 * for a plain <Image> tag once it's available — the header, footer, and
 * favicon all import from this one place.
 */
export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  const base = variant === "light" ? "text-white" : "text-concrete-900";
  const band = variant === "light" ? "bg-white text-concrete-900" : "bg-brand-600 text-white";
  const underline = variant === "light" ? "border-white" : "border-concrete-900";

  return (
    <Link href="/" className={`inline-flex flex-col leading-none group ${className}`} aria-label="Concrete Pros of Nashville — Home">
      <span className={`flex items-baseline gap-1.5 ${base}`}>
        <span className="skew-wordmark text-2xl sm:text-3xl font-bold tracking-tight">Concrete</span>
        <span className={`skew-wordmark ${band} px-1.5 py-0.5 text-xl sm:text-2xl font-extrabold uppercase tracking-wide`}>
          Pros
        </span>
      </span>
      <span className={`mt-0.5 pt-0.5 border-t-2 ${underline} text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.25em] ${base}`}>
        of Nashville
      </span>
    </Link>
  );
}
