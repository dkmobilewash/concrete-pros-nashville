import type { Area, FAQ, Service } from "@/lib/types";
import { DIFFERENTIATORS } from "@/lib/constants";

// -----------------------------------------------------------------------
// Deterministic variant selection: the same service+area pair always
// produces the same output (required for static generation), but
// different pairs land on different sentence-structure variants so the
// 169 combination pages don't read as a single template with nouns
// swapped. See build spec Section 8.
// -----------------------------------------------------------------------
function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: string): T {
  return arr[hash(seed) % arr.length];
}

const DENSE_URBAN = new Set(["the-gulch", "downtown-nashville"]);

// -----------------------------------------------------------------------
// Opening / intersection section
// -----------------------------------------------------------------------
const OPENING_TEMPLATES: Array<(service: Service, area: Area) => string> = [
  (s, a) =>
    `${s.name} in ${a.name} means working with ${a.characterSnippet} — a very different starting point than the same job three towns over, and one that changes what a well-built result actually requires.`,
  (s, a) =>
    `Ask what ${s.name.toLowerCase()} looks like in ${a.name} and the honest answer starts with the neighborhood itself: ${a.characterSnippet}.`,
  (s, a) =>
    `${a.name} is defined by ${a.characterSnippet}, and that context shapes nearly every decision we make on a ${s.name.toLowerCase()} project here — from base prep to finish.`,
  (s, a) =>
    `Property owners in ${a.name} call us for ${s.name.toLowerCase()} for a straightforward reason: ${s.shortDescription.toLowerCase()} That matters more, not less, in an area shaped by ${a.characterSnippet}.`,
  (s, a) =>
    `${a.name}, ${a.county}, is not a generic Nashville suburb — ${a.characterSnippet} — and a ${s.name.toLowerCase()} project built for a different part of the metro rarely translates directly here without adjustment.`,
];

function openingParagraphs(service: Service, area: Area): string[] {
  const template = pick(OPENING_TEMPLATES, `open|${service.slug}|${area.slug}`);
  const first = template(service, area);
  const second = service.overview[0];
  return [first, second];
}

// -----------------------------------------------------------------------
// "Why [Service] Matters in [Area]" section — the true intersection:
// area-specific ground truth (soil, climate, growth pattern, housing
// stock) combined with a service-specific payoff. This is written per
// service so the payoff clause is genuinely about that trade, not a
// generic sentence with the service name swapped in.
// -----------------------------------------------------------------------
type MattersFn = (area: Area) => string;

