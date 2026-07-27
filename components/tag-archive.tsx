import { Container } from "./container";
import { BlogCard } from "./blog-card";
import type { PostMeta, SectionSlug } from "@/lib/types";

export function TagArchive({
  section,
  tag,
  posts,
}: {
  section: SectionSlug;
  tag: string;
  posts: PostMeta[];
}) {
  return (
    <Container className="py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">Tag</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">#{tag}</h1>
      <p className="mt-2 text-muted-foreground">
        {posts.length} {posts.length === 1 ? "articol" : "articole"} cu acest tag.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
            section={section}
            href={`/${section}/blog/${post.slug}`}
          />
        ))}
      </div>
    </Container>
  );
}
