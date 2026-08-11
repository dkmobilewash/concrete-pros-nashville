const PATHS: Record<string, string> = {
  driveway: "M4 20l3-12h10l3 12M4 20h16M9 8V5h6v3",
  road: "M6 4l-3 16M18 4l3 16M12 4v4m0 4v4m0 4v0",
  leveling: "M3 17l6-6 4 4 8-8M3 21h18",
  parking: "M4 20V6a2 2 0 012-2h6a5 5 0 010 10H8v6M4 20h16",
  repair: "M12 3l2 5-5 5 2 5-6-1 1-6-5-2 5-5-1-6z",
  sidewalk: "M4 20h16M6 20V8l6-4 6 4v12M9 20v-6h6v6",
  flooring: "M3 8h18M3 14h18M9 3v18M15 3v18",
  foundation: "M4 21V9l8-6 8 6v12M4 21h16M9 21v-6h6v6",
  maintenance: "M14.7 6.3a3 3 0 11-4.4 4.4L4 17v3h3l6.3-6.3a3 3 0 014.4-4.4z",
  retaining: "M3 20V10h4v10M9 20V6h4v14M15 20V13h4v7M3 20h16",
  slab: "M3 6h18v12H3zM3 12h18M9 6v12M15 6v12",
  stamped: "M4 20l4-4 3 3 5-5 4 4M4 6h16v3H4z",
  structural: "M4 20V10l8-6 8 6v10M4 20h16M9 20v-7h6v7",
};

export function ServiceIcon({ icon, className = "h-7 w-7" }: { icon: string; className?: string }) {
  const d = PATHS[icon] ?? PATHS.driveway;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
