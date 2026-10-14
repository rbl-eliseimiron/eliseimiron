import Link from "next/link";
import { sectionList } from "@/lib/sections";

/** The three-panel Ride/Drive/Code chooser shown on "/" when no single section is active. */
export function SectionChooser() {
  return (
    <main className="flex min-h-dvh flex-col md:flex-row">
      {sectionList.map((section) => (
        <Link
          key={section.slug}
          href={`/${section.slug}`}
          data-section={section.slug}
          className="group relative flex min-h-[33dvh] flex-1 items-center justify-center overflow-hidden border-b border-border last:border-b-0 md:min-h-dvh md:border-b-0 md:border-r md:last:border-r-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/15 to-background transition-transform duration-700 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-background/10 transition-colors group-hover:bg-background/0" />

          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {section.name}
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {section.heroSubtitle}
            </h2>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Descoperă →
            </span>
          </div>
        </Link>
      ))}
    </main>
  );
}
