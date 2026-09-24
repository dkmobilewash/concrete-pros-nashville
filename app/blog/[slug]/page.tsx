import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { BlogPostView } from "@/components/BlogPostView";
import { socialMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}/`;
  return {
    title: post.question,
    description: post.metaDescription,
    alternates: { canonical: path },
    ...socialMeta(post.question, post.metaDescription, path, {
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    }),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostView post={post} />;
}
