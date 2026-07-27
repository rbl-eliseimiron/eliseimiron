import type { SectionSlug } from "@/lib/types";

const PLACEHOLDER_SPONSORS = ["Sponsor A", "Sponsor B", "Sponsor C", "Sponsor D", "Sponsor E"];

export function SponsorCarousel({ section }: { section: SectionSlug }) {
  const track = [...PLACEHOLDER_SPONSORS, ...PLACEHOLDER_SPONSORS];

  return (
    <div className="overflow-hidden">
      <p className="mx-auto mb-4 w-full max-w-6xl px-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground sm:px-6 lg:px-8">
        Susținut de
      </p>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {track.map((name, index) => (
          <span
            key={`${section}-${name}-${index}`}
            className="flex h-10 items-center rounded-md border border-dashed border-border px-4 text-sm font-medium text-muted-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
