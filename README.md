# Elisei Miron — Ride · Drive · Code

Personal portfolio site covering three independent passions — mountain biking (**Ride**),
cars (**Drive**), and programming (**Code**). Each domain has its own landing page, blog
(MDX-based), gear/equipment showcase, and (for Ride/Drive) a routes showcase. The whole
site is in Romanian and built to be dark-mode friendly.

## Scope

- **Homepage** (`/`): full-screen 3-way split linking into each domain.
- **Domain landing pages** (`/ride`, `/drive`, `/code`): hero + intro + links to sub-pages.
- **Blog** (`/{domain}/blog`): MDX posts with frontmatter metadata (date, reading time,
  category, tags). Tags are clickable and route to a per-domain tag archive
  (`/{domain}/blog/tag=<tag>`).
- **Gear** (`/{domain}/gear`): equipment/hardware cards, contextually labeled per domain
  (Echipament / Garaj / Setup).
- **Routes** (`/ride/routes`, `/drive/routes`): trail/road showcase with distance, elevation,
  duration, difficulty. Not applicable to Code.
- **Global nav**: identical across all three domains, each domain's top-level item colored
  in its own brand accent, with a hover/focus dropdown to its sub-pages.
- **Footer**: per-domain contact dialog, social links, and an optional sponsor logo carousel
  (toggled per domain).
- Content (blog posts, gear, routes, sponsors) is intentionally placeholder/example data —
  see [`content/README.md`](content/README.md) for how to add real content.

### Brand colors

| Domain | Accent          |
| ------ | --------------- |
| Ride   | Fresh green     |
| Drive  | Celestial teal  |
| Code   | Magenta         |

Colors are defined once as CSS variables in `app/globals.css` and scoped via a
`data-section="ride|drive|code"` attribute, so any shared component automatically
picks up the right accent without knowing which domain it's rendering in.

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.ts`)
- **next-mdx-remote/rsc** + **gray-matter** + **reading-time** for MDX blog content
- **next-themes** for dark mode (class-based, system-aware)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Project structure

```
app/
  layout.tsx              Root layout (fonts, ThemeProvider, metadata)
  page.tsx                Homepage — 3-way split (ride/drive/code)
  globals.css             Design tokens: accent colors, dark mode, marquee animation
  api/contact/route.ts    Contact form submission endpoint (stub — logs payload)

  ride/                   Same structure repeated per domain: drive/, code/
    layout.tsx            Wraps pages in <SectionShell> for this domain
    page.tsx               Landing page ("Prezentare") — renders <Hero>
    blog/
      page.tsx             Blog listing (grid of <BlogCard>)
      [slug]/page.tsx       Post page OR tag archive (see content/README.md)
    gear/page.tsx          Gear/equipment grid (<GearCard>)
    routes/page.tsx        Routes grid (<RouteCard>) — ride & drive only

components/
  header.tsx              Global nav shown on every domain page (not the homepage)
  footer.tsx               Per-domain footer: sponsors, socials, contact
  section-shell.tsx         Wraps a domain's pages: sets data-section, renders Header+Footer
  contact-dialog.tsx        Contact form modal (native <dialog>), posts to /api/contact
  sponsor-carousel.tsx      Auto-scrolling sponsor logos, pauses on hover
  hero.tsx / blog-card.tsx / gear-card.tsx / route-card.tsx / tag-archive.tsx
  placeholder-cover.tsx     Gradient stand-in used wherever a real photo/logo isn't set yet
  theme-toggle.tsx / theme-provider.tsx
  icons/social.tsx          Instagram/Facebook/YouTube/LinkedIn icons (lucide-react dropped these)

lib/
  sections.ts              Per-domain config: nav labels, social links, sponsor toggle
  types.ts                  Shared TypeScript types (SectionSlug, PostMeta, GearItem, ...)
  mdx.ts                    Blog post + tag reading/parsing (fs + gray-matter + compileMDX)
  public-assets.ts           Checks whether a /public file exists (drives the placeholder fallback)
  data/
    gear.ts                 Placeholder gear items per domain
    routes.ts                Placeholder route items (ride/drive only)
    sponsors.ts               Placeholder sponsor entries per domain

content/
  ride/blog/*.mdx           MDX blog posts, one file per post
  drive/blog/*.mdx
  code/blog/*.mdx
  README.md                 Content-authoring guide — see this for adding posts/gear/routes/sponsors
```

## Notes for the next phase

- Real photography isn't in yet — `PlaceholderCover` renders a gradient + label everywhere an
  image would go. Swapping in real files is designed to be a drop-in change (see
  `content/README.md`).
- Blog content is structured to eventually be migrated from a WordPress XML export into the
  `content/{domain}/blog/*.mdx` format.
- Social link `href`s in `lib/sections.ts` and sponsor `href`s in `lib/data/sponsors.ts` are
  currently `"#"` placeholders — replace with real URLs when available.
