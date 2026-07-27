import Link from "next/link";
import { PlaceholderCover } from "./placeholder-cover";
import type { SectionConfig } from "@/lib/sections";

export function Hero({ section }: { section: SectionConfig }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <PlaceholderCover label={section.heroImage} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {section.name}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          {section.heroSubtitle}
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">{section.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {section.nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-accent/40 px-5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
