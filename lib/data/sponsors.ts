import type { SectionSlug, SponsorItem } from "../types";

export const sponsorsBySection: Record<SectionSlug, SponsorItem[]> = {
  ride: [
    { id: "sponsor-a", name: "Sponsor A", logo: "/images/sponsors/ride/sponsor-a.png", href: "#" },
    { id: "sponsor-b", name: "Sponsor B", logo: "/images/sponsors/ride/sponsor-b.png", href: "#" },
    { id: "sponsor-c", name: "Sponsor C", logo: "/images/sponsors/ride/sponsor-c.png", href: "#" },
  ],
  drive: [
    { id: "sponsor-a", name: "Sponsor A", logo: "/images/sponsors/drive/sponsor-a.png", href: "#" },
    { id: "sponsor-b", name: "Sponsor B", logo: "/images/sponsors/drive/sponsor-b.png", href: "#" },
  ],
  code: [
    { id: "sponsor-a", name: "Sponsor A", logo: "/images/sponsors/code/sponsor-a.png", href: "#" },
    { id: "sponsor-b", name: "Sponsor B", logo: "/images/sponsors/code/sponsor-b.png", href: "#" },
  ],
};
