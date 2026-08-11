import { ServiceIcon } from "@/components/ServiceIcon";

/**
 * Stand-in for real project photography, which was not supplied with this
 * build (see Section 12 of the build spec). Renders as an honest, clearly
 * labeled placeholder rather than a generic stock photo, and carries a real,
 * unique `alt`/caption per page so it's ready to swap for an actual photo
 * with the same alt text once photography is available.
 */
export function PlaceholderImage({
  alt,
  icon = "driveway",
  className = "",
  tone = 0,
}: {
  alt: string;
  icon?: string;
  className?: string;
  tone?: number;
}) {
  const tones = [
    "from-brand-700 to-brand-900",
    "from-concrete-600 to-concrete-800",
    "from-brand-600 to-concrete-800",
  ];
  const gradient = tones[tone % tones.length];

  return (
    <figure
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${gradient} aspect-[4/3] flex flex-col items-center justify-center text-white ${className}`}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <ServiceIcon icon={icon} className="h-12 w-12 opacity-80 relative" />
      <figcaption className="relative mt-3 px-4 text-center text-xs font-semibold uppercase tracking-wide text-white/80">
        Photo placeholder
      </figcaption>
      <p className="sr-only">{alt}</p>
    </figure>
  );
}
