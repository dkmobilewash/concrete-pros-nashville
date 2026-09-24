import type { Metadata } from "next";
import { COMPANY, SITE_URL } from "@/lib/constants";

/**
 * Every route sets its own unique title/description via `metadata` or
 * `generateMetadata`, but Next.js does NOT merge a page's `openGraph`/
 * `twitter` object with the parent's — setting either key at all replaces
 * the whole object wholesale (see Next's metadata "Merging" docs). Without
 * this helper, every page that only set title/description here would drop
 * siteName/type/locale inherited from the root layout, and every page
 * would show the same generic social-card title. Call this alongside
 * title/description on every page instead of hand-rolling openGraph/twitter.
 */
export function socialMeta(
  title: string,
  description: string,
  path: string,
  article?: { publishedTime: string; modifiedTime?: string }
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: article
      ? {
          type: "article",
          title,
          description,
          url: `${SITE_URL}${path}`,
          siteName: COMPANY.name,
          locale: "en_US",
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
        }
      : {
          type: "website",
          title,
          description,
          url: `${SITE_URL}${path}`,
          siteName: COMPANY.name,
          locale: "en_US",
        },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * No route on this site currently needs to be excluded from indexing, so
 * nothing spreads this in today — it exists so a future page (a staging
 * page, an internal tool, a duplicate-content variant) has a one-line,
 * already-correct way to opt out rather than someone hand-rolling the
 * `robots` shape from scratch. Usage: `metadata = { ...NOINDEX, title, ... }`.
 */
export const NOINDEX: Pick<Metadata, "robots"> = {
  robots: { index: false, follow: false },
};
