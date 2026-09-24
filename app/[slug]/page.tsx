import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { areas, getAreaBySlug } from "@/data/areas";
import { ServicePageView } from "@/components/ServicePageView";
import { AreaPageView } from "@/components/AreaPageView";
import { socialMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...areas.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) {
    const title = `${service.name} in Nashville, TN`;
    const description = `${service.shortDescription} Serving Nashville and the surrounding metro. Free written estimates — call (615) 239-1809.`;
    return {
      title,
      description,
      alternates: { canonical: `/${service.slug}/` },
      ...socialMeta(title, description, `/${service.slug}/`),
    };
  }

  const area = getAreaBySlug(slug);
  if (area) {
    const title = `Concrete Contractor in ${area.name}, TN`;
    const description = `Driveways, patios, foundations, repair & more in ${area.name}, TN. Family-owned, licensed & insured. ${area.distanceNote}`;
    return {
      title,
      description,
      alternates: { canonical: `/${area.slug}/` },
      ...socialMeta(title, description, `/${area.slug}/`),
    };
  }

  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (service) return <ServicePageView service={service} />;

  const area = getAreaBySlug(slug);
  if (area) return <AreaPageView area={area} />;

  notFound();
}
