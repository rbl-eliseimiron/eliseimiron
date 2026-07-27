# Content guide

This folder holds MDX blog posts. Gear, routes, and sponsor data live in `lib/data/*.ts`
instead (plain TypeScript arrays) since they're structured records rather than long-form
writing — see below for how to edit those too.

Everything here is scoped **per domain** — `ride`, `drive`, `code` — and nothing is shared
across domains.

## Adding a blog post

1. Create a new `.mdx` file under `content/{domain}/blog/`. The filename (without `.mdx`)
   becomes the URL slug, e.g. `content/ride/blog/traseu-nou.mdx` → `/ride/blog/traseu-nou`.
   Use lowercase, hyphen-separated filenames.
2. Add frontmatter at the top of the file:

   ```md
   ---
   title: "Titlul articolului"
   date: "2026-07-27"
   excerpt: "O propoziție scurtă afișată în listă și în preview-uri."
   category: "Cursă"
   tags: ["enduro", "cursa"]
   ---

   Conținutul articolului, în Markdown/MDX...
   ```

   All frontmatter fields are optional but recommended — `getAllPostsMeta`/`getPostBySlug`
   in `lib/mdx.ts` fall back to the slug or an empty value if a field is missing.
   - `date` — use `YYYY-MM-DD` so posts sort correctly (newest first).
   - `category` — one label, shown next to the date on the card and post page.
   - `tags` — array of short lowercase strings. Each becomes a clickable pill linking to
     `/{domain}/blog/tag=<tag>` (a tag archive listing every post with that tag). Tag
     archive pages are generated automatically — no extra step needed beyond adding the tag
     here.
   - `readingTime` is **not** set manually — it's computed automatically from the content.
3. Write the body in Markdown. GitHub-flavored Markdown is supported (tables, strikethrough,
   task lists) via `remark-gfm`. You can also use JSX/MDX components inside the body if
   needed later.
4. That's it — no registration step. The post appears in `/{domain}/blog` automatically
   (sorted by `date`, newest first) and is statically generated at build time.

## Adding gear/equipment items

Edit `lib/data/gear.ts` and add an entry to the relevant domain's array:

```ts
{
  id: "unique-slug",
  name: "Numele produsului",
  category: "Categorie scurtă",
  description: "Descriere scurtă.",
  image: "/images/{domain}/gear/your-file.jpg", // not wired to a real file yet, see note below
  link: "https://...", // optional — shows a "Vezi produsul →" link if set
}
```

> **Note:** unlike sponsor logos (below), gear/route images are currently **not** wired up to
> real files — `GearCard`/`RouteCard` always render the gradient placeholder regardless of
> what `image` points to. The field exists to document the intended path for when real photos
> and the corresponding image-rendering code are added.

## Adding routes/trails (Ride & Drive only)

Edit `lib/data/routes.ts` and add an entry under `ride` or `drive` (Code has no routes
page):

```ts
{
  id: "unique-slug",
  name: "Numele traseului",
  description: "Descriere scurtă.",
  distanceKm: 24,
  elevationM: 850, // optional
  durationLabel: "~3h",
  difficulty: "ușor" | "mediu" | "dificil",
  image: "/images/{domain}/routes/your-file.jpg", // same caveat as gear, see above
}
```

## Adding sponsors

Edit `lib/data/sponsors.ts` and add an entry to the relevant domain's array:

```ts
{
  id: "unique-slug",
  name: "Numele sponsorului",     // used as alt text and as the fallback label
  logo: "/images/sponsors/{domain}/your-file.png",
  href: "https://sponsor-website.example.com",
}
```

Then drop the actual logo file (PNG or JPG) at
`public/images/sponsors/{domain}/your-file.png` — matching exactly the `logo` path above.

This one **is** wired up: `SponsorCarousel` checks at request time whether that file exists.
If it does, it renders the real logo (grayscale, full color on hover); if not, it falls back
to a placeholder box with the sponsor's name. So you can add the data entry first and drop
the image in later — no code changes needed either way.

A domain's sponsor strip only shows up if `showSponsors: true` for that domain in
`lib/sections.ts`, and only if its `sponsorsBySection` array isn't empty.

## Section-level copy (nav labels, hero text, socials)

Everything else that's domain-specific but not "content" in the MDX sense — hero title/
subtitle, nav labels, social links, `showSponsors` toggle — lives in `lib/sections.ts`. Social
`href`s currently default to `"#"`; replace with real profile URLs when available.
