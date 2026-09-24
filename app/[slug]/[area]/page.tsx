import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { areas, getAreaBySlug } from "@/data/areas";
import { CombinationPageView } from "@/components/CombinationPageView";
import { socialMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { slug: string; area: string }[] = [];
  for (const service of services) {
    for (const area of areas) {
      params.push({ slug: service.slug, area: area.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const service = getServiceBySlug(slug);
  const area = getAreaBySlug(areaSlug);
  if (!service || !area) return {};

  const title = `${service.name} in ${area.name}, TN`;
  const description = `${service.name} in ${area.name}, TN — ${service.shortDescription.toLowerCase()} Family-owned, licensed & insured. Free written estimates.`;
  const path = `/${service.slug}/${area.slug}/`;
  return {
    title,
    description,
    alternates: { canonical: path },
    ...socialMeta(title, description, path),
  };
}

export default async function ServiceAreaCombinationPage({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area: areaSlug } = await params;
  const service = getServiceBySlug(slug);
  const area = getAreaBySlug(areaSlug);

  if (!service || !area) notFound();

  return <CombinationPageView service={service} area={area} />;
}
