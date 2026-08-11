// Single source of truth for NAP (Name, Address, Phone) and company-wide facts.
// Every page must pull from here — never hardcode the address/phone inline.

export const COMPANY = {
  name: "Concrete Pros of Nashville",
  legalName: "Concrete Pros of Nashville",
  tagline: "Family-Owned Concrete Contractors Serving Greater Nashville",
  phone: "(615) 239-1809",
  phoneHref: "tel:+16152391809",
  email: "info@concreteprosofnashville.com",
  addressLine1: "110 29th Ave N",
  addressLine2: "Nashville, TN 37203",
  city: "Nashville",
  state: "TN",
  stateFull: "Tennessee",
  zip: "37203",
  streetAddress: "110 29th Ave N",
  fullAddress: "110 29th Ave N, Nashville, TN 37203",
  geo: {
    latitude: 36.1539,
    longitude: -86.8038,
  },
  priceRange: "$$",
  // NOTE: These operating hours, review counts, and license numbers are placeholders.
  // Confirm real figures with the client before launch (see Section 12 of the build spec).
  hours: [
    { day: "Monday", open: "07:00", close: "18:00" },
    { day: "Tuesday", open: "07:00", close: "18:00" },
    { day: "Wednesday", open: "07:00", close: "18:00" },
    { day: "Thursday", open: "07:00", close: "18:00" },
    { day: "Friday", open: "07:00", close: "18:00" },
    { day: "Saturday", open: "08:00", close: "14:00" },
    { day: "Sunday", closed: true },
  ],
  hoursDisplay: "Mon–Fri: 7:00 AM – 6:00 PM · Sat: 8:00 AM – 2:00 PM · Sun: Closed",
  social: {
    facebook: "https://www.facebook.com/concreteprosofnashville",
    instagram: "https://www.instagram.com/concreteprosofnashville",
    googleProfile: "https://www.google.com/maps/place/?q=Concrete+Pros+of+Nashville",
  },
  founderNote:
    "When you call Concrete Pros of Nashville, you get a neighbor, not a call center. We're a family-owned crew — the same people who bid your job are the ones running the mixer and finishing the edges.",
  reviewRatingPlaceholder: 4.9,
  reviewCountPlaceholder: 120,
} as const;

export const SITE_URL = "https://www.concreteprosofnashville.com";

// Site-wide named process — referenced consistently across home, service, area,
// and combination pages. Individual services may extend/annotate this, but the
// four-step spine stays the same everywhere for brand consistency.
export const PROCESS_STEPS = [
  {
    step: 1,
    name: "Site Visit",
    summary:
      "We walk the site with you in person — not a stock photo estimate. We check grade, drainage, soil condition, access for equipment, and any existing concrete that needs to come out.",
  },
  {
    step: 2,
    name: "Written Estimate",
    summary:
      "You get a clear, itemized estimate within days: material, labor, excavation, forming, and finish options spelled out — no vague lump-sum guessing and no pressure to sign on the spot.",
  },
  {
    step: 3,
    name: "Pour Day",
    summary:
      "We form, reinforce, and pour on the schedule we agreed to, using mix designs suited to Middle Tennessee's clay soil and freeze-thaw swings, with a crew lead on site from start to finish.",
  },
  {
    step: 4,
    name: "Finish & Walkthrough",
    summary:
      "Once the slab is cured enough to inspect, we walk it with you, point out control joints and drainage details, and make sure you know how to care for and seal your new concrete.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "Family-Owned, Not a Franchise",
    detail:
      "Concrete Pros of Nashville is locally operated and family-run. There's no call center routing you to a subcontractor three counties away — the person who quotes your job is accountable for it.",
  },
  {
    title: "Licensed & Insured",
    detail:
      "We carry the licensing and insurance Tennessee requires for concrete and general contracting work, and we're happy to provide documentation before you sign anything.",
  },
  {
    title: "Built for Middle Tennessee Conditions",
    detail:
      "Nashville-area soil is heavy clay that expands and contracts with moisture, and our winters bring enough freeze-thaw cycling to stress a poorly built slab. We design mixes, joint spacing, and base prep around those realities instead of using a one-size-fits-all approach.",
  },
  {
    title: "Straight Answers on Timeline and Cost",
    detail:
      "You'll know what your project costs and how long it will take before we break ground — including realistic cure and load times, not just pour dates.",
  },
] as const;

export const NEARBY_COUNT_FOR_CROSSLINKS = 3;
