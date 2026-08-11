import { COMPANY, SITE_URL } from "@/lib/constants";
import type { Area, FAQ, Service } from "@/lib/types";
import { areas } from "@/data/areas";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY.name,
    image: `${SITE_URL}/images/concrete-pros-of-nashville-logo.png`,
    logo: `${SITE_URL}/images/concrete-pros-of-nashville-logo.png`,
    url: SITE_URL,
    telephone: COMPANY.phone,
    priceRange: COMPANY.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    openingHoursSpecification: COMPANY.hours
      .filter((h) => !("closed" in h) || !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "open" in h ? h.open : undefined,
        closes: "close" in h ? h.close : undefined,
      })),
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: a.county,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.reviewRatingPlaceholder,
      reviewCount: COMPANY.reviewCountPlaceholder,
    },
  };
}

export function serviceSchema(service: Service, area?: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: area ? `${service.name} in ${area.name}, TN` : service.name,
    description: service.shortDescription,
    provider: {
      "@type": "GeneralContractor",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.streetAddress,
        addressLocality: COMPANY.city,
        addressRegion: COMPANY.state,
        postalCode: COMPANY.zip,
        addressCountry: "US",
      },
    },
    areaServed: area
      ? { "@type": "City", name: area.name }
      : areas.map((a) => ({ "@type": "City", name: a.name })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string; // relative path, e.g. "/" or "/concrete-driveways/"
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
