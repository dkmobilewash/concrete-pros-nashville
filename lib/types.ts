export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  question: string; // doubles as the H1/title — matched to the search query it targets
  metaDescription: string;
  excerpt: string;
  publishedDate: string; // ISO date, e.g. "2026-08-11"
  updatedDate?: string;
  category: string;
  quickAnswer: string; // direct 1-3 sentence answer, shown first for snippet capture
  sections: BlogSection[];
  relatedServices: string[]; // service slugs
  relatedAreas?: string[]; // area slugs
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string[]; // paragraphs
  processNote?: string; // optional note appended to the site-wide process for this service
  commonProblems: string[];
  materials: string[];
  faqs: FAQ[];
  relatedServices: string[]; // slugs
  icon: string; // key used to pick an icon in <ServiceIcon />
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  county: string;
  isCountySeat: boolean;
  permitAuthority: string;
  permitAuthorityNote: string;
  characterSnippet: string; // short (~8-15 word) fusable phrase describing the area's character
  neighborhoodCharacter: string[]; // paragraphs
  soilAndClimateNotes: string;
  distanceNote: string;
  localFaqs: FAQ[];
  nearbyAreas: string[]; // slugs, for cross-linking
  landmarks: string[];
}