const MATTERS_BY_SERVICE: Record<string, MattersFn> = {
  "concrete-driveways": (a) =>
    DENSE_URBAN.has(a.slug)
      ? `In ${a.name}, where ${a.characterSnippet}, a traditional single-family driveway is the exception rather than the rule — most of what we build here is garage entry aprons, condo access pads, and short commercial connections designed for daily vehicle turnover in a tight footprint. ${a.soilAndClimateNotes} Getting the base and joint layout right matters just as much on a 20-foot access pad as it does on a 200-foot estate drive.`
      : `${a.name}'s housing pattern — ${a.characterSnippet} — determines almost everything about a driveway project here, from length and width to how much grading it needs. ${a.soilAndClimateNotes} A driveway built without accounting for that is the single most common reason we get called back for early cracking or drainage complaints.`,
  "concrete-road-construction": (a) =>
    `Private access roads and connector drives come up more often in growing areas, and ${a.name} — shaped by ${a.characterSnippet} — is no exception. ${a.soilAndClimateNotes} A road or shared drive built to handle repeated turning loads from moving trucks, trash service, and delivery vehicles needs a thicker section and deeper base than a standard driveway, regardless of how established or new the surrounding neighborhood is.`,
  "concrete-leveling": (a) =>
    `${a.soilAndClimateNotes} In a place shaped by ${a.characterSnippet}, that ground movement shows up as uneven walkways, patios, and driveway sections well before the concrete itself has actually failed — which is exactly the situation leveling is built to fix without the cost of a full replacement.`,
  "concrete-parking-lots": (a) =>
    DENSE_URBAN.has(a.slug)
      ? `${a.name}'s built environment — ${a.characterSnippet} — means most parking is structured or shared rather than a standalone surface lot, but the smaller commercial pads and loading areas that do exist here still need to be engineered for repeated heavy-vehicle loads. ${a.soilAndClimateNotes}`
      : `Churches, small commercial properties, and multi-family sites in ${a.name} — an area shaped by ${a.characterSnippet} — need a lot that's graded correctly from day one, since a low spot that ponds water in this climate becomes an ice hazard and a base-eroding problem every single winter. ${a.soilAndClimateNotes}`,
  "concrete-repair": (a) =>
    `${a.soilAndClimateNotes} That's the root cause behind a lot of the repair calls we get in ${a.name} — cracked or spalled concrete that looks like a surface problem but traces back to what's happening in the ground underneath it, which is why we diagnose before we patch.`,
  "concrete-sidewalks": (a) =>
    a.slug === "forest-hills"
      ? `Forest Hills was built without public sidewalks by design, preserving ${a.characterSnippet} — so walkway work here is almost always private: entry paths, courtyard connections, and driveway-adjacent walks rather than a public sidewalk network. ${a.soilAndClimateNotes}`
      : `${a.name}'s layout — ${a.characterSnippet} — determines how much of our sidewalk work is public-facing versus private entry walks. ${a.soilAndClimateNotes} Either way, cross-slope and joint spacing are what keep a walkway flat and safe for years instead of becoming a trip hazard within a few winters.`,
  "concrete-flooring": (a) =>
    `Garage, basement, and interior floor work in ${a.name} tracks closely with its housing stock — ${a.characterSnippet}. ${a.soilAndClimateNotes} Whatever the home's age, moisture testing before recommending a polished, epoxy, or stained finish is non-negotiable, since a coating applied over a moisture problem fails regardless of how well it was installed.`,
  "foundation-installation": (a) =>
    `Foundation system choice starts with the site, and ${a.name} — ${a.characterSnippet} — has its own particular version of that question. ${a.soilAndClimateNotes} We evaluate slope, drainage, and soil bearing capacity here rather than defaulting to whichever system is easiest to build.`,
  "concrete-maintenance": (a) =>
    `${a.name} is shaped by ${a.characterSnippet}, and property owners here are generally protecting a meaningful investment in their concrete, whether that's a driveway that's been down for decades or one poured within the last few years. ${a.soilAndClimateNotes} A scheduled sealing and inspection program catches the small, cheap fixes here before Middle Tennessee's freeze-thaw cycle turns them into expensive ones.`,
  "retaining-walls": (a) =>
    a.slug === "forest-hills" || a.slug === "belle-meade"
      ? `${a.name}'s hilly, wooded terrain — ${a.characterSnippet} — means retaining walls come up on a real share of the projects we scope here, not as an afterthought but as core site work needed to make a yard, driveway, or patio usable. ${a.soilAndClimateNotes}`
      : `Even in areas without dramatic elevation change, ${a.name}'s conditions — ${a.characterSnippet} — create real retaining and erosion-control needs around driveway cuts, sloped side yards, and drainage paths. ${a.soilAndClimateNotes}`,
  "slab-foundations": (a) =>
    `Monolithic slab foundations are most common where new construction is happening fastest, and ${a.name} — ${a.characterSnippet} — fits that pattern for a lot of additions, garages, and accessory structures. ${a.soilAndClimateNotes} Sizing reinforcement to that ground condition is what keeps a new slab from becoming next decade's leveling call.`,
  "stamped-concrete": (a) =>
    `Pattern and color choice for stamped concrete in ${a.name} tends to follow the neighborhood's own character — ${a.characterSnippet} — since the best-looking decorative concrete complements what's already there rather than fighting it. ${a.neighborhoodCharacter[0]}`,
  "structural-concrete": (a) =>
    `Footings, pads, and structural elements for additions and outbuildings come up regularly in ${a.name}, shaped as it is by ${a.characterSnippet}. ${a.soilAndClimateNotes} We size these to local frost depth and bearing capacity requirements rather than assuming one standard applies across every jurisdiction we serve.`,
};

