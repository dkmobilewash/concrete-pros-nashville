import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { SITE_URL } from "@/lib/constants";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/contact/",
  "/reviews/",
  "/services/",
  "/service-areas/",
  "/privacy-policy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaEntries: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${SITE_URL}/${a.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const combinationEntries: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const a of areas) {
      combinationEntries.push({
        url: `${SITE_URL}/${s.slug}/${a.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...combinationEntries];
}
