import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blog";
import { COMPANY } from "@/lib/constants";
import { socialMeta } from "@/lib/seo";

const TITLE = "Concrete Blog | Nashville Concrete Answers";
const DESCRIPTION =
  "Straight answers to the concrete questions Nashville homeowners actually search for — pricing, materials, hiring a contractor, and how long concrete really lasts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/" },
  ...socialMeta(`${TITLE} | ${COMPANY.name}`, DESCRIPTION, "/blog/"),
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-concrete-900 mb-4">
          Concrete Answers
        </h1>
        <p className="text-concrete-600">
          Straight, specific answers to the questions Nashville-area homeowners actually ask about concrete —
          pricing, materials, hiring, and how long it really lasts.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group rounded-lg border border-concrete-200 bg-white p-6 hover:border-brand-400 hover:shadow-md transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">{post.category}</p>
              <h2 className="font-heading text-xl font-bold text-concrete-900 group-hover:text-brand-700 transition-colors">
                {post.question}
              </h2>
              <p className="mt-2 text-sm text-concrete-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        headline="Have a Question That's Not Here?"
        body="Ask us directly — we'll give you a straight answer, and a free estimate if you're ready for one."
      />
    </>
  );
}
