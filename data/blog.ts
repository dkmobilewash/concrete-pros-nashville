import type { BlogPost } from "@/lib/types";

// Topics and URL slugs are built directly from real "People Also Ask" /
// related-search questions supplied by the client, so each post targets a
// query people are actually typing into Google rather than a topic we
// picked ourselves. Cost figures throughout are general, publicly known
// industry ranges — not fabricated Concrete Pros of Nashville pricing —
// and every cost-related post says plainly that a written estimate is the
// only way to get a real number for a specific project.

const PUBLISHED = "2026-08-11";

export const blogPosts: BlogPost[] = [
  {
    slug: "concrete-contractor-cost-per-hour",
    question: "How Much Does a Concrete Contractor Cost Per Hour?",
    metaDescription:
      "Most concrete contractors don't actually price by the hour. Here's how concrete pricing really works, when hourly rates do apply, and what to watch for.",
    excerpt:
      "Hourly pricing is the exception in concrete work, not the rule. Here's why most quotes are per-project or per-square-foot instead, and when an hourly rate actually makes sense.",
    publishedDate: PUBLISHED,
    category: "Hiring & Estimates",
    quickAnswer:
      "Most concrete contractors don't quote residential work by the hour at all — driveways, patios, and slabs are typically priced per square foot or as a flat project cost. When a contractor does bill hourly (usually for small repair or labor-only work), rates commonly fall somewhere in the $40–$100+ per worker, per hour range nationally, with specialized finish work often higher.",
    sections: [
      {
        heading: "Why most concrete work isn't priced by the hour",
        paragraphs: [
          "Concrete pricing is dominated by material and site-prep costs, not labor hours — a driveway's price is driven far more by square footage, base preparation, and finish than by how many hours a crew spends on it. A contractor who priced strictly by the hour would have no incentive to work efficiently, and a homeowner would have no way to budget before the work even started.",
          "That's why the overwhelming majority of driveway, patio, sidewalk, and slab quotes are priced per square foot or as a flat project total, built from material cost, base prep, forming, reinforcement, and finish — not a running labor clock.",
        ],
      },
      {
        heading: "When hourly pricing actually shows up",
        paragraphs: [
          "Hourly rates do come up in a few specific situations: small repair jobs (patching a crack, resetting a step), labor-only arrangements where you're supplying material yourself, or specialty finish work like decorative staining and polishing that's billed by time on more complex jobs.",
        ],
        list: [
          "General laborer / helper: often in the $25–$50/hour range",
          "Experienced concrete finisher: often $50–$100+/hour",
          "Small crew for a repair visit: typically billed as a service-call minimum plus time, not a bare hourly rate",
        ],
      },
      {
        heading: "What to ask for instead of an hourly number",
        paragraphs: [
          "If you're getting quotes for a real project — a new driveway, a patio, a repair — ask for a written, itemized estimate instead of an hourly rate. A good estimate breaks out material, base prep, forming/reinforcement, and finish separately, so you can actually compare quotes apples-to-apples between contractors.",
        ],
      },
    ],
    relatedServices: ["concrete-repair", "concrete-driveways", "concrete-maintenance"],
  },
  {
    slug: "what-not-to-tell-a-contractor",
    question: "What Not to Tell a Contractor Before You Sign a Concrete Estimate",
    metaDescription:
      "A few things worth keeping to yourself during a concrete estimate — and what's actually worth sharing — so you get an honest, accurate quote.",
    excerpt:
      "A handful of things are worth keeping close to the vest during an estimate visit — not because contractors are out to get you, but because certain info can quietly skew what you're quoted.",
    publishedDate: PUBLISHED,
    category: "Hiring & Estimates",
    quickAnswer:
      "Avoid leading with your total budget, don't invent a 'lower competing quote' to negotiate, and don't assume a verbal promise is as good as something in writing. None of this is about distrust — it's about getting an estimate based on the actual scope of your project, not on what you seem willing to pay.",
    sections: [
      {
        heading: "Don't lead with your maximum budget",
        paragraphs: [
          "Opening with 'I have $8,000 to spend' before a contractor has even seen the site invites the estimate to drift toward that number rather than toward what the project actually costs to do right. It's fine to mention a budget range once you understand scope — but let the site visit and written estimate come first.",
        ],
      },
      {
        heading: "Don't invent a lower competing quote",
        paragraphs: [
          "Bluffing about a cheaper offer from 'another guy' to pressure a discount usually backfires — an honest contractor will either hold their price (because it reflects real cost) or you'll end up steering yourself toward whichever contractor is willing to cut corners to win the bluff. If you actually have multiple real quotes, share them honestly and ask what accounts for the difference.",
        ],
      },
      {
        heading: "Don't assume a verbal promise counts",
        paragraphs: [
          "'We'll take care of that' said on a driveway during the estimate walk means nothing if it's not on the written estimate or contract. This isn't about distrust — memories are unreliable and crews change — it's about protecting both sides. Get scope, materials, and timeline in writing before work starts.",
        ],
      },
      {
        heading: "What's actually worth sharing",
        paragraphs: [
          "Be upfront about your real constraints and priorities: a hard deadline (a wedding, a home sale), access issues (a narrow gate, a shared driveway), or must-haves (matching an existing finish, avoiding a certain area of the yard). That information helps a contractor scope the job accurately — it's the budget-number bluffing that tends to backfire, not honesty about the project itself.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-repair"],
  },
  {
    slug: "12x12-concrete-slab-cost",
    question: "How Much Does a 12x12 Concrete Slab Cost With Labor?",
    metaDescription:
      "A 12x12 concrete slab is 144 square feet. Here's what typically drives the installed cost — material, thickness, finish, and site access.",
    excerpt:
      "144 square feet sounds small, but the price swings a lot based on thickness, finish, and how easy the site is to get equipment into.",
    publishedDate: PUBLISHED,
    category: "Pricing",
    quickAnswer:
      "A 12x12 slab is 144 square feet. At typical U.S. residential installed pricing of roughly $6–$12 per square foot for a standard broom-finished slab, that puts a basic 12x12 pad somewhere around $850–$1,750 — more for a stamped or decorative finish, thicker reinforced sections, or a site that needs significant excavation or hauling.",
    sections: [
      {
        heading: "What a 12x12 slab is usually for",
        paragraphs: [
          "A 12x12 pour is a common size for a small patio, a shed or accessory-structure pad, a single-car parking pad, or an AC/generator equipment pad. The right thickness and reinforcement depend heavily on which of those it is — a patio and a structural equipment pad aren't built the same way even at the same footprint.",
        ],
      },
      {
        heading: "What's in the price",
        paragraphs: [
          "An installed price bundles several things: the concrete material itself, excavation and base preparation (compacted gravel base, typically 4+ inches), forming, reinforcement (wire mesh or rebar depending on use), the pour and finish, and cleanup. Material alone is a small fraction of the total on a job this size — site prep and labor usually make up more of the cost than the concrete itself.",
        ],
      },
      {
        heading: "What pushes the price up or down",
        paragraphs: [
          "A few things move a 12x12 slab's price more than anything else:",
        ],
        list: [
          "Site access — can a truck and equipment reach the pour location, or does material need to be wheelbarrowed a long distance",
          "Excavation needs — removing an old slab, tree roots, or significant grade correction adds real cost",
          "Finish — plain broom finish is the baseline; stamped or exposed-aggregate finishes cost meaningfully more",
          "Thickness and reinforcement — a load-bearing pad (equipment, parking) typically needs more than a basic patio",
        ],
      },
      {
        heading: "Getting an accurate number",
        paragraphs: [
          "Because so much of the cost is site-specific, a phone quote for '12x12 slab' is really just a rough starting point. A written estimate after an actual site visit is the only way to know what your project costs — see our stamped concrete and structural concrete pages if you already know which direction you're leaning.",
        ],
      },
    ],
    relatedServices: ["stamped-concrete", "structural-concrete", "concrete-driveways"],
  },
  {
    slug: "how-to-hire-concrete-workers",
    question: "How to Hire Concrete Workers (What to Actually Look For)",
    metaDescription:
      "Most homeowners searching for 'concrete workers' actually need a licensed, insured contractor — not day labor. Here's how to vet one properly.",
    excerpt:
      "There's a real difference between hiring day-labor workers and hiring a contractor — and for most residential concrete projects, you want the latter.",
    publishedDate: PUBLISHED,
    category: "Hiring & Estimates",
    quickAnswer:
      "For most residential concrete work — a driveway, patio, or repair — what you actually want is a licensed, insured contractor, not individually hired laborers, since the contractor carries liability, pulls permits, and stands behind the finished work. Vet them by checking license and insurance, asking for local references, and getting a written, itemized estimate before anything starts.",
    sections: [
      {
        heading: "Workers vs. a contractor — know which one you need",
        paragraphs: [
          "If you're picturing hiring a crew directly to pour a driveway, what most homeowners actually need is a contractor: a business that carries liability insurance, is licensed for the work, pulls any required permits, and is legally accountable if something goes wrong. Hiring individual laborers directly (without a licensed contractor overseeing the work) shifts a lot of risk — and often legal responsibility for the finished work — onto you.",
        ],
      },
      {
        heading: "What to verify before you hire",
        paragraphs: ["A short, practical checklist:"],
        list: [
          "License and insurance — ask to see documentation, not just a verbal 'yes we're insured'",
          "Local track record — ask for addresses or references of concrete work they've done nearby, not just photos",
          "A written, itemized estimate — material, prep, and finish broken out, not a single vague number",
          "Who's actually on site — will the person quoting the job be running the crew, or is it subcontracted out",
          "Payment structure — be cautious of anyone asking for full payment upfront before work starts",
        ],
      },
      {
        heading: "Red flags worth walking away from",
        paragraphs: [
          "Cash-only, no-paperwork arrangements, pressure to sign the same day, no fixed local business address, and reluctance to provide license or insurance documentation are all reasons to keep looking. A legitimate local contractor won't be defensive about any of these questions.",
        ],
      },
    ],
    relatedServices: ["concrete-repair", "concrete-driveways"],
  },
  {
    slug: "100-foot-concrete-driveway-cost",
    question: "How Much Would a 100 Ft Concrete Driveway Cost?",
    metaDescription:
      "Driveway length alone doesn't set the price — width does most of the work. Here's how to estimate a 100-foot concrete driveway realistically.",
    excerpt:
      "A 100-foot driveway can mean very different total costs depending on whether it's single-car width or a wide double approach.",
    publishedDate: PUBLISHED,
    category: "Pricing",
    quickAnswer:
      "It depends heavily on width, not just length. A 100-foot driveway at a standard single-car width (10–12 feet) is roughly 1,000–1,200 square feet, which at typical installed pricing of $6–$12 per square foot puts the range around $6,000–$14,400. A wider double-car driveway at the same length costs proportionally more.",
    sections: [
      {
        heading: "Why length alone is the wrong number to start with",
        paragraphs: [
          "'100 feet' only tells you one dimension. A 100-foot driveway that's 10 feet wide is 1,000 square feet; the same length at 20 feet wide is 2,000 square feet — double the material and roughly double the cost. Any real estimate starts from total square footage, not linear length.",
        ],
      },
      {
        heading: "Rough cost by width",
        paragraphs: [
          "Using a general $6–$12 per square foot installed range for a standard broom-finish driveway:",
        ],
        list: [
          "10 ft wide (1,000 sq ft): roughly $6,000–$12,000",
          "12 ft wide (1,200 sq ft): roughly $7,200–$14,400",
          "16–20 ft wide double driveway (1,600–2,000 sq ft): roughly $9,600–$24,000",
        ],
      },
      {
        heading: "What else moves the number",
        paragraphs: [
          "A long driveway often involves more than just a bigger rectangle of concrete — grading over the full length, a culvert or drainage crossing, tree root removal, and how the driveway meets the street (the apron) can all add cost beyond straight square footage. On a length like 100 feet, drainage and grade change over that distance matter more than they would on a short pad.",
        ],
      },
      {
        heading: "Why Middle Tennessee soil matters here specifically",
        paragraphs: [
          "A 100-foot driveway crosses a lot more variable ground than a short one — it's more likely to cross a low spot, a soil transition, or a slope change somewhere along its length. Proper base compaction and control joint spacing over that full run is what keeps a long driveway from developing uneven cracking a few years in, especially in our region's clay soil.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-repair"],
  },
  {
    slug: "what-is-poor-mans-concrete",
    question: "What Is 'Poor Man's Concrete'?",
    metaDescription:
      "\"Poor man's concrete\" is a slang term for cut-rate DIY concrete substitutes. Here's what it usually means and where it's genuinely risky to use.",
    excerpt:
      "It's not an engineering term — it's slang for stretching or substituting a mix to cut cost, and it usually trades away strength you'll need later.",
    publishedDate: PUBLISHED,
    category: "Materials & Techniques",
    quickAnswer:
      "\"Poor man's concrete\" isn't a real engineering term — it's slang for a cheaper, homemade substitute for proper ready-mix concrete, usually made by stretching a mix with more sand/aggregate and less cement, or using an entirely different material (like compacted gravel, road base, or asphalt millings) in concrete's place. It can work for very low-stakes, non-structural uses, but it isn't a substitute for real concrete anywhere load-bearing.",
    sections: [
      {
        heading: "Where the term comes from",
        paragraphs: [
          "It shows up in DIY and homesteading circles as a way to describe stretching a small cement budget — mixing a leaner cement-to-aggregate ratio than a standard structural mix, or substituting compacted gravel, crushed stone, or even asphalt millings for a poured slab in low-stakes applications like a garden path or a shed footing.",
        ],
      },
      {
        heading: "Where it's genuinely fine",
        paragraphs: [
          "For something with no real load and no consequence if it settles or erodes a bit over time — a garden path, temporary equipment staging, a rustic stepping surface — a compacted gravel or lean-mix substitute can be a perfectly reasonable, cheaper choice.",
        ],
      },
      {
        heading: "Where it's a real risk",
        paragraphs: [
          "Anywhere that needs to bear vehicle weight, support a structure, or hold back soil is the wrong place for a cut-rate substitute. A leaner mix has less compressive strength and worse freeze-thaw durability — exactly the properties that matter for a driveway, a foundation, or a retaining wall in a climate with real winter freeze-thaw cycling. A driveway poured with an under-strength mix will crack and spall years earlier than one built to standard PSI.",
        ],
      },
      {
        heading: "The honest takeaway",
        paragraphs: [
          "If you're trying to save money on a real structural pour, the better lever is usually reducing scope (a smaller footprint, simpler finish) rather than cutting mix quality — a proper mix on a smaller slab beats a cut-rate mix on a bigger one almost every time, in terms of what it actually costs you over the concrete's lifespan.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-repair", "concrete-maintenance"],
  },
  {
    slug: "is-4-inches-of-concrete-enough-for-a-driveway",
    question: "Is 4 Inches of Concrete Thick Enough for a Driveway?",
    metaDescription:
      "4 inches is the standard residential driveway thickness for passenger vehicles — here's when that's enough and when you need more.",
    excerpt:
      "For a typical car and light truck, yes. For anything heavier parked regularly, the answer changes.",
    publishedDate: PUBLISHED,
    category: "Materials & Techniques",
    quickAnswer:
      "Yes — 4 inches over a properly compacted base is the standard thickness for a residential driveway carrying normal passenger vehicles. If you regularly park something heavier — a full-size truck, an RV, a boat trailer, or multiple vehicles in the same wheel path — 5–6 inches with added reinforcement is the safer call.",
    sections: [
      {
        heading: "Why 4 inches is the standard",
        paragraphs: [
          "4 inches of properly reinforced concrete over a compacted gravel base is more than strong enough to carry the repeated weight of typical cars and light trucks without cracking under load. It's the thickness most residential driveways are built to, and for a standard household vehicle mix, it's not an area worth over-building.",
        ],
      },
      {
        heading: "When you need more than 4 inches",
        paragraphs: ["A few situations where going thicker is worth the extra material cost:"],
        list: [
          "Regularly parking a full-size pickup, RV, or boat/trailer combination",
          "A shared driveway that also sees delivery trucks or trash service turning on it regularly",
          "A driveway apron section right where it meets the street, which takes more repeated stress than the rest of the run",
        ],
      },
      {
        heading: "Thickness isn't the only factor",
        paragraphs: [
          "A 4-inch slab poured over an under-compacted base will fail well before a properly built one, regardless of thickness — base prep, control joint spacing, and mix strength all matter as much as raw thickness. Going thicker doesn't fix a bad base; it's not a substitute for doing the ground prep correctly in the first place.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-parking-lots"],
  },
  {
    slug: "concrete-strength-for-a-driveway",
    question: "What Strength Concrete Do You Need for a Driveway?",
    metaDescription:
      "PSI, air-entrainment, and why a slightly stronger mix is worth it for a Middle Tennessee driveway. A practical breakdown of what strength means.",
    excerpt:
      "PSI numbers on a mix ticket aren't just a spec sheet detail — they directly affect how well a driveway survives freeze-thaw winters.",
    publishedDate: PUBLISHED,
    category: "Materials & Techniques",
    quickAnswer:
      "Most residential driveways are built with a minimum of 3,500–4,000 PSI concrete, and in climates with real winter freeze-thaw cycling — including Middle Tennessee — a 4,000+ PSI air-entrained mix is generally the better long-term choice over the minimum. Air-entrainment (microscopic air bubbles in the mix) matters as much as raw PSI for freeze-thaw durability.",
    sections: [
      {
        heading: "What PSI actually measures",
        paragraphs: [
          "PSI (pounds per square inch) measures a concrete mix's compressive strength — how much load it can bear before failing. Higher PSI mixes cost modestly more but resist cracking under load and hold up better to wear over decades, which matters a lot on something you're not planning to repour anytime soon.",
        ],
      },
      {
        heading: "Why air-entrainment matters as much as PSI",
        paragraphs: [
          "Air-entrained concrete has microscopic air bubbles mixed in deliberately, which give water room to expand when it freezes inside the concrete instead of cracking the slab from internal pressure. In a climate that gets real freeze-thaw cycling — not extreme cold, but repeated freezing and thawing through the winter — air-entrainment is one of the most important, and most overlooked, mix decisions for driveway longevity.",
        ],
      },
      {
        heading: "What we typically use",
        paragraphs: [
          "For standard residential driveways we generally recommend 4,000+ PSI air-entrained mix rather than the bare minimum — the incremental material cost is small relative to the total project, and it buys real durability against Middle Tennessee's freeze-thaw swings and clay soil movement. Heavier-use surfaces like access roads or commercial lots typically call for even higher-strength mixes; see our concrete driveways page for more on how we spec a mix to a specific project.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "concrete-road-construction", "concrete-parking-lots"],
  },
  {
    slug: "how-often-does-concrete-need-to-be-replaced",
    question: "How Often Does Concrete Need to Be Replaced?",
    metaDescription:
      "Well-built concrete can last decades. Here's what actually forces replacement versus what a repair or leveling visit can fix instead.",
    excerpt:
      "Age alone rarely retires a slab — accumulated damage does. And a lot of that damage is preventable with basic maintenance.",
    publishedDate: PUBLISHED,
    category: "Maintenance & Longevity",
    quickAnswer:
      "There's no fixed replacement schedule — well-built, properly maintained residential concrete can realistically last 25–50 years or more. What actually forces replacement isn't age itself, but accumulated damage (deep structural cracking, severe spalling, or settling) that's progressed past the point where repair or leveling can reliably fix it.",
    sections: [
      {
        heading: "What actually ends a slab's life",
        paragraphs: [
          "It's rarely the concrete simply 'wearing out.' The usual culprits are repeated freeze-thaw damage on an unsealed surface, structural cracking from soil movement or a failed base, or years of deferred maintenance letting small problems compound. A slab that's sealed periodically and has its joints maintained can outlast one that's identical in age but never touched after the original pour.",
        ],
      },
      {
        heading: "Repair and leveling vs. full replacement",
        paragraphs: [
          "Most damage that looks like a replacement job — a settled section, a cracked corner, isolated spalling — can actually be fixed without tearing out the whole slab. Concrete leveling raises settled sections without replacement, and targeted repair addresses cracks and spalling directly. Full replacement is really only the right call when the concrete itself is broken into multiple unstable pieces or was undersized/under-reinforced from the start.",
        ],
      },
      {
        heading: "The maintenance angle",
        paragraphs: [
          "A surprising amount of 'my driveway needs replacing' calls turn out to be preventable damage that a maintenance program would have caught early — a worn-off sealer, a dried-out joint, a hairline crack nobody noticed before a freeze widened it. See our concrete maintenance page for how scheduled sealing and inspection extends a slab's realistic lifespan well past what a neglected one achieves.",
        ],
      },
    ],
    relatedServices: ["concrete-maintenance", "concrete-repair", "concrete-leveling"],
  },
  {
    slug: "can-concrete-last-200-years",
    question: "Can Concrete Last 200 Years?",
    metaDescription:
      "Roman concrete structures have survived nearly 2,000 years. Here's what that actually means for how long a modern driveway or foundation lasts.",
    excerpt:
      "Historically, yes — concrete can far outlast 200 years under the right conditions. That's not the realistic bar for a driveway, though.",
    publishedDate: PUBLISHED,
    category: "Materials & Techniques",
    quickAnswer:
      "Yes, technically — the Pantheon in Rome has an unreinforced concrete dome that's stood for nearly 2,000 years, so 200 years is well within what the material itself is capable of under the right conditions. In practice, residential concrete's realistic lifespan is limited by soil movement, freeze-thaw exposure, and maintenance — not the theoretical ceiling of the material.",
    sections: [
      {
        heading: "The historical case",
        paragraphs: [
          "Roman concrete structures, including the Pantheon's dome, have survived for close to two millennia, and modern research has found some Roman concrete actually gets stronger over time through a self-healing mineral reaction. That's proof the material itself has an extremely long theoretical ceiling — concrete as a substance isn't what limits a driveway's life.",
        ],
      },
      {
        heading: "Why your driveway won't hit 200 years",
        paragraphs: [
          "Modern residential concrete faces conditions Roman concrete generally didn't: steel reinforcement that can corrode and crack the surrounding concrete, repeated vehicle loading, de-icing salt exposure, and — specific to our region — expansive clay soil that moves with every wet-dry cycle underneath the slab. None of these are flaws in the material; they're just real-world stresses a 2,000-year-old dome in a Mediterranean climate never had to deal with.",
        ],
      },
      {
        heading: "What actually determines your slab's lifespan",
        paragraphs: [
          "Base preparation, control joint placement, mix design suited to local freeze-thaw conditions, and ongoing sealing and maintenance are what separate a driveway that's still solid at 40 years from one that needs major repair at 15. The material can outlast us all — how it's built and cared for determines whether it actually does.",
        ],
      },
    ],
    relatedServices: ["concrete-maintenance", "concrete-driveways"],
  },
  {
    slug: "what-destroys-concrete-quickly",
    question: "What Destroys Concrete Quickly?",
    metaDescription:
      "Freeze-thaw cycling, de-icing salt, poor drainage, and soil movement are the biggest threats to concrete — especially in Middle Tennessee.",
    excerpt:
      "A handful of specific, preventable conditions do almost all the damage — and most of them show up more in our region than people realize.",
    publishedDate: PUBLISHED,
    category: "Maintenance & Longevity",
    quickAnswer:
      "The biggest accelerants of concrete damage are repeated freeze-thaw cycling on unsealed concrete, de-icing salt exposure, poor drainage that keeps the base saturated, expansive clay soil movement underneath the slab, and loads the concrete wasn't designed to carry (heavy vehicles on an undersized driveway). Most of these are preventable with the right original build and ongoing maintenance.",
    sections: [
      {
        heading: "Freeze-thaw cycling",
        paragraphs: [
          "Water that gets into concrete's surface and then freezes expands and cracks the material from the inside — and it doesn't take extreme cold, just repeated freezing and thawing through a normal winter. This is exactly why air-entrained mix and periodic sealing matter so much in our climate; both directly counter this specific failure mode.",
        ],
      },
      {
        heading: "De-icing salt",
        paragraphs: [
          "Salt accelerates freeze-thaw damage and causes surface scaling — the pitted, flaking look on older, unsealed driveways is almost always salt damage compounding freeze-thaw cycling over multiple winters. A sealed surface resists this dramatically better than bare concrete.",
        ],
      },
      {
        heading: "Poor drainage and soil movement",
        paragraphs: [
          "Standing water that saturates the base underneath a slab erodes support over time, leading to settling and cracking. And Nashville-area clay soil expands when wet and shrinks when dry — a slab poured without accounting for that seasonal movement is fighting the ground underneath it from day one.",
        ],
      },
      {
        heading: "Loads it wasn't designed for",
        paragraphs: [
          "A driveway sized and reinforced for passenger cars will crack under repeated heavier loads — a full-size truck, an RV, or a delivery vehicle turning in the same spot regularly. If your use case has changed since the original pour, that's worth mentioning before assuming a crack is just 'normal wear.'",
        ],
      },
    ],
    relatedServices: ["concrete-maintenance", "concrete-repair", "concrete-leveling"],
  },
  {
    slug: "best-time-of-year-to-lay-concrete-in-nashville",
    question: "What Is the Best Time of Year to Lay Concrete in Nashville?",
    metaDescription:
      "Fall and late spring are generally ideal for pouring concrete in Middle Tennessee — but a good contractor can pour safely nearly year-round.",
    excerpt:
      "Moderate temperatures make fall and late spring the easiest window, but extreme summer heat and hard winter freezes are the real things to plan around.",
    publishedDate: PUBLISHED,
    category: "Local Nashville Concrete",
    quickAnswer:
      "Fall and late spring are generally the easiest windows in Middle Tennessee — moderate temperatures (roughly 50–80°F) let concrete cure at a predictable rate without the complications of extreme heat or hard freezes. That said, a properly equipped contractor can pour concrete safely for most of the year with the right adjustments.",
    sections: [
      {
        heading: "Why moderate temperatures make curing easier",
        paragraphs: [
          "Concrete cures through a chemical reaction (hydration), and that reaction happens most predictably in moderate temperatures. Fall and late spring in Middle Tennessee tend to offer stretches of exactly that — mild days, mild nights — which makes timing and finish work more forgiving than at either climate extreme.",
        ],
      },
      {
        heading: "Why peak summer is trickier",
        paragraphs: [
          "High heat speeds up surface drying faster than the concrete underneath cures, which increases the risk of surface cracking if a crew isn't managing it carefully — timing pours for early morning, using retarding admixtures, and keeping the surface properly hydrated during finishing. It's very doable, it just takes more active management than a mild-weather pour.",
        ],
      },
      {
        heading: "Why hard winter freezes are the real limit",
        paragraphs: [
          "Concrete that freezes before it's cured enough can be permanently weakened — this is the one condition worth genuinely avoiding rather than just managing. Outside of a hard freeze, winter pours are workable with cold-weather mix additives and insulated curing blankets to protect the slab while it gains strength.",
        ],
      },
      {
        heading: "The practical takeaway",
        paragraphs: [
          "If you have full flexibility, fall or late spring is the easiest window. If your timeline is driven by something else — closing on a house, a planned event, a repair that can't wait — a contractor who knows how to adjust for the season can pour well outside that ideal window without compromising the result.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "foundation-installation"],
  },
  {
    slug: "cost-of-a-yard-of-concrete-in-nashville",
    question: "How Much Is a Yard of Concrete in Nashville?",
    metaDescription:
      "A cubic yard of ready-mix concrete typically runs roughly $150-$200+ delivered, before installation. Here's how far a yard actually goes.",
    excerpt:
      "Material cost per yard and installed cost per square foot are two different numbers people often mix up — here's the difference, and what a yard actually covers.",
    publishedDate: PUBLISHED,
    category: "Pricing",
    quickAnswer:
      "A cubic yard of ready-mix concrete material typically runs roughly $150–$200+ delivered in most U.S. markets today, before any labor, forming, or finish work — that's the raw material cost, not an installed price. One cubic yard covers about 80 square feet at a standard 4-inch driveway thickness.",
    sections: [
      {
        heading: "Material cost vs. installed cost — two different numbers",
        paragraphs: [
          "'Cost per yard' usually refers to the raw ready-mix material delivered by the truck — it doesn't include excavation, base prep, forming, reinforcement, labor, or finish work, which together are typically the larger share of a project's total cost. An 'installed cost per square foot' figure (what most driveway and patio quotes are based on) already has all of that baked in.",
        ],
      },
      {
        heading: "How far a yard actually goes",
        paragraphs: ["A cubic yard of concrete covers roughly:"],
        list: [
          "About 80 square feet at 4 inches thick (standard driveway thickness)",
          "About 65 square feet at 5 inches thick",
          "About 54 square feet at 6 inches thick (typical for heavier-load slabs)",
        ],
      },
      {
        heading: "What changes the per-yard price",
        paragraphs: [
          "Mix strength (PSI), air-entrainment, special additives (like fiber reinforcement or accelerants for cold weather), and delivery minimums or small-load fees all move the per-yard price. A small job that needs less than a full truck load often pays a higher effective rate per yard because of short-load fees.",
        ],
      },
      {
        heading: "Why this number alone won't tell you your project cost",
        paragraphs: [
          "Because material is only part of the total, calculating 'yards needed × price per yard' will meaningfully undercount what a finished driveway or patio actually costs. It's a useful number for understanding how pricing works, but a written estimate covering the full scope is what actually tells you what your project will cost.",
        ],
      },
    ],
    relatedServices: ["concrete-driveways", "slab-foundations"],
  },
  {
    slug: "average-cost-of-a-concrete-slab-in-tennessee",
    question: "What Is the Average Cost of a Concrete Slab in Tennessee?",
    metaDescription:
      "A general range for a basic concrete slab in Tennessee, what moves it up or down, and why statewide averages don't tell you much about your project.",
    excerpt:
      "Statewide averages hide a lot — rural and metro pricing can differ significantly, and finish/thickness choices move the number even more than location does.",
    publishedDate: PUBLISHED,
    category: "Pricing",
    quickAnswer:
      "A basic, broom-finished concrete slab in Tennessee typically runs somewhere around $6–$12 per square foot installed, depending on thickness, site prep needs, and local market conditions — with decorative or stamped finishes running noticeably higher. Statewide averages vary a lot between rural and metro markets, so they're a starting point at best, not a real quote.",
    sections: [
      {
        heading: "A general range, with real caveats",
        paragraphs: [
          "For a standard slab — a driveway, patio, or basic pad, broom-finished, no unusual site complications — $6–$12 per square foot installed is a reasonable general range across Tennessee. Basic equipment/shed pads on easy sites often land toward the lower end; larger driveways with excavation, drainage work, or decorative finishes push toward the higher end and beyond.",
        ],
      },
      {
        heading: "Why 'Tennessee average' isn't that useful",
        paragraphs: [
          "Materials, labor, and demand vary meaningfully between rural counties and fast-growing metro markets like greater Nashville — a statewide blended average smooths over real local differences. It's a reasonable ballpark to walk into a conversation with, not a number to hold a contractor to sight unseen.",
        ],
      },
      {
        heading: "What moves your specific number",
        paragraphs: ["The same factors that matter everywhere apply here:"],
        list: [
          "Thickness and reinforcement needed for the slab's actual use",
          "Site prep — excavation, old concrete removal, grading, drainage",
          "Finish — plain broom vs. stamped, colored, or exposed-aggregate",
          "Access — how easily equipment and material can reach the pour site",
        ],
      },
      {
        heading: "Getting a real number for your project",
        paragraphs: [
          "The only way to get an accurate figure is a site visit and written estimate — see our slab foundations and foundation installation pages if your project is a new build or addition, or request a free estimate directly for any slab project.",
        ],
      },
    ],
    relatedServices: ["slab-foundations", "foundation-installation", "stamped-concrete"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