function mattersParagraph(service: Service, area: Area): string {
  const fn = MATTERS_BY_SERVICE[service.slug];
  return fn ? fn(area) : `${area.soilAndClimateNotes} That's exactly the kind of local condition ${service.name.toLowerCase()} work in ${area.name} needs to account for.`;
}

// -----------------------------------------------------------------------
// Permitting / jurisdiction section — area's permit authority combined
// with a service-specific angle on what typically triggers review.
// -----------------------------------------------------------------------
const PERMIT_ANGLE_BY_SERVICE: Record<string, string> = {
  "concrete-driveways":
    "Driveway work often triggers separate review when it touches a curb cut or the public right-of-way, which is treated differently from interior lot work in most jurisdictions.",
  "concrete-road-construction":
    "Private roads and shared access drives frequently involve additional review tied to easements, HOA covenants, or how the road ties into a public street, on top of the standard building permit.",
  "concrete-leveling":
    "Leveling existing concrete in place typically doesn't require a new permit since no new structure is being added, but we confirm that against local rules before starting rather than assuming.",
  "concrete-parking-lots":
    "Commercial lots almost always require a full permit and plan review, including stormwater and ADA-compliant grading, which is a longer process than residential permitting.",
  "concrete-repair":
    "Most repair work — patching, crack injection, resurfacing — falls below the threshold that requires a permit, though larger structural repairs or partial replacements sometimes do; we check case by case.",
  "concrete-sidewalks":
    "Sidewalk work touching a public right-of-way is one of the more consistently permitted project types across every jurisdiction we serve, since it affects pedestrian safety and accessibility compliance.",
  "concrete-flooring":
    "Interior flooring work rarely needs a standalone permit unless it's part of a larger renovation or new construction scope that already requires one.",
  "foundation-installation":
    "Foundation work is one of the few project types that essentially always requires a permit and inspection, given its direct connection to structural safety.",
  "concrete-maintenance":
    "Scheduled sealing, joint maintenance, and inspection visits generally don't require permits since no new construction is involved.",
  "retaining-walls":
    "Retaining walls above a certain height — commonly around 4 feet, though the exact threshold varies by jurisdiction — typically require a permit and sometimes an engineer's stamp.",
  "slab-foundations":
    "Slab foundation work requires a permit essentially everywhere, along with inspections at multiple stages of the pour.",
  "stamped-concrete":
    "Stamped concrete is regulated the same as the underlying structural work — a stamped driveway needs the same permit a plain driveway would, with no extra review just for the decorative finish.",
  "structural-concrete":
    "Structural footings and pads tied to permitted structures — decks, additions, outbuildings — are typically covered under that project's overall permit rather than needing a separate one.",
};

function permitParagraph(service: Service, area: Area): string {
  const angle = PERMIT_ANGLE_BY_SERVICE[service.slug] ?? "";
  return `${area.permitAuthorityNote} ${angle}`.trim();
}

// -----------------------------------------------------------------------
// "Why Choose Us" section — company differentiators connected to this
// specific service + area context.
// -----------------------------------------------------------------------
const WHY_US_TEMPLATES: Array<(service: Service, area: Area) => string> = [
  (s, a) =>
    `${DIFFERENTIATORS[0].detail} For ${s.name.toLowerCase()} in ${a.name}, that means the estimate you get reflects someone who's actually seen ${a.county}'s conditions firsthand, not a generic quote from a call center.`,
  (s, a) =>
    `${DIFFERENTIATORS[2].detail} On a ${s.name.toLowerCase()} project in ${a.name}, that shows up directly in how we spec the mix, base, and joint layout for this specific address, not a one-size-fits-all default.`,
  (s, a) =>
    `${DIFFERENTIATORS[3].detail} That's especially relevant for ${s.name.toLowerCase()} work in ${a.name}, where ${a.permitAuthority} adds a step most homeowners haven't dealt with before — we walk you through it rather than leaving you to figure it out.`,
  (s, a) =>
    `${DIFFERENTIATORS[1].detail} Whether your ${s.name.toLowerCase()} project in ${a.name} needs documentation for an HOA, a permit application, or just your own peace of mind, we provide it without you having to ask twice.`,
];

