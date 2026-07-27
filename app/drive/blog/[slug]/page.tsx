import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { TagArchive } from "@/components/tag-archive";
import {
  getAllPostSlugs,
  getAllTagParams,
  getPostBySlug,
  getPostsByTag,
  parseTagParam,
  tagHref,
} from "@/lib/mdx";

export function generateStaticParams() {
  const postSlugs = getAllPostSlugs("drive");
  const tagSlugs = getAllTagParams("drive");
  return [...postSlugs, ...tagSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const tag = parseTagParam(slug);
  if (tag) return { title: `#${tag}` };

  const post = await getPostBySlug("drive", slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.excerpt };
}

export default async function DriveBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tag = parseTagParam(slug);
  if (tag) {
    const posts = getPostsByTag("drive", tag);
    if (posts.length === 0) notFound();
    return <TagArchive section="drive" tag={tag} posts={posts} />;
  }

  const post = await getPostBySlug("drive", slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <Container className="py-16">
      <article>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          {meta.date && <time dateTime={meta.date}>{meta.date}</time>}
          {meta.readingTime && <span>· {meta.readingTime}</span>}
          {meta.category && <span className="text-accent">{meta.category}</span>}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{meta.title}</h1>

        {meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.tags.map((postTag) => (
              <Link
                key={postTag}
                href={tagHref("drive", postTag)}
                className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent transition-colors hover:bg-accent/20"
              >
                #{postTag}
              </Link>
            ))}
          </div>
        )}

        <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:tracking-tight prose-a:text-accent">
          {content}
        </div>
      </article>
    </Container>
  );
}
