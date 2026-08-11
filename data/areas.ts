import type { Area } from "@/lib/types";

// Permit authority details verified against each jurisdiction's official site
// (see build notes). Fee figures are intentionally omitted since they change
// and vary by project value — confirm current fees directly with each office
// before quoting a customer.
export const areas: Area[] = [
  {
    id: "belle-meade",
    name: "Belle Meade",
    slug: "belle-meade",
    county: "Davidson County",
    isCountySeat: false,
    permitAuthority: "City of Belle Meade Building Codes Department",
    permitAuthorityNote:
      "Belle Meade is an independent incorporated city inside Davidson County with its own City Hall and building codes office at 4705 Harding Pike — it does not run through Metro Nashville's codes department the way most Davidson County neighborhoods do. The city has adopted its own residential building code and reviews exterior work, including driveways, terraces, and masonry walls, as a distinct permit type.",
    characterSnippet: "long, tree-lined estate lots off Belle Meade Boulevard with decades-old hardwood canopy",
    neighborhoodCharacter: [
      "Belle Meade is Nashville's original estate district — long, tree-lined lots off Belle Meade Boulevard and Harding Pike, many still on their original early-20th-century footprints, with mature hardwood canopy that's been growing since before the concrete industry used rebar. Homes here range from historic Georgian and Colonial Revival estates to newer construction built to match that scale, and lot sizes routinely run large enough that a driveway project here means hundreds of linear feet, not a forty-foot pad.",
      "Because it's an independent city with its own design review culture, exterior concrete work in Belle Meade tends to get more scrutiny on appearance — material choice, edge detailing, and how a new driveway or terrace reads against a historic facade all matter here in a way they don't in a newer subdivision.",
    ],
    soilAndClimateNotes:
      "Belle Meade sits on the same expansive clay base common across the Nashville basin, but with a twist most subdivisions don't have: decades-old root systems from mature oaks and hickories that can heave a slab from below just as effectively as clay swelling can from underneath. Any driveway or walkway near established trees here needs base prep and, sometimes, root barriers accounted for in the design.",
    distanceNote:
      "Belle Meade is typically a 10–15 minute drive from our shop on 29th Ave N, which keeps us close enough for same-week estimates and fast callback service on repair work.",
    localFaqs: [
      {
        question: "Does the City of Belle Meade require a permit for a new driveway?",
        answer:
          "Driveway work is one of the specific permit categories the City of Belle Meade's Building Codes Department lists separately from general residential permits, so yes — we pull that permit through the city as part of the project rather than assuming county rules apply.",
      },
      {
        question: "Will new concrete work need to match the style of an older Belle Meade home?",
        answer:
          "Not as a matter of code in most cases, but it's worth discussing during the estimate — a lot of Belle Meade's character comes from consistent, understated exterior detailing, and we can talk through finish and edge options that read as appropriate for an older estate property.",
      },
    ],
    nearbyAreas: ["forest-hills", "green-hills", "downtown-nashville"],
    landmarks: ["Belle Meade Boulevard", "Cheekwood Estate & Gardens", "Percy Warner Park", "Harding Pike"],
  },
  {
    id: "forest-hills",
    name: "Forest Hills",
    slug: "forest-hills",
    county: "Davidson County",
    isCountySeat: false,
    permitAuthority: "City of Forest Hills Building & Zoning Department",
    permitAuthorityNote:
      "Forest Hills is its own incorporated city with a Building & Zoning Department that reviews and issues permits directly — projects here go through the city's own permitting process, not a Metro Nashville application, even though Forest Hills sits inside Davidson County.",
    characterSnippet: "large wooded, sloped lots with no sidewalks or streetlights by design",
    neighborhoodCharacter: [
      "Forest Hills was built — deliberately — to stay rural in character even as the rest of Nashville grew up around it. The city has no sidewalks or streetlights by design, lot sizes are large (multiple acres isn't unusual), and winding roads follow the natural hills rather than a grid. It's one of the more architecturally strict small cities in the metro, and residents generally choose it specifically to preserve that low-density, wooded feel.",
      "Concrete work here is often about function blending into a natural setting — long private drives that curve through trees, equestrian-adjacent property improvements, and terraces or patios on genuinely sloped, wooded lots rather than flat subdivision pads.",
    ],
    soilAndClimateNotes:
      "The hilly, wooded terrain that defines Forest Hills means more grade variation per lot than almost anywhere else in the metro — expect more excavation and retaining considerations on a typical project here than on a flat suburban lot, on top of the clay subsoil common to the region.",
    distanceNote:
      "Forest Hills runs about 15–20 minutes from our shop on 29th Ave N depending on which part of the city you're in.",
    localFaqs: [
      {
        question: "Do I need Forest Hills' own permit, or does Metro Nashville handle it?",
        answer:
          "Forest Hills issues its own permits through its Building & Zoning Department even though it's inside Davidson County — we apply through the city directly, not through Metro's codes office.",
      },
      {
        question: "Can you build a long driveway on a sloped, wooded Forest Hills lot?",
        answer:
          "Yes — that's a common project type here. It usually means more grading, drainage planning, and sometimes retaining wall work alongside the driveway pour itself, which we scope together during the site visit.",
      },
    ],
    nearbyAreas: ["belle-meade", "green-hills", "brentwood"],
    landmarks: ["Radnor Lake State Park", "Tyne Boulevard", "Otter Creek Road"],
  },
  {
    id: "brentwood",
    name: "Brentwood",
    slug: "brentwood",
    county: "Williamson County",
    isCountySeat: false,
    permitAuthority: "City of Brentwood Planning and Codes Department",
    permitAuthorityNote:
      "Brentwood's Planning and Codes Department handles permitting and inspections for the city; because a large share of Brentwood's newer neighborhoods are HOA-governed, projects visible from the street often need HOA architectural review in addition to the city permit — two approvals, not one.",
    characterSnippet: "large newer-construction homes in HOA-governed subdivisions near Maryland Farms",
    neighborhoodCharacter: [
      "Brentwood is Williamson County's upscale, corporate-adjacent suburb — large newer-construction homes, a heavy concentration of HOA-governed subdivisions with architectural review committees, and a business corridor around Maryland Farms that brings in commercial concrete work alongside residential. Homes here tend to be larger and newer than the Nashville average, and buyers expect a driveway, patio, or pool deck finished to match.",
      "Because so much of Brentwood was built out under HOA covenants, uniformity matters here in a specific way — an approved paint color, a matching driveway material, a pool deck finish consistent with the neighborhood's design guidelines. We build that review step into the project timeline rather than treating it as a surprise.",
    ],
    soilAndClimateNotes:
      "Brentwood sits on Williamson County's characteristic clay-and-limestone geology — expansive clay with limestone shelf close to the surface in parts of the city, which affects excavation depth and can require different footing approaches from one subdivision to the next.",
    distanceNote:
      "Brentwood is generally a 20–25 minute drive south from our shop on 29th Ave N.",
    localFaqs: [
      {
        question: "Does my HOA need to approve concrete work before the city permit is issued?",
        answer:
          "In most Brentwood subdivisions, yes — HOA architectural review and the city permit are separate approvals, and we'd recommend starting the HOA submission early since it can take longer than the permit itself.",
      },
      {
        question: "Is limestone bedrock a problem for pouring a new driveway or patio?",
        answer:
          "It depends on depth — shallow limestone can actually make for a stable base once it's exposed and prepped correctly, but it can also mean more excavation cost if we have to break through rock to hit proper grade. We check this during the site visit.",
      },
    ],
    nearbyAreas: ["franklin", "forest-hills", "green-hills"],
    landmarks: ["Maryland Farms", "Crockett Park", "Concord Road"],
  },
  {
    id: "green-hills",
    name: "Green Hills",
    slug: "green-hills",
    county: "Davidson County",
    isCountySeat: false,
    permitAuthority: "Metro Nashville Department of Codes and Building Safety",
    permitAuthorityNote:
      "Green Hills is a neighborhood within Metro Nashville, so permits go through Metro's Department of Codes and Building Safety (Codes Help Desk, 800 President Ronald Reagan Way) rather than a separate city office — the same authority that covers East Nashville, The Gulch, and Downtown.",
    characterSnippet: "established mid-century homes and teardown rebuilds near Hillsboro Village",
    neighborhoodCharacter: [
      "Green Hills mixes established mid-century homes on moderate-sized lots with a steady wave of teardown-and-rebuild construction, especially closer to Hillsboro Village and the Green Hills Mall retail corridor. It's one of the more built-out, in-demand parts of Davidson County, which means a lot of our work here is replacing aging concrete on a property being renovated or upgraded rather than pouring on raw ground.",
      "Lots here are tighter than Belle Meade or Brentwood, and many have some grade change from the neighborhood's rolling terrain, so driveway and patio projects often involve working around mature landscaping and existing hardscape rather than a clean slate.",
    ],
    soilAndClimateNotes:
      "Green Hills sits on standard Nashville-basin clay with moderate rolling grade — drainage planning matters here because many lots slope toward the house rather than away from it, a legacy of how the neighborhood was originally graded decades ago.",
    distanceNote:
      "Green Hills is about a 10-minute drive from our shop on 29th Ave N — one of the closer areas we serve.",
    localFaqs: [
      {
        question: "Do older Green Hills homes typically need drainage work along with a driveway replacement?",
        answer:
          "Often yes — a lot of the original grading in this neighborhood predates modern stormwater standards, so when we replace an aging driveway we frequently address regrading or add drainage at the same time rather than repeating the same pooling problem.",
      },
      {
        question: "Is a permit required to replace an existing driveway in the same footprint?",
        answer:
          "Requirements vary by project scope; we confirm with Metro Codes before starting, since even like-for-like replacement can require a permit depending on whether it touches the public right-of-way or curb cut.",
      },
    ],
    nearbyAreas: ["belle-meade", "forest-hills", "brentwood"],
    landmarks: ["Hillsboro Village", "The Mall at Green Hills", "Hillsboro High School"],
  },
  {
    id: "franklin",
    name: "Franklin",
    slug: "franklin",
    county: "Williamson County",
    isCountySeat: true,
    permitAuthority: "City of Franklin Building and Neighborhood Services",
    permitAuthorityNote:
      "Franklin's Building and Neighborhood Services Department (Development Services, Construction Plan Review, Zoning, and Neighborhood Resources divisions) handles permitting citywide — and inside the National Register historic downtown district, exterior work is also subject to Franklin's historic preservation design guidelines, which is a separate layer from the standard building permit.",
    characterSnippet: "a historic downtown square giving way to fast-growing new master-planned subdivisions",
    neighborhoodCharacter: [
      "Franklin is Williamson County's seat and one of the fastest-growing cities in the state, and it genuinely contains two different building environments under one name. Downtown Franklin's historic district has preservation overlay rules covering setbacks, materials, and street-facing appearance on properties near the square. A few miles out, master-planned subdivisions like Westhaven and dozens of newer developments are pouring fresh concrete on raw lots as fast as builders can frame the houses.",
      "That split matters for concrete work: a driveway or walkway project near the historic square often needs to account for preservation guidelines and tighter urban lots, while a project in a newer Franklin subdivision is closer to standard new-construction work, often HOA-governed but without the historic review layer.",
    ],
    soilAndClimateNotes:
      "Franklin shares Williamson County's clay-over-limestone geology, and given the pace of new development, a lot of the soil on newer lots is disturbed fill rather than undisturbed native ground — which makes proper compaction testing more important than it would be on an older, settled lot.",
    distanceNote:
      "Franklin typically runs 25–30 minutes from our shop on 29th Ave N, and we schedule Franklin-area estimates and pours with that drive time built in.",
    localFaqs: [
      {
        question: "Does historic downtown Franklin have different rules for driveways or patios than the rest of the city?",
        answer:
          "Yes — properties within Franklin's historic overlay district are subject to additional design review for street-facing exterior changes, on top of the standard city building permit. We flag this during the estimate if your address falls inside that boundary.",
      },
      {
        question: "How does new-subdivision fill soil affect a driveway pour in Franklin?",
        answer:
          "Fill soil that hasn't fully settled or wasn't compacted to spec is one of the more common causes of early settling cracks we see in newer Franklin neighborhoods, so we check compaction before pouring rather than assuming a newer lot means stable ground.",
      },
    ],
    nearbyAreas: ["brentwood", "forest-hills", "green-hills"],
    landmarks: ["Downtown Franklin square", "Westhaven", "The Factory at Franklin"],
  },
  {
    id: "hendersonville",
    name: "Hendersonville",
    slug: "hendersonville",
    county: "Sumner County",
    isCountySeat: false,
    permitAuthority: "Hendersonville Codes Administration",
    permitAuthorityNote:
      "Hendersonville Codes Administration, based at City Hall on Maple Drive North, handles permitting and inspections for the city; plan submissions go in as a PDF or paper set ahead of inspection scheduling.",
    characterSnippet: "lakeside homes along Old Hickory Lake mixed with newer subdivisions off Gallatin Pike",
    neighborhoodCharacter: [
      "Hendersonville is built around Old Hickory Lake, and that shapes a lot of the concrete work here — lakeside homes with pool decks, boat-access driveways, and patios designed to take advantage of water views, alongside a growing base of standard suburban subdivisions further from the shoreline as the city has expanded along the Gallatin Pike corridor.",
      "There's a real mix of home ages here: established lake-adjacent properties from decades past sitting next to newer construction, which means projects range from replacing worn original concrete to pouring fresh driveways and patios on newly developed lots.",
    ],
    soilAndClimateNotes:
      "Soil composition varies more in Hendersonville than in most of the areas we serve — lots closer to Old Hickory Lake sometimes have sandier or better-draining topsoil from the lake's history, while properties further from the water sit on the more typical Middle Tennessee clay base. We check actual site conditions rather than assuming lakeside means one thing everywhere.",
    distanceNote:
      "Hendersonville is roughly a 30–35 minute drive northeast from our shop on 29th Ave N.",
    localFaqs: [
      {
        question: "Do lakeside properties need special drainage consideration for a patio or driveway?",
        answer:
          "Often yes — grading concrete near the lake needs to account for both stormwater runoff toward the water and, on some lots, seasonal water table changes, which we evaluate during the site visit rather than treating every lakeside lot the same.",
      },
      {
        question: "Is a permit required for a pool deck in Hendersonville?",
        answer:
          "Pool decks generally require a permit through Hendersonville Codes Administration, and pools themselves have separate requirements around fencing and setbacks that we coordinate around during design.",
      },
    ],
    nearbyAreas: ["gallatin", "downtown-nashville", "east-nashville"],
    landmarks: ["Old Hickory Lake", "Streets of Indian Lake", "Gallatin Pike"],
  },
  {
    id: "gallatin",
    name: "Gallatin",
    slug: "gallatin",
    county: "Sumner County",
    isCountySeat: true,
    permitAuthority: "City of Gallatin Building Codes Department",
    permitAuthorityNote:
      "The City of Gallatin Building Codes Department, at City Hall on West Main Street, handles permit submittal, plan review, and inspection through to certificate of occupancy for projects within city limits, with online applications available through the city's permitting portal.",
    characterSnippet: "a historic town square ringed by newly developed former farmland",
    neighborhoodCharacter: [
      "Gallatin is Sumner County's seat, anchored by a historic town square and a steadily growing ring of newer subdivisions on what was, within recent memory, farmland at the edge of the metro. Downtown Gallatin has an older housing stock with the character you'd expect from a county seat that predates the interstate; the outer edges of the city are some of the newest ground being broken in Sumner County.",
      "That contrast means Gallatin projects range from refreshing older concrete near the square — sidewalks, driveways showing decades of wear — to full new-construction pours on recently subdivided lots along the city's growing perimeter.",
    ],
    soilAndClimateNotes:
      "Gallatin's soil is generally consistent with the broader Sumner County clay base, though newer development on the city's edges means more of our work involves checking fill compaction on recently graded lots than on the more settled ground closer to downtown.",
    distanceNote:
      "Gallatin is typically a 40–45 minute drive northeast from our shop on 29th Ave N — still well within our regular service radius.",
    localFaqs: [
      {
        question: "Do older homes near downtown Gallatin need different concrete work than new subdivisions?",
        answer:
          "Usually the work itself is similar — driveways, walkways, patios — but older properties near the square more often need repair or leveling of settled original concrete, while newer subdivision lots are more often first-time pours.",
      },
      {
        question: "Can I apply for a Gallatin permit online?",
        answer:
          "Yes — the City of Gallatin offers an online permitting portal for builders and contractors, and we handle that application as part of the project when we're pulling the permit.",
      },
    ],
    nearbyAreas: ["hendersonville", "lebanon", "east-nashville"],
    landmarks: ["Historic Gallatin Square", "Triple Creek Park", "Old Hickory Lake"],
  },
  {
    id: "east-nashville",
    name: "East Nashville",
    slug: "east-nashville",
    county: "Davidson County",
    isCountySeat: false,
    permitAuthority: "Metro Nashville Department of Codes and Building Safety",
    permitAuthorityNote:
      "East Nashville falls under Metro Nashville's Department of Codes and Building Safety, and several of its pockets — Lockeland Springs and Edgefield among them — sit within Metro Historic Zoning Commission overlay districts, which means exterior changes visible from the street can require historic zoning review in addition to the standard building permit.",
    characterSnippet: "narrow-lot bungalows and Victorians rebuilt after two tornadoes, with heavy infill and ADU activity",
    neighborhoodCharacter: [
      "East Nashville is a neighborhood of narrow lots, alleyways, and a housing stock dominated by early-1900s bungalows and Victorians — many rebuilt or heavily renovated after the 1998 and 2020 tornadoes tore through the area. It's also one of the most active infill and ADU (accessory dwelling unit) markets in the city, with backyard cottages and detached units going up on lots that were never designed for a second structure.",
      "Concrete work here is shaped by tight access: narrow driveways, alley-accessed parking pads, small patios wedged between older homes, and — increasingly — footings and pads for ADU construction on lots where equipment access itself is part of the planning problem.",
    ],
    soilAndClimateNotes:
      "East Nashville sits on standard clay-based Davidson County soil, but decades of urban infill mean we more often encounter old buried debris, prior foundation remnants, or utility lines close to the surface than we do on undeveloped suburban lots — site prep here includes more unknowns to check for before excavation.",
    distanceNote:
      "East Nashville is about a 10–15 minute drive from our shop on 29th Ave N, just across the river.",
    localFaqs: [
      {
        question: "Do I need historic zoning approval for a new driveway or patio in East Nashville?",
        answer:
          "It depends on whether your property sits inside a historic overlay district like Lockeland Springs or Edgefield — if it does, street-facing exterior work typically needs Metro Historic Zoning Commission review on top of the standard permit, and we check your address against the overlay map before we start.",
      },
      {
        question: "Can you pour a footing or pad for a backyard ADU on a narrow East Nashville lot?",
        answer:
          "Yes — this has become one of our more common East Nashville project types. Tight equipment access is usually the main planning challenge, and we scope that during the site visit so there are no surprises on pour day.",
      },
    ],
    nearbyAreas: ["the-gulch", "downtown-nashville", "gallatin"],
    landmarks: ["Five Points", "Lockeland Springs", "Shelby Park"],
  },
  {
    id: "murfreesboro",
    name: "Murfreesboro",
    slug: "murfreesboro",
    county: "Rutherford County",
    isCountySeat: true,
    permitAuthority: "Murfreesboro Development Services — Building and Codes Department",
    permitAuthorityNote:
      "Murfreesboro's Development Services Building and Codes Department, at City Hall on West Vine Street, handles residential and commercial permitting, and new single-family construction and additions may also be subject to the Rutherford County Schools Facilities Tax and city impact fees on top of the standard permit.",
    characterSnippet: "fast-growing new subdivisions ringing a historic county square near MTSU",
    neighborhoodCharacter: [
      "Murfreesboro is Rutherford County's seat and one of the fastest-growing cities in the state, driven in part by MTSU and a steady wave of new subdivision development on what used to be farmland ringing the older downtown core. The square and surrounding historic neighborhoods have an older housing stock; the growth rings further out are almost entirely new construction, often in large planned developments.",
      "That growth pattern means a large share of our Murfreesboro work is first-time concrete on recently developed lots — driveways, patios, and foundations for houses that didn't exist five years ago — alongside a smaller volume of repair and leveling work on older concrete near the historic core.",
    ],
    soilAndClimateNotes:
      "Rutherford County's soil is generally workable clay loam, but rapid subdivision development means a lot of Murfreesboro lots have engineered or disturbed fill rather than settled native soil — we've seen new-construction settling cracks appear within the first couple of years when that fill wasn't compacted properly before the original pour, which is one of the more common issues homeowners call us about here.",
    distanceNote:
      "Murfreesboro is typically a 35–40 minute drive southeast from our shop on 29th Ave N.",
    localFaqs: [
      {
        question: "Why is my newer Murfreesboro home's driveway or patio already cracking?",
        answer:
          "In new subdivisions, the most common cause is fill soil that hadn't fully settled or wasn't compacted to spec before the original builder poured — it's less about the concrete itself and more about what's underneath it. We check base condition before recommending a repair or leveling approach.",
      },
      {
        question: "Are there extra fees for new construction permits in Murfreesboro?",
        answer:
          "New single-family construction, additions, and accessory structures can be subject to the Rutherford County Schools Facilities Tax and city impact fees in addition to the standard building permit fee — we account for that when scoping a new-construction project.",
      },
    ],
    nearbyAreas: ["smyrna", "lebanon", "gallatin"],
    landmarks: ["MTSU", "Historic Murfreesboro Square", "Stones River National Battlefield"],
  },
  {
    id: "the-gulch",
    name: "The Gulch",
    slug: "the-gulch",
    county: "Davidson County",
    isCountySeat: false,
    permitAuthority: "Metro Nashville Department of Codes and Building Safety",
    permitAuthorityNote:
      "The Gulch is part of Metro Nashville and falls under the Department of Codes and Building Safety; because most Gulch properties are condo or mixed-use buildings with shared common elements, exterior and courtyard concrete work often requires condo association or building management approval alongside the Metro permit.",
    characterSnippet: "dense high-rise condo and mixed-use towers on a former rail yard",
    neighborhoodCharacter: [
      "The Gulch is Nashville's densest urban-infill neighborhood — a former rail yard turned into high-rise condos, mixed-use towers, and structured parking, almost entirely built within the last two decades. There's very little traditional single-family concrete work here; most projects involve courtyard patios, rooftop terraces, condo common-area walkways, and small-footprint commercial pads shoehorned into a tight urban grid.",
      "Site access defines almost every Gulch project — narrow streets, limited staging space, loading dock coordination, and building management scheduling all shape how (and when) we can get equipment and material to a pour location here.",
    ],
    soilAndClimateNotes:
      "As converted rail-yard and dense urban-infill ground, Gulch soil conditions are shaped as much by prior site use and structural fill as by native Nashville clay — any ground-level work here typically starts with confirming what's actually underneath the surface before design, not assuming standard suburban conditions.",
    distanceNote:
      "The Gulch is about a 5-minute drive from our shop on 29th Ave N — one of the closest areas we serve.",
    localFaqs: [
      {
        question: "Do you need building management approval for condo courtyard or rooftop concrete work?",
        answer:
          "In most Gulch buildings, yes — we coordinate scheduling, insurance documentation, and access with building or HOA management alongside pulling the Metro permit, since freight elevator and loading dock access usually has to be booked in advance.",
      },
      {
        question: "How do you get equipment into a site with no driveway or yard access?",
        answer:
          "It depends on the building — sometimes it's staging through a loading dock, sometimes it's smaller equipment and hand-mixed or pumped concrete for tight courtyard spaces. We work this out during the site visit before quoting the job.",
      },
    ],
    nearbyAreas: ["downtown-nashville", "east-nashville", "green-hills"],
    landmarks: ["Station Inn", "Gulch Crossing", "Korean Veterans Blvd"],
  },
  {
    id: "downtown-nashville",
    name: "Downtown Nashville",
    slug: "downtown-nashville",
    county: "Davidson County",
    isCountySeat: false,
    permitAuthority: "Metro Nashville Department of Codes and Building Safety",
    permitAuthorityNote:
      "Downtown Nashville falls under Metro's Department of Codes and Building Safety, and properties within the historic Second Avenue/District overlay are additionally subject to Metro Historic Zoning Commission review for street-facing exterior work — a layer that doesn't apply to most of the rest of Davidson County.",
    characterSnippet: "high-rises and historic commercial buildings packed along the Cumberland River",
    neighborhoodCharacter: [
      "Downtown Nashville is the commercial and civic core of the metro — high-rises, historic commercial buildings along Second Avenue, sports and entertainment venues, and a growing residential base in converted and new-build condo towers. Concrete work here skews commercial and public-facing: sidewalks and accessible routes, small commercial pads, structural elements tied into larger building projects, and historic-district-adjacent hardscape where appearance and code compliance both carry real weight.",
      "Working downtown means working around the realities of a dense urban core — permitted lane closures, pedestrian safety plans, and tight scheduling windows around event traffic — considerations that simply don't come up on a residential job in the suburbs.",
    ],
    soilAndClimateNotes:
      "Downtown sits on urban fill and disturbed ground built up over more than a century of development along the Cumberland River, so subsurface conditions vary block to block — utility density and prior foundation remnants are a bigger factor in project planning here than native soil composition.",
    distanceNote:
      "Downtown Nashville is roughly a 5–10 minute drive from our shop on 29th Ave N.",
    localFaqs: [
      {
        question: "Does concrete work near Second Avenue need historic zoning approval?",
        answer:
          "Properties within the District's historic overlay generally do need Metro Historic Zoning Commission review for street-facing exterior changes, on top of the standard building permit — we check your specific address against the overlay boundary before scoping the project.",
      },
      {
        question: "Can you work around downtown's street closures and event schedule?",
        answer:
          "Yes — we plan staging, material delivery, and any required right-of-way permits around Metro's event calendar and typical downtown traffic patterns rather than assuming suburban-style site access.",
      },
    ],
    nearbyAreas: ["the-gulch", "east-nashville", "belle-meade"],
    landmarks: ["Second Avenue Historic District", "Bicentennial Capitol Mall", "Broadway"],
  },
  {
    id: "smyrna",
    name: "Smyrna",
    slug: "smyrna",
    county: "Rutherford County",
    isCountySeat: false,
    permitAuthority: "Town of Smyrna Building Safety Department",
    permitAuthorityNote:
      "The Town of Smyrna's Building Safety Department, located on South Lowry Street, reviews and issues permits and inspects all permitted work within town limits — anyone building an addition, altering, or erecting a new structure needs a permit from this office before starting.",
    characterSnippet: "newer family subdivisions that grew up fast around the Nissan assembly plant",
    neighborhoodCharacter: [
      "Smyrna has grown rapidly as one of Rutherford County's manufacturing and logistics hubs, anchored by Nissan's vehicle assembly plant, and residential development has followed close behind — subdivision after subdivision of newer, family-oriented homes built to house the area's expanding workforce. It's a younger housing stock overall than most of the areas we serve, with fewer historic-district complications and more straightforward new-construction and early-life-of-the-home projects.",
      "Because so much of Smyrna's housing is relatively recent, the concrete work we see here skews toward first driveways and patios for newer homes, plus early settling issues on homes still within their first several years.",
    ],
    soilAndClimateNotes:
      "Smyrna's soil is Rutherford County clay loam similar to Murfreesboro's, and the same new-development caveat applies — engineered fill on recently graded subdivision lots needs proper compaction, since that's the most common cause of early cracking we see on Smyrna's newer concrete.",
    distanceNote:
      "Smyrna is typically a 30–35 minute drive southeast from our shop on 29th Ave N.",
    localFaqs: [
      {
        question: "Why would a driveway on a newer Smyrna home already need leveling or repair?",
        answer:
          "On recently built subdivisions, settling in the first few years after construction is common if the original fill wasn't fully compacted — it's usually a base issue rather than a defect in the concrete itself, and leveling is often a faster fix than replacement.",
      },
      {
        question: "Does Smyrna require a permit for a patio or driveway addition?",
        answer:
          "Generally yes for new construction or structural alterations — the Town of Smyrna's Building Safety Department reviews these before work begins, and we handle that application as part of the project.",
      },
    ],
    nearbyAreas: ["murfreesboro", "lebanon", "east-nashville"],
    landmarks: ["Nissan Stadium (Smyrna assembly plant)", "Sam Davis Home", "Smyrna Airport"],
  },
  {
    id: "lebanon",
    name: "Lebanon",
    slug: "lebanon",
    county: "Wilson County",
    isCountySeat: true,
    permitAuthority: "City of Lebanon Building Inspection / Wilson County Building Codes Division",
    permitAuthorityNote:
      "Building permits for Lebanon are issued in person through the Building Inspector's office at the Courthouse Annex on East Gay Street; the office does not currently offer online permitting, and all required documentation needs to be on hand at the time of application, which we account for in project scheduling.",
    characterSnippet: "a historic square giving way to new growth along the I-840 corridor",
    neighborhoodCharacter: [
      "Lebanon is Wilson County's seat, built around a historic downtown square, with a growing band of new development along the I-840 corridor that's brought distribution, logistics, and residential growth to what used to be more rural, agricultural land. It's a genuine mix of old and new: established homes near the square with decades of settled concrete, and newer subdivisions further out still filling in.",
      "The pace of growth along Lebanon's edges means we increasingly do first-time driveway, patio, and foundation work on recently developed lots, alongside repair and leveling calls from the older, established parts of the city.",
    ],
    soilAndClimateNotes:
      "Wilson County's soil is generally clay-based like the rest of Middle Tennessee, with more variability at the rural-to-suburban edges where former agricultural land is being newly graded for development — we check compaction and drainage on these transitional lots more carefully than on long-settled in-town properties.",
    distanceNote:
      "Lebanon is typically a 40–45 minute drive east from our shop on 29th Ave N, similar to our Gallatin service time.",
    localFaqs: [
      {
        question: "How do I apply for a building permit in Lebanon?",
        answer:
          "Permits are handled in person at the Building Inspector's office in the Courthouse Annex on East Gay Street — there's no online application option currently, so we build that in-person step into the project timeline.",
      },
      {
        question: "Is there a difference between county and city permitting in the Lebanon area?",
        answer:
          "It depends on whether your property is inside Lebanon city limits or unincorporated Wilson County, which determines whether the city's office or the Wilson County Building Codes Division has jurisdiction — we confirm which applies to your address before starting the permit process.",
      },
    ],
    nearbyAreas: ["gallatin", "murfreesboro", "smyrna"],
    landmarks: ["Historic Lebanon Square", "Cedars of Lebanon State Park", "I-840 corridor"],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
