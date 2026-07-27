import type { Metadata } from "next";
import { Container } from "@/components/container";
import { BlogCard } from "@/components/blog-card";
import { getAllPostsMeta } from "@/lib/mdx";
import { sections } from "@/lib/sections";

export const metadata: Metadata = { title: "Blog" };

export default function CodeBlogPage() {
  const section = sections.code;
  const posts = getAllPostsMeta("code");

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blog {section.name}</h1>
      <p className="mt-2 text-muted-foreground">{section.description}</p>

      {posts.length === 0 ? (
        <p className="mt-12 text-sm text-muted-foreground">
          Nu există articole publicate încă.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} section="code" href={`/code/blog/${post.slug}`} />
          ))}
        </div>
      )}
    </Container>
  );
}
