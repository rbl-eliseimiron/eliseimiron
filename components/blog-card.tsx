import Link from "next/link";
import { PlaceholderCover } from "./placeholder-cover";
import { tagHref } from "@/lib/mdx";
import type { PostMeta, SectionSlug } from "@/lib/types";

export function BlogCard({
  href,
  post,
  section,
}: {
  href: string;
  post: PostMeta;
  section: SectionSlug;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent">
      <Link href={href} className="flex flex-1 flex-col">
        <PlaceholderCover label={post.category || post.title} className="aspect-video w-full" />
        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
            {post.readingTime && <span>· {post.readingTime}</span>}
            {post.category && <span className="text-accent">{post.category}</span>}
          </div>
          <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          {post.excerpt && <p className="text-sm text-muted-foreground">{post.excerpt}</p>}
        </div>
      </Link>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 px-5 pb-5">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={tagHref(section, tag)}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent transition-colors hover:bg-accent/20"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" });
}
