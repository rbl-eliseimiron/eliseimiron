import Link from "next/link";
import { PlaceholderCover } from "./placeholder-cover";
import type { PostMeta } from "@/lib/types";

export function BlogCard({ href, post }: { href: string; post: PostMeta }) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent"
    >
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
        {post.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" });
}
