import Image from "next/image";
import { PlaceholderCover } from "./placeholder-cover";
import { sponsorsBySection } from "@/lib/data/sponsors";
import { publicFileExists } from "@/lib/public-assets";
import type { SectionSlug } from "@/lib/types";

export function SponsorCarousel({ section }: { section: SectionSlug }) {
  const sponsors = sponsorsBySection[section];
  if (sponsors.length === 0) return null;

  const track = [...sponsors, ...sponsors];

  return (
    <div className="overflow-hidden">
      <p className="mx-auto mb-4 w-full max-w-6xl px-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground sm:px-6 lg:px-8">
        Susținut de
      </p>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap hover:[animation-play-state:paused]">
        {track.map((sponsor, index) => (
          <a
            key={`${sponsor.id}-${index}`}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sponsor.name}
            className="group relative flex h-12 w-32 shrink-0 items-center justify-center"
          >
            {publicFileExists(sponsor.logo) ? (
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                sizes="128px"
                className="object-contain grayscale transition-all duration-200 group-hover:grayscale-0"
              />
            ) : (
              <PlaceholderCover
                label={sponsor.name}
                className="h-full w-full rounded-md grayscale transition-all duration-200 group-hover:grayscale-0"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
