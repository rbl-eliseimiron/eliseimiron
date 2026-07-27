import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import type { PostMeta, SectionSlug } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

interface PostFrontmatter {
  title?: string;
  date?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
}

function blogDir(section: SectionSlug) {
  return path.join(CONTENT_DIR, section, "blog");
}

function toMeta(slug: string, data: PostFrontmatter, content: string): PostMeta {
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "",
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
  };
}

export function getAllPostsMeta(section: SectionSlug): PostMeta[] {
  const dir = blogDir(section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return toMeta(slug, data as PostFrontmatter, content);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(section: SectionSlug): string[] {
  const dir = blogDir(section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

const TAG_PARAM_PREFIX = "tag=";

export function tagHref(section: SectionSlug, tag: string): string {
  return `/${section}/blog/${TAG_PARAM_PREFIX}${encodeURIComponent(tag)}`;
}

/**
 * Returns the decoded tag name if `slug` is a tag-archive param (e.g. "tag=munte"), otherwise
 * null. Next.js re-encodes literal "=" in dynamic segments (e.g. "tag%3Dmunte"), so the whole
 * slug is decoded first before checking the prefix.
 */
export function parseTagParam(slug: string): string | null {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // malformed percent-encoding — fall through and compare the raw slug
  }
  if (!decoded.startsWith(TAG_PARAM_PREFIX)) return null;
  return decoded.slice(TAG_PARAM_PREFIX.length);
}

export function getAllTagParams(section: SectionSlug): string[] {
  const tags = new Set<string>();
  for (const post of getAllPostsMeta(section)) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags).map((tag) => `${TAG_PARAM_PREFIX}${encodeURIComponent(tag)}`);
}

export function getPostsByTag(section: SectionSlug, tag: string): PostMeta[] {
  return getAllPostsMeta(section).filter((post) => post.tags.includes(tag));
}

export async function getPostBySlug(section: SectionSlug, slug: string) {
  const filePath = path.join(blogDir(section), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const { content: rendered } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return {
    meta: toMeta(slug, data as PostFrontmatter, content),
    content: rendered,
  };
}