function whyChooseUsParagraph(service: Service, area: Area): string {
  const template = pick(WHY_US_TEMPLATES, `whyus|${service.slug}|${area.slug}`);
  return template(service, area);
}

// -----------------------------------------------------------------------
// FAQs — minimum 4, blending service FAQs, area FAQs, and at least two
// FAQs that only make sense for this exact combination.
// -----------------------------------------------------------------------
function combinationSpecificFaqs(service: Service, area: Area): FAQ[] {
  return [
    {
      question: `Does ${area.name} require anything extra for a ${service.name.toLowerCase()} project beyond a standard permit?`,
      answer: `It depends on the project, but in ${area.name} the relevant office is ${area.permitAuthority}. ${PERMIT_ANGLE_BY_SERVICE[service.slug] ?? ""} We confirm exactly what applies to your address and project scope before we start, and handle the application if we're the contractor pulling the permit.`,
    },
    {
      question: `How quickly can you get to a ${service.name.toLowerCase()} project in ${area.name}?`,
      answer: `${area.distanceNote} For estimates we typically schedule within a few business days; project start dates depend on scope, current workload, and weather, and we'll give you a real timeline — not a placeholder — before you commit.`,
    },
  ];
}

function combinationFaqs(service: Service, area: Area): FAQ[] {
  const seed = hash(`${service.slug}|${area.slug}`);
  const serviceFaqs = [
    service.faqs[seed % service.faqs.length],
    service.faqs[(seed + 3) % service.faqs.length],
  ].filter((f, i, arr) => arr.findIndex((x) => x.question === f.question) === i);

  const areaFaq = area.localFaqs[seed % area.localFaqs.length];

  const combo = combinationSpecificFaqs(service, area);

  const all = [...combo, ...serviceFaqs, areaFaq];
  // De-duplicate by question text just in case of overlap, preserve order.
  const seen = new Set<string>();
  return all.filter((f) => {
    if (seen.has(f.question)) return false;
    seen.add(f.question);
    return true;
  });
}

// -----------------------------------------------------------------------
// CTA copy
// -----------------------------------------------------------------------
const CTA_TEMPLATES: Array<(service: Service, area: Area) => { headline: string; body: string }> = [
  (s, a) => ({
    headline: `Get a Free ${s.name} Estimate in ${a.name}`,
    body: `Tell us about your property in ${a.name} and we'll schedule a site visit — no pressure, no call-center runaround, just a straight answer on scope, timeline, and cost.`,
  }),
  (s, a) => ({
    headline: `Ready to Start Your ${a.name} ${s.name} Project?`,
    body: `Call (615) 239-1809 or request a free estimate online. We'll walk your property in ${a.name}, talk through options, and give you a written quote — not a rough guess.`,
  }),
  (s, a) => ({
    headline: `Talk to a Local ${a.name} Concrete Crew`,
    body: `Concrete Pros of Nashville has done ${s.name.toLowerCase()} work throughout ${a.county}. Reach out for a free, no-obligation estimate on your ${a.name} project.`,
  }),
];

function ctaCopy(service: Service, area: Area): { headline: string; body: string } {
  const template = pick(CTA_TEMPLATES, `cta|${service.slug}|${area.slug}`);
  return template(service, area);
}

// -----------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------
export interface CombinationContent {
  intro: string[];
  matters: string;
  permitNote: string;
  whyChooseUs: string;
  faqs: FAQ[];
  cta: { headline: string; body: string };
}

export function getCombinationContent(service: Service, area: Area): CombinationContent {
  return {
    intro: openingParagraphs(service, area),
    matters: mattersParagraph(service, area),
    permitNote: permitParagraph(service, area),
    whyChooseUs: whyChooseUsParagraph(service, area),
    faqs: combinationFaqs(service, area),
    cta: ctaCopy(service, area),
  };
}
