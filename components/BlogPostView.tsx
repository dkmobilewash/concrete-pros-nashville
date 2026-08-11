import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import { getAreaBySlug } from "@/data/areas";
import type { Service, Area } from "@/lib/types";

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const relatedServices = post.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
  const relatedAreas = (post.relatedAreas || [])
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is Area => Boolean(a));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.question, path: `/blog/${post.slug}/` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), articleSchema(post)]} />
      <Breadcrumbs items={breadcrumbItems} />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">{post.category}</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-concrete-900 leading-tight mb-4">
          {post.question}
        </h1>
        <p className="text-sm text-concrete-500 mb-8">
          Published {formatDate(post.publishedDate)}
          {post.updatedDate && post.updatedDate !== post.publishedDate
            ? ` · Updated ${formatDate(post.updatedDate)}`
            : ""}{" "}
          · Concrete Pros of Nashville
        </p>

        <div className="rounded-lg border-l-4 border-brand-600 bg-brand-50 p-5 mb-10">
          <p className="text-concrete-800 font-medium">{post.quickAnswer}</p>
        </div>

        <div className="space-y-8 text-concrete-700">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-heading text-2xl font-bold text-concrete-900 mb-3">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-3">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  {section.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {(relatedServices.length > 0 || relatedAreas.length > 0) && (
          <div className="mt-12 pt-8 border-t border-concrete-200">
            <h2 className="font-heading text-lg font-bold text-concrete-900 mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="rounded-md border border-concrete-300 px-4 py-2 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
              {relatedAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}/`}
                  className="rounded-md border border-concrete-300 px-4 py-2 text-sm font-semibold text-concrete-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
                >
                  {a.name}, TN
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <CTASection
        headline="Ready to Get a Real Number for Your Project?"
        body="General ranges are a starting point — a written estimate after a site visit is the only way to know what your project actually costs. Request a free estimate and we'll walk your property in person."
      />
    </>
  );
}
