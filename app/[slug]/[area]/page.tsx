import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { areas, getAreaBySlug } from "@/data/areas";
import { CombinationPageView } from "@/components/CombinationPageView";

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

  return {
    title: `${service.name} in ${area.name}, TN`,
    description: `${service.name} in ${area.name}, TN — ${service.shortDescription.toLowerCase()} Family-owned, licensed & insured. Free written estimates.`,
    alternates: { canonical: `/${service.slug}/${area.slug}/` },
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
