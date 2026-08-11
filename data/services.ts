import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "concrete-driveways",
    name: "Concrete Driveways",
    slug: "concrete-driveways",
    shortDescription:
      "Durable, properly graded driveways built to handle daily traffic and Middle Tennessee weather.",
    heroHeadline: "Concrete Driveways Built to Outlast the Clay Underneath Them",
    heroSubheadline:
      "From single-car pads on older Nashville lots to wide double-wide aprons on new construction, we grade, form, and pour driveways that shed water instead of holding it.",
    overview: [
      "A driveway takes more daily abuse than almost any other slab on your property — vehicle weight, sun exposure, de-icing salt in a hard winter, and constant expansion and contraction from Nashville's clay-heavy soil. We build driveways with proper base compaction, control joint spacing, and slope calculated to move water away from your garage and foundation, not toward it.",
      "Whether you're replacing a cracked, heaving slab from the 1970s or pouring a new driveway alongside new construction, we start with the same question: where does the water go? Get that wrong and no amount of finish work saves the slab. Get it right and a well-poured driveway will outlast the house's second roof.",
    ],
    commonProblems: [
      "Standing water pooling near the garage door after every rain because the original pour was never sloped correctly",
      "Deep cracks radiating from the corners where the driveway meets the street apron, usually from inadequate base prep",
      "A driveway that's visibly sunk or tilted on one side from years of soil movement under an unreinforced slab",
      "An old single-car driveway that's too narrow for a second vehicle or a larger modern SUV",
      "Surface scaling and pitting from years of de-icing salt on a slab that was never sealed",
    ],
    materials: [
      "4,000+ PSI air-entrained concrete mix rated for freeze-thaw exposure",
      "Compacted crushed stone base, typically 4–6 inches depending on soil test",
      "Fiber-reinforced mix or rebar/wire mesh reinforcement based on slab thickness and use",
      "Broom, exposed-aggregate, or stamped decorative finish options",
      "Penetrating sealer application to resist salt scaling and staining",
    ],
    faqs: [
      {
        question: "How thick should a residential driveway be?",
        answer:
          "For a standard passenger-vehicle driveway we typically pour 4 inches over a compacted base; if you're parking a boat, RV, or heavier truck regularly, we'll usually recommend 5–6 inches with added reinforcement. We size it to what you actually park on it, not a generic default.",
      },
      {
        question: "How long before I can park on a new driveway?",
        answer:
          "Concrete is generally safe for foot traffic in 24–48 hours and light vehicle traffic around 7 days, but it keeps gaining strength for close to a month. We'll give you a specific timeline based on the mix design and weather during your pour.",
      },
      {
        question: "Do I need a permit to replace or widen a driveway?",
        answer:
          "It depends on your jurisdiction and whether the work touches the public right-of-way or curb cut. We check local requirements before we start and handle the permit application for you where one is required.",
      },
      {
        question: "Can you pour in the winter?",
        answer:
          "Yes, with adjustments — cold-weather mix additives, insulated curing blankets, and closer monitoring of cure time. We won't pour during a hard freeze or on frozen subgrade, since that compromises the slab permanently, but moderate cold isn't a dealbreaker.",
      },
      {
        question: "Why is my old driveway cracking even though it's not that old?",
        answer:
          "The most common cause we see in the Nashville area is inadequate base compaction or control joints spaced too far apart, which lets the clay soil's seasonal swelling crack the slab instead of a joint. Poor drainage that keeps saturating the base is the second most common cause.",
      },
      {
        question: "What's the difference between a broom finish and a stamped driveway?",
        answer:
          "Broom finish is the standard slip-resistant texture most driveways use — durable and budget-friendly. Stamped concrete adds a patterned, often colored surface that mimics pavers or stone at a lower cost than the real thing; see our stamped concrete page for that option in more detail.",
      },
    ],
    relatedServices: ["concrete-repair", "stamped-concrete", "concrete-sidewalks"],
    icon: "driveway",
  },
  {
    id: "concrete-road-construction",
    name: "Concrete Road & Access Construction",
    slug: "concrete-road-construction",
    shortDescription:
      "Concrete access roads, private drives, and municipal-adjacent paving for HOAs, churches, and small commercial sites.",
    heroHeadline: "Concrete Access Roads & Private Drives Built for Heavy, Regular Use",
    heroSubheadline:
      "We handle concrete paving for HOA private roads, church and school access drives, and commercial site connections — engineered for repeated heavy-vehicle traffic, not a one-off driveway pour.",
    overview: [
      "This isn't interstate highway work — we're a family-owned residential and light-commercial contractor, not a state DOT paving crew. Where we do fit is the concrete infrastructure that sits between a driveway and a public road: HOA-maintained private streets, church and school access drives and bus loops, and short commercial connector roads that see regular heavy traffic from delivery trucks or fleet vehicles.",
      "That kind of pavement needs a thicker section, deeper base preparation, and joint layout designed for turning loads, not just straight-line car traffic. We scope these projects with a site visit and, where the load and span justify it, coordinate with a structural engineer on the base and reinforcement design before we ever form the first section.",
    ],
    commonProblems: [
      "An HOA's private access road developing alligator cracking from years of trash trucks and moving vans on an undersized base",
      "A church or school bus loop that pools water at the drop-off curb because the original grading was never designed for standing loads",
      "A commercial access drive that's rutting or heaving at the transition point where it meets an asphalt lot",
      "Aging access roads poured decades ago with no joint plan, now cracking randomly instead of at controlled points",
    ],
    materials: [
      "Higher-strength structural concrete mix (typically 4,500+ PSI) for repeated heavy-load traffic",
      "Deep compacted aggregate base engineered to the expected axle loads",
      "Rebar reinforcement grids sized to span and load, not standard residential wire mesh",
      "Properly spaced expansion and control joints designed for turning-radius stress",
    ],
    faqs: [
      {
        question: "Do you handle full public road paving contracts?",
        answer:
          "No — we're a residential and light-commercial concrete contractor. We take on private access roads, HOA streets, and connector drives, but not public municipal road contracts, which require different bonding and DOT-level certification than a family-owned local crew carries.",
      },
      {
        question: "How is an access road different from a driveway in terms of construction?",
        answer:
          "Access roads see turning loads from larger vehicles and more frequent traffic, so they need a thicker slab, deeper base, and a joint pattern designed around where trucks actually turn — not just a wider version of a driveway pour.",
      },
      {
        question: "Who's responsible for permitting on a private HOA road?",
        answer:
          "It varies by jurisdiction and whether the road ties into a public right-of-way. We identify what's required for your specific project during the site visit and handle the application where we're the contractor of record.",
      },
      {
        question: "Can you match or repair sections of an existing access road?",
        answer:
          "Yes — we can tie new sections into existing pavement with proper joint transitions, though matching exact aggregate and color from an older pour isn't always possible. We'll set expectations on appearance before we start.",
      },
    ],
    relatedServices: ["concrete-parking-lots", "concrete-repair", "structural-concrete"],
    icon: "road",
  },
  {
    id: "concrete-leveling",
    name: "Concrete Leveling",
    slug: "concrete-leveling",
    shortDescription:
      "Raise and stabilize sunken concrete slabs without the cost or mess of a full slab replacement.",
    heroHeadline: "Concrete Leveling: Fix Sunken Slabs Without Tearing Them Out",
    heroSubheadline:
      "Sidewalks, patios, garage floors, and driveway sections that have settled unevenly can usually be raised and stabilized in a day — a fraction of the cost of replacement.",
    overview: [
      "Concrete doesn't usually fail because the slab itself broke — it fails because the ground underneath it moved. Middle Tennessee's clay soil expands when it's wet and shrinks when it dries, and years of that cycle, plus erosion, poor original compaction, or a leaking downspout, leave voids under a slab that eventually let it settle unevenly.",
      "Leveling addresses that root cause directly: we pump a stabilizing material under the slab to fill the void and lift the concrete back to grade, rather than demolishing a slab that's often still structurally sound. It's faster, less disruptive, and considerably cheaper than a full tear-out and repour, and it's the right call for the majority of sunken-slab situations we're called out to inspect.",
    ],
    commonProblems: [
      "A sidewalk slab that's lifted or dropped at the joint, creating a trip hazard",
      "A patio corner sinking near a downspout or drainage path, holding water against the house",
      "A garage floor apron pulling away and dropping at the driveway transition",
      "A pool deck section settling unevenly around the coping, creating a lip between panels",
      "A porch or stoop slab separating from the house foundation as the exterior slab settles while the footer-supported structure doesn't",
    ],
    materials: [
      "Cementitious slurry (mudjacking) mix for standard residential leveling",
      "Expanding polyurethane foam for lighter, faster-curing lifts",
      "Void-fill material sized to the actual gap under the slab, not a one-size dose",
    ],
    faqs: [
      {
        question: "Is concrete leveling the same as mudjacking?",
        answer:
          "They solve the same problem — raising a settled slab — but use different materials. We evaluate which approach fits your slab, soil, and budget rather than defaulting to one method for everything.",
      },
      {
        question: "How do I know if my slab can be leveled or needs to be replaced?",
        answer:
          "If the concrete itself is cracked into multiple unstable pieces, badly spalled, or was undersized from the start, replacement is usually the better long-term investment. If the slab is intact and the problem is settling underneath it, leveling is almost always the faster and cheaper fix — we'll tell you honestly which situation you're in.",
      },
      {
        question: "How long does a leveling job take?",
        answer:
          "Most residential leveling jobs — a walkway, patio, or single driveway section — are completed in a few hours to a day, and the surface is typically usable again the same day, well ahead of a comparable replacement timeline.",
      },
      {
        question: "Will leveling fix the underlying drainage problem?",
        answer:
          "Leveling fixes the slab, not necessarily the cause. If a downspout, grading issue, or irrigation leak caused the void in the first place, we'll flag it, because otherwise the same section can settle again in a few years.",
      },
      {
        question: "Is leveling permanent?",
        answer:
          "It's a long-term fix when the underlying cause is addressed, but no leveling method stops soil movement forever in expansive clay. Most leveled slabs hold for many years without needing another lift.",
      },
    ],
    relatedServices: ["concrete-repair", "concrete-maintenance", "concrete-sidewalks"],
    icon: "leveling",
  },
  {
    id: "concrete-parking-lots",
    name: "Concrete Parking Lots",
    slug: "concrete-parking-lots",
    shortDescription:
      "Durable concrete parking lots and pads for churches, small commercial properties, and multi-family sites.",
    heroHeadline: "Concrete Parking Lots Built for Daily Commercial Traffic",
    heroSubheadline:
      "From church and small retail lots to multi-family and office parking pads, we build concrete lots designed to handle real-world traffic loads and drain correctly from day one.",
    overview: [
      "A parking lot fails in slow motion — a low spot that ponds water, a joint that wasn't sealed, a base that was never compacted to spec — and by the time it's visibly cracking, the damage has been building for years. We design lots around drainage first: every lot we build starts with a grading plan that gets water to an inlet or the lot's edge, not into standing puddles that freeze in winter and undermine the base every year after.",
      "We work primarily with churches, small commercial properties, multi-family buildings, and office sites that need a durable concrete lot rather than asphalt — concrete costs more upfront but holds up better to oil, gas, and heavy vehicle loads over decades, which matters for a lot you're not planning to repave every eight years.",
    ],
    commonProblems: [
      "A lot with standing water in low spots that turns to ice and heaves the slab every winter",
      "Cracking radiating from catch basins or drains where the surrounding concrete wasn't properly isolated with a joint",
      "A lot poured without ADA-compliant slopes at accessible spaces and curb ramps",
      "Oil and chemical staining on an unsealed surface that's become a maintenance headache",
      "A lot that's undersized in thickness for the vehicle mix it actually sees, now rutting near entrances",
    ],
    materials: [
      "Commercial-grade concrete mix, typically 4,000–4,500 PSI depending on load requirements",
      "Engineered compacted base sized to soil conditions and expected traffic",
      "Rebar or wire mesh reinforcement per span and load",
      "Sawcut control joints on an engineered layout to control cracking",
      "ADA-compliant striping and accessible route grading where required",
    ],
    faqs: [
      {
        question: "Why choose concrete over asphalt for a parking lot?",
        answer:
          "Concrete costs more to install but resists oil and chemical staining, holds up better under heavy or idling loads, and typically lasts two to three times longer than asphalt before major repair is needed — a better total cost of ownership for a lot you plan to keep long-term.",
      },
      {
        question: "Do you handle ADA compliance for accessible parking?",
        answer:
          "Yes — we grade accessible spaces, access aisles, and curb ramps to current ADA slope requirements as part of the design, and we coordinate striping layout with your local jurisdiction's requirements.",
      },
      {
        question: "How long does a parking lot pour take from start to finish?",
        answer:
          "It depends heavily on lot size and site prep needs, but a typical small commercial lot runs from a few weeks to a couple months including excavation, base work, forming, pour, cure, and striping. We give you a real schedule during the estimate, not a rough guess.",
      },
      {
        question: "Can you pour a parking lot in phases to keep a business open?",
        answer:
          "In many cases yes — we can section a lot so part of it stays usable while we work another section, though it typically adds time and cost versus a single continuous pour. We'll walk through the tradeoffs for your specific site.",
      },
    ],
    relatedServices: ["concrete-road-construction", "structural-concrete", "concrete-repair"],
    icon: "parking",
  },
  {
    id: "concrete-repair",
    name: "Concrete Repair",
    slug: "concrete-repair",
    shortDescription:
      "Fast, permanent fixes for cracked, chipped, spalling, or broken concrete slabs and structures.",
    heroHeadline: "Concrete Repair for Cracked, Broken, or Spalling Slabs",
    heroSubheadline:
      "One damaged slab, step, or wall section — we diagnose why it failed, fix it correctly, and stop it from coming back.",
    overview: [
      "This is project-based work: you have a specific slab, step, driveway section, or wall that's cracked, chipped, spalling, or broken, and you need it fixed — not an ongoing maintenance relationship. We start every repair call by figuring out why the concrete failed in the first place, because patching over a drainage problem or an undersized original pour just buys you a repeat call in two years.",
      "Depending on severity, that might mean a structural crack repair with epoxy injection, a resurfacing overlay for a spalled or pitted surface, a full-depth patch on a broken section, or in some cases a partial slab replacement when the damage has gone past what a repair can reliably fix. We'll tell you honestly which category your situation falls into rather than upselling a bigger job than you need.",
    ],
    commonProblems: [
      "A structural crack wider than a hairline running through a driveway or foundation wall",
      "Surface spalling and pitting from de-icing salt or freeze-thaw damage that's exposing aggregate",
      "A broken step or stoop corner that's become a trip and liability hazard",
      "Pop-outs and scaling on a garage floor from moisture trapped under a sealed coating",
      "A section of sidewalk or patio that's cracked clean through and separated",
    ],
    materials: [
      "Structural epoxy and polyurethane crack injection for load-bearing cracks",
      "Polymer-modified concrete resurfacing overlays for spalled or worn surfaces",
      "Full-depth saw-cut-and-patch repair matching existing slab thickness",
      "Vapor barriers and moisture mitigation where repairs involve garage or interior slabs",
    ],
    faqs: [
      {
        question: "Can this crack be repaired, or does the whole slab need to be replaced?",
        answer:
          "It depends on whether the crack is cosmetic (surface-level, not moving) or structural (indicates the slab or base has failed underneath). We inspect and give you a straight answer — most isolated cracks and spalled sections can be repaired; full replacement is reserved for slabs that are genuinely compromised.",
      },
      {
        question: "How much does concrete repair typically cost?",
        answer:
          "It varies with the type and size of damage — a crack injection is a very different cost than a full-depth patch or partial slab replacement. We give itemized estimates after seeing the actual damage rather than a phone quote.",
      },
      {
        question: "Will a repaired section match the color of my existing concrete?",
        answer:
          "We do our best to match texture and color, but concrete ages and weathers over time, so a patch on older concrete will rarely be invisible immediately — it typically blends in more within a season or two as it weathers.",
      },
      {
        question: "How long does concrete repair take?",
        answer:
          "Small crack injections or patches are often same-day. Larger full-depth repairs or partial replacements need cure time before load-bearing use, typically several days to a week depending on scope and weather.",
      },
      {
        question: "What's the difference between repair and your maintenance service?",
        answer:
          "Repair fixes concrete that's already damaged. Maintenance is an ongoing program — sealing, joint upkeep, seasonal inspection — meant to prevent damage before it starts. See our concrete maintenance page for that option.",
      },
    ],
    relatedServices: ["concrete-leveling", "concrete-maintenance", "concrete-flooring"],
    icon: "repair",
  },
  {
    id: "concrete-sidewalks",
    name: "Concrete Sidewalks",
    slug: "concrete-sidewalks",
    shortDescription:
      "Code-compliant, properly sloped sidewalks and walkways for homes, HOAs, and small commercial properties.",
    heroHeadline: "Concrete Sidewalks & Walkways Built to Grade and to Code",
    heroSubheadline:
      "From a front-door walkway to an HOA's full internal sidewalk network, we build walking surfaces that meet slope and joint requirements and actually stay level.",
    overview: [
      "Sidewalks look simple, which is exactly why they're so often built wrong — inadequate base, joints spaced too far apart, or slope that either pools water or, on public-facing walks, fails accessibility slope requirements. We treat every sidewalk as a small engineering problem: get the base compaction and cross-slope right and a walkway will stay flat and crack-free for decades; get it wrong and you'll be looking at trip hazards within a few years.",
      "We build everything from a single entry walkway to full HOA sidewalk networks and commercial accessible routes, matching joint spacing and finish to whatever's adjacent — existing walks, driveways, or a matching decorative pattern — so new sections read as intentional, not patched in.",
    ],
    commonProblems: [
      "A front walkway that's cracked and lifted from tree roots or poor original base compaction",
      "An HOA sidewalk network with multiple sections settling unevenly at different rates",
      "A commercial accessible route that doesn't meet current slope requirements",
      "A walkway that ponds water because it was poured flat instead of with proper cross-slope",
      "Narrow older walkways that no longer meet width requirements for wheelchair or stroller access",
    ],
    materials: [
      "Standard 3,000–4,000 PSI concrete mix appropriate for pedestrian loads",
      "Compacted gravel base sized to soil and expected use",
      "Broom-finish texture for slip resistance, or decorative stamped/exposed-aggregate options",
      "ADA-compliant slope and width specifications where required",
    ],
    faqs: [
      {
        question: "What's the standard width for a residential walkway?",
        answer:
          "Most front-entry walkways run 3–4 feet wide; HOA or commercial accessible routes typically need a minimum of 4–5 feet with specific slope limits. We size to your property and any applicable code before pouring.",
      },
      {
        question: "Can you match an existing sidewalk section?",
        answer:
          "Generally yes for joint spacing, width, and finish texture, though exact color matching to older, weathered concrete is rarely perfect. We'll walk you through realistic expectations before we start.",
      },
      {
        question: "How do you prevent tree roots from cracking a new sidewalk?",
        answer:
          "Where roots are a known issue, we can adjust the walkway path, add a root barrier, or use a thicker section with reinforcement — but a walkway poured directly over an aggressive root system will eventually be affected regardless of the pour quality, so we'll flag that risk upfront.",
      },
      {
        question: "Do sidewalks need permits?",
        answer:
          "It depends on whether the walkway is on private property or touches a public right-of-way. Public-facing sidewalk work often requires a permit and inspection; we confirm requirements for your specific address before starting.",
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-repair", "concrete-leveling"],
    icon: "sidewalk",
  },
  {
    id: "concrete-flooring",
    name: "Concrete Flooring",
    slug: "concrete-flooring",
    shortDescription:
      "Garage, basement, and interior concrete floors — poured, resurfaced, or prepped for polish, epoxy, or stain.",
    heroHeadline: "Concrete Flooring for Garages, Basements, and Interior Spaces",
    heroSubheadline:
      "New pours, resurfacing over tired existing floors, and moisture-ready prep for polished, epoxy, or stained finishes.",
    overview: [
      "Concrete floors ask more of the mix and the moisture control than an outdoor slab does, because interior floors get covered, walked on barefoot, and judged on appearance in a way a driveway never is. We build and resurface garage floors, basement slabs, and interior floors with the vapor barriers, control joints, and surface prep that a finish coat — polished, epoxy, or stained — actually needs to bond and last.",
      "A lot of flooring failures we get called to fix aren't concrete failures at all — they're moisture failures, where trapped vapor under a coating causes bubbling, delamination, or a musty smell. We test for moisture before we recommend a finish system, instead of guessing and letting you find out the hard way.",
    ],
    commonProblems: [
      "A garage floor with pitting and surface dust that's never held a sealer or coating well",
      "A basement slab with visible moisture intrusion or a persistent damp smell",
      "An older interior floor that's cracked or uneven and needs leveling before new flooring goes down",
      "A previously coated floor where the epoxy is peeling or bubbling from trapped moisture",
      "A new addition or converted space that needs a properly poured and cured floor before finish work starts",
    ],
    materials: [
      "Interior-grade concrete mix with controlled slump for flat, level pours",
      "Vapor barrier and moisture mitigation systems for basement and slab-on-grade floors",
      "Surface grinding and prep for polish, epoxy, or stain adhesion",
      "Self-leveling underlayment for uneven existing floors",
    ],
    faqs: [
      {
        question: "How do you know if a floor is ready for epoxy or polish?",
        answer:
          "We test moisture vapor emission from the slab and check for existing coatings, cracks, or contamination before recommending a finish. A floor that fails moisture testing needs mitigation first, or the finish coat will fail within a year or two regardless of who applies it.",
      },
      {
        question: "Can you fix a basement floor that's had water problems?",
        answer:
          "We can address the concrete side — proper slope, crack repair, and vapor barriers — but persistent water intrusion often needs to be solved at the source (grading, drainage, or waterproofing) alongside the floor work, and we'll tell you if that's the case rather than just pouring over the problem.",
      },
      {
        question: "How long does a garage floor resurfacing take?",
        answer:
          "A typical two-car garage resurfacing, including grinding and cure time before coating, usually runs a few days start to finish depending on the finish system chosen.",
      },
      {
        question: "Do you install the epoxy or polish coating yourselves?",
        answer:
          "We handle the concrete prep, moisture mitigation, and surface work; for specialty decorative coatings we can coordinate with finish specialists or advise on the right system for your slab — ask during your estimate what's included for your specific project.",
      },
    ],
    relatedServices: ["concrete-repair", "concrete-leveling", "concrete-maintenance"],
    icon: "flooring",
  },
  {
    id: "foundation-installation",
    name: "Foundation Installation",
    slug: "foundation-installation",
    shortDescription:
      "Crawlspace, stem-wall, and footing foundation systems for additions, garages, and accessory structures.",
    heroHeadline: "Foundation Installation Matched to Your Site, Not a One-Size System",
    heroSubheadline:
      "We evaluate soil, grade, and structure before recommending crawlspace, stem-wall, or footing foundation systems for additions, garages, and new accessory buildings.",
    overview: [
      "Foundation installation covers more ground than a single slab pour — it's the category of work that includes crawlspace foundations with perimeter footings, stem-wall foundations for sites with grade changes, and footing systems for additions, detached garages, and accessory structures where a monolithic slab isn't the right fit. Which system is right depends on the site: slope, soil bearing capacity, frost depth, and how the new structure ties into an existing home.",
      "We start with a site evaluation, not a sales pitch for a particular system. On a sloped lot or one with expansive clay close to the surface, a crawlspace or stem-wall foundation often outperforms a slab; on a flat, well-draining site, a slab may be simpler and more cost-effective. If your project is specifically a monolithic slab-on-grade foundation for a new build or addition, see our dedicated slab foundations page — that's a distinct technique within this broader category.",
    ],
    commonProblems: [
      "A sloped or uneven lot that a standard slab foundation can't be poured on without major grading",
      "An addition that needs to tie structurally into an existing home's foundation height and type",
      "A detached garage or accessory structure needing footings sized to local frost depth and soil bearing capacity",
      "An older crawlspace foundation with settling, cracked piers, or inadequate footing depth",
    ],
    materials: [
      "Reinforced poured concrete footings sized to local frost depth and soil bearing capacity",
      "CMU block or poured stem walls for crawlspace and grade-change foundations",
      "Perimeter drainage and vapor barrier systems appropriate to the foundation type",
    ],
    faqs: [
      {
        question: "How do I know if I need a crawlspace, stem-wall, or slab foundation?",
        answer:
          "It comes down to your site's slope, soil, drainage, and how the structure needs to connect to any existing building. We evaluate all of that during the site visit and recommend the system that fits, rather than defaulting to whichever is easiest for us to build.",
      },
      {
        question: "Do you handle foundations for additions that tie into an existing house?",
        answer:
          "Yes — matching foundation height, structural tie-in, and moisture barrier continuity with an existing home is one of the more technical parts of addition work, and it's a common project type for us.",
      },
      {
        question: "How deep do footings need to be in the Nashville area?",
        answer:
          "Footing depth depends on local frost line requirements and soil bearing capacity, which we confirm against your specific jurisdiction's building code before design — we don't use a blanket depth across every site.",
      },
      {
        question: "Do you pull permits for foundation work?",
        answer:
          "Foundation work virtually always requires a permit and inspection. We handle the application and coordinate inspections as part of the project rather than leaving that step to you.",
      },
      {
        question: "How is this different from your slab foundation service?",
        answer:
          "This page covers the broader category — crawlspace, stem-wall, and footing systems. Slab foundations are a specific technique: a monolithic slab-on-grade pour, most common for new single-story builds and additions on flat, well-draining sites. If you already know you want a slab, that page has more detail; if you're not sure which fits your project, start here.",
      },
    ],
    relatedServices: ["slab-foundations", "structural-concrete", "retaining-walls"],
    icon: "foundation",
  },
  {
    id: "concrete-maintenance",
    name: "Concrete Maintenance Programs",
    slug: "concrete-maintenance",
    shortDescription:
      "Ongoing sealing, joint maintenance, and seasonal inspection to prevent damage before it starts.",
    heroHeadline: "Concrete Maintenance: Prevent the Repair Call Before It Happens",
    heroSubheadline:
      "Scheduled sealing, joint maintenance, and seasonal inspection keep driveways, patios, and walkways ahead of Nashville's freeze-thaw cycle instead of reacting to it.",
    overview: [
      "Most concrete damage we repair didn't have to happen — it's the slow result of a sealer that wore off five years ago, a control joint that dried out and let water in, or a hairline crack nobody caught before winter turned it into a real one. Maintenance is a different relationship than repair: instead of calling us when something's already broken, you're on a schedule that catches the small, cheap fixes before they become big, expensive ones.",
      "A typical program includes periodic resealing on a 2–3 year cycle depending on exposure, joint sealant inspection and renewal, pressure washing to remove the grime and organic growth that traps moisture, and a seasonal walk-through — especially before winter — to catch new cracking early. It's a mindset shift from project-based repair to protecting the investment you already made in your concrete.",
    ],
    commonProblems: [
      "A driveway sealer that's worn off and left the surface exposed to de-icing salt for another winter",
      "Dried-out, cracked control joint sealant letting water penetrate straight to the base",
      "Small hairline cracks that go unnoticed until a freeze cycle widens them into structural cracks",
      "Organic staining and moss buildup in shaded areas that trap moisture against the slab",
      "Property owners who only think about concrete when something's already broken, missing years of cheap preventive fixes",
    ],
    materials: [
      "Penetrating silane/siloxane or acrylic sealers matched to slab exposure and finish",
      "Polyurethane joint sealant for control and expansion joints",
      "Pressure-washing and surface-prep treatments prior to resealing",
    ],
    faqs: [
      {
        question: "How is maintenance different from a repair visit?",
        answer:
          "Repair fixes concrete that's already damaged. Maintenance is scheduled, preventive work — sealing, joint upkeep, inspection — meant to catch small issues before they turn into repairs at all. Many maintenance customers never need a major repair because we catch problems early.",
      },
      {
        question: "How often does concrete actually need to be resealed?",
        answer:
          "It depends on the sealer type, sun exposure, and traffic, but most driveways and patios in this climate benefit from resealing every 2–3 years. We assess wear at each visit rather than reselling on a fixed calendar regardless of actual condition.",
      },
      {
        question: "Is a maintenance program worth it for a newer driveway?",
        answer:
          "Yes — the best time to start protecting a slab is before it shows any damage. Sealing new concrete early actually extends its life more than waiting until it's already worn or stained.",
      },
      {
        question: "What does a seasonal inspection actually check?",
        answer:
          "We look at joint condition, sealer wear, new or growing cracks, drainage patterns, and any settling since the last visit, and give you a straightforward list of anything that needs attention before it becomes a bigger job.",
      },
      {
        question: "Can I start a maintenance program on concrete you didn't originally pour?",
        answer:
          "Yes — we service existing concrete regardless of who originally poured it, starting with a baseline inspection so we know what condition it's in before setting up a maintenance schedule.",
      },
    ],
    relatedServices: ["concrete-repair", "concrete-leveling", "concrete-flooring"],
    icon: "maintenance",
  },
  {
    id: "retaining-walls",
    name: "Retaining Walls",
    slug: "retaining-walls",
    shortDescription:
      "Engineered concrete retaining walls that hold back slope, protect foundations, and stay put.",
    heroHeadline: "Concrete Retaining Walls Built to Actually Hold Back the Hill",
    heroSubheadline:
      "Properly engineered drainage, footing depth, and reinforcement — the parts of a retaining wall you can't see are what determine whether it lasts.",
    overview: [
      "A retaining wall is a drainage structure first and a wall second — most retaining wall failures we're called out to fix didn't fail because the concrete cracked, they failed because water built up behind the wall with nowhere to go, and hydrostatic pressure eventually won. We design every wall with backfill drainage, weep holes or drain tile, and a footing sized to the soil and the height and slope of what it's holding back.",
      "Nashville's rolling terrain means a lot of properties need a retaining wall somewhere — a sloped backyard that needs a usable flat terrace, a driveway cut into a hillside, or a foundation that needs slope stabilized above it. We handle everything from a low garden wall to engineered walls tall enough to require a stamped structural design.",
    ],
    commonProblems: [
      "A leaning or bulging wall that's showing the first signs of hydrostatic pressure failure",
      "A wall built without proper drainage that's now holding back saturated soil after every rain",
      "Erosion undermining the base of an existing wall from poor grading above it",
      "A sloped yard that's unusable without a terraced retaining structure",
      "A driveway or patio built too close to an unsupported slope that's slowly sliding",
    ],
    materials: [
      "Reinforced poured concrete or engineered block systems depending on height and load",
      "Perforated drain tile and gravel backfill for hydrostatic pressure relief",
      "Geogrid soil reinforcement for taller walls",
      "Footings sized and depth-set per engineering requirements for the wall height and soil type",
    ],
    faqs: [
      {
        question: "Does my retaining wall need an engineer's stamp?",
        answer:
          "Many jurisdictions require engineered plans for walls above a certain height — often around 4 feet, though it varies by location. We confirm the requirement for your specific project and coordinate engineering when it's needed.",
      },
      {
        question: "Why did my old retaining wall fail?",
        answer:
          "The most common cause we see is inadequate drainage behind the wall — without weep holes or drain tile, water pressure builds up until the wall leans, bulges, or fails outright. Undersized footings are the second most common cause.",
      },
      {
        question: "How long do concrete retaining walls last?",
        answer:
          "A properly engineered and drained concrete retaining wall can last 50+ years. Most premature failures trace back to a drainage or footing shortcut during original construction, not the material itself.",
      },
      {
        question: "Do you handle permits for retaining walls?",
        answer:
          "Yes — retaining walls above a certain height typically require a permit and, in some jurisdictions, an engineering review. We handle that process as part of the project.",
      },
    ],
    relatedServices: ["foundation-installation", "structural-concrete", "concrete-repair"],
    icon: "retaining",
  },
  {
    id: "slab-foundations",
    name: "Slab Foundations",
    slug: "slab-foundations",
    shortDescription:
      "Monolithic slab-on-grade foundations for new builds, additions, and slab-built garages.",
    heroHeadline: "Monolithic Slab Foundations, Poured Right the First Time",
    heroSubheadline:
      "A single-pour slab-on-grade foundation with an integrated thickened-edge footing — fast, cost-effective, and well suited to flat, well-draining Middle Tennessee lots.",
    overview: [
      "A slab foundation is a specific technique: the floor and the footing are poured together as one monolithic slab, with a thickened edge around the perimeter acting as the footing instead of a separate stem wall or crawlspace. It's faster to build and generally more cost-effective than crawlspace or stem-wall systems, which is why it's the standard choice for a lot of new single-story additions, sunrooms, garages, and accessory structures on flat, well-draining sites.",
      "Getting a slab foundation right comes down to what's under and inside the pour: correctly compacted fill, a properly placed vapor barrier, rebar or post-tension cable sized to the soil's expansive potential, and control joints positioned before the concrete goes down, not cut in as an afterthought. If your site is sloped or your soil report calls for something other than a flat monolithic pour, our foundation installation page covers the broader range of systems — we'll tell you honestly if a slab isn't the right fit for your lot.",
    ],
    commonProblems: [
      "An addition planned on a slab that needs the foundation height matched exactly to the existing home's floor level",
      "A new garage or accessory building on a lot with visible clay soil that needs reinforcement sized accordingly",
      "A slab poured without a proper vapor barrier that's now showing moisture issues under flooring",
      "An older slab foundation with insufficient edge thickening now showing perimeter cracking",
    ],
    materials: [
      "Monolithic thickened-edge slab design, typically 4-inch field with a deeper perimeter footing",
      "Compacted structural fill engineered to the soil report",
      "10-mil or heavier vapor barrier beneath the slab",
      "Rebar grid or post-tension cable reinforcement sized to expansive clay conditions where relevant",
    ],
    faqs: [
      {
        question: "Is a slab foundation cheaper than a crawlspace foundation?",
        answer:
          "Generally yes — a monolithic slab pour requires less labor and material than a crawlspace with a separate stem wall and floor system, which is part of why it's common for additions and accessory structures where cost efficiency matters.",
      },
      {
        question: "Can a slab foundation handle Nashville's clay soil?",
        answer:
          "Yes, when it's engineered for it — that usually means proper compacted fill, sometimes a soil report to check expansive potential, and reinforcement (standard rebar or post-tension cable on more expansive sites) sized to what the soil actually does when it's wet versus dry.",
      },
      {
        question: "How do you match a new slab addition to an existing home's foundation?",
        answer:
          "We survey the existing finished floor height and design the new slab's forming and fill depth to land flush, so the transition between old and new floor isn't a step or a slope.",
      },
      {
        question: "Do slab foundations need a vapor barrier?",
        answer:
          "Yes, essentially always for living space — without one, moisture wicks up through the slab and causes problems with flooring, humidity, and indoor air quality down the road. It's a standard part of every slab foundation we pour.",
      },
      {
        question: "What's the difference between this and your foundation installation service?",
        answer:
          "Slab foundations are one specific technique — a monolithic slab-on-grade pour. Foundation installation is the broader category that also includes crawlspace and stem-wall systems for sites where a slab isn't the right fit. If you already know you want a slab, you're on the right page; if you're not sure, our foundation installation page walks through how we'd evaluate your site.",
      },
    ],
    relatedServices: ["foundation-installation", "concrete-flooring", "structural-concrete"],
    icon: "slab",
  },
  {
    id: "stamped-concrete",
    name: "Stamped Concrete",
    slug: "stamped-concrete",
    shortDescription:
      "Decorative stamped concrete patios, pool decks, and driveways that mimic stone, brick, or pavers.",
    heroHeadline: "Stamped Concrete Patios, Pool Decks & Driveways",
    heroSubheadline:
      "The look of natural stone, slate, or brick at a fraction of the material and installation cost — patterned, textured, and colored while the concrete's still workable.",
    overview: [
      "Stamped concrete is regular structural concrete with a decorative surface pressed into it before it cures — a pattern that can mimic flagstone, cobblestone, brick, slate, or wood plank, combined with integral or surface-applied color. Done well, it reads as a premium hardscape material; done poorly, with a rushed stamp or thin color layer, it reads as exactly what people picture when they hear 'stamped concrete.' The difference is almost entirely in surface prep, timing, and the skill of the crew doing the stamping.",
      "It's most popular for patios, pool decks, and front entry walkways where appearance matters as much as function, and increasingly for driveways where homeowners want a high-end look without paver installation and long-term joint maintenance. We walk clients through pattern and color samples before the pour, because those decisions are effectively permanent once the concrete cures.",
    ],
    commonProblems: [
      "An existing plain concrete patio or pool deck that looks dated and the homeowner wants upgraded without a full hardscape replacement",
      "A driveway that needs to match a home's stone or brick exterior more than plain gray concrete allows",
      "An older stamped surface that's faded or lost its sealer sheen and needs resealing or color refresh",
      "A pool deck that needs a textured, slip-resistant surface that still reads as decorative rather than purely functional",
    ],
    materials: [
      "Structural concrete base mix matched to the application (patio, deck, or driveway loads)",
      "Integral color or color hardener applied during the stamping process",
      "Textured stamp mats in stone, slate, cobblestone, brick, or wood-plank patterns",
      "Release agent and curing sealer for pattern definition and surface protection",
    ],
    faqs: [
      {
        question: "How long does stamped concrete last compared to plain concrete?",
        answer:
          "The structural concrete underneath lasts just as long as a standard slab. The decorative surface and color need periodic resealing — typically every 2–3 years — to keep their color and slip resistance; that's the main added maintenance versus plain concrete.",
      },
      {
        question: "Can you stamp concrete around a pool?",
        answer:
          "Yes — pool decks are one of the most common applications, and we choose a texture with adequate slip resistance for wet, barefoot use rather than a pattern that looks good but gets slick.",
      },
      {
        question: "Is stamped concrete cheaper than pavers?",
        answer:
          "Generally yes for both material and installation cost, and it has no joints for weeds or ants to get into over time. Pavers have the advantage of individual replacement if one is damaged; a stamped slab is one continuous piece.",
      },
      {
        question: "Can you match stamped concrete to my home's brick or stone?",
        answer:
          "We can get close with pattern and color selection, and we'll review physical samples with you against your home's actual materials before the pour, since color rendering on a screen doesn't always translate accurately.",
      },
      {
        question: "What happens if a stamped driveway cracks?",
        answer:
          "Like any concrete, stamped slabs can crack if the base or joint spacing wasn't right, but we design control joints to follow the stamp pattern lines so any cracking that does occur is far less visually obvious than on a driveway that cracks off-pattern.",
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-maintenance", "concrete-repair"],
    icon: "stamped",
  },
  {
    id: "structural-concrete",
    name: "Structural Concrete Assistance",
    slug: "structural-concrete",
    shortDescription:
      "Footings, structural pads, and load-bearing concrete support for additions, decks, and outbuildings.",
    heroHeadline: "Structural Concrete Support for Additions, Decks & Outbuildings",
    heroSubheadline:
      "Footings, piers, and load-bearing pads engineered to actually carry what's built on top of them — coordinated with your GC, architect, or engineer.",
    overview: [
      "This is the connective-tissue work of a bigger build: footings for a deck or porch addition, structural pads for HVAC equipment or a generator, pier foundations for a pergola or outbuilding, and load-bearing concrete elements that need to be sized correctly because something structural depends on them holding. We frequently work alongside a general contractor, architect, or structural engineer on this type of work rather than as the sole point of contact, and we're comfortable building to someone else's stamped plans as well as advising on our own.",
      "Where a project doesn't already have engineered plans — a deck footing schedule, for instance — we size footings to local code requirements for frost depth and bearing capacity and can bring in a structural engineer when the scope calls for a stamped design, particularly for anything load-bearing tied to habitable structure.",
    ],
    commonProblems: [
      "A deck or porch addition that needs footings sized correctly for frost depth and the structure's actual load",
      "An HVAC condenser or generator pad that was never poured level or sized for the equipment",
      "Undersized or shallow footings on an existing structure showing settling",
      "A pergola, carport, or outbuilding needing pier foundations tied to a structural post layout",
    ],
    materials: [
      "Structural-grade concrete mix sized to the specific load and span",
      "Rebar or pier reinforcement per engineered or code-table specifications",
      "Sonotube or engineered form systems for pier and column footings",
    ],
    faqs: [
      {
        question: "Do you work directly with general contractors and architects?",
        answer:
          "Yes — a meaningful share of our structural work comes as a sub-scope on someone else's project, building to their plans and coordinating on schedule and inspections rather than managing the whole build ourselves.",
      },
      {
        question: "Can you size footings without an engineer?",
        answer:
          "For straightforward residential elements like deck footings, we can typically size to local code tables for frost depth and bearing capacity. For anything unusual in load, span, or soil condition, we'll recommend bringing in a structural engineer rather than guessing.",
      },
      {
        question: "How deep do footings need to go in this area?",
        answer:
          "It depends on your specific jurisdiction's frost depth requirement and the soil bearing capacity at your site, which we confirm before pouring rather than assuming a blanket depth applies everywhere in the metro.",
      },
      {
        question: "Do you pour equipment pads for HVAC or generators?",
        answer:
          "Yes — these need to be sized and leveled correctly for the specific equipment, with attention to vibration isolation and drainage away from the unit, which we account for in the pour.",
      },
    ],
    relatedServices: ["foundation-installation", "retaining-walls", "concrete-parking-lots"],
    icon: "structural",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
