import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/social";
import type { NavLink, SectionSlug, SocialLink } from "./types";

export interface SectionConfig {
  slug: SectionSlug;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  heroImage: string;
  gearLabel: string;
  routesLabel?: string;
  nav: NavLink[];
  socials: SocialLink[];
  showSponsors: boolean;
}

export const sections: Record<SectionSlug, SectionConfig> = {
  ride: {
    slug: "ride",
    name: "Ride",
    heroTitle: "Ride",
    heroSubtitle: "Pe două roți, departe de asfalt.",
    description:
      "Trasee montane, tehnică de coborâre și echipamentul cu care ies la drum.",
    heroImage: "/images/ride/hero.jpg",
    gearLabel: "Echipament",
    routesLabel: "Trasee",
    nav: [
      { label: "Prezentare", href: "/ride" },
      { label: "Blog", href: "/ride/blog" },
      { label: "Echipament", href: "/ride/gear" },
      { label: "Trasee", href: "/ride/routes" },
    ],
    socials: [
      { label: "Instagram", href: "#", icon: InstagramIcon },
      { label: "Facebook", href: "#", icon: FacebookIcon },
      { label: "YouTube", href: "#", icon: YoutubeIcon },
    ],
    showSponsors: true,
  },
  drive: {
    slug: "drive",
    name: "Drive",
    heroTitle: "Drive",
    heroSubtitle: "Motor, drum și pasiune pe patru roți.",
    description:
      "Road-trip-uri, mașini care merită povestite și tot ce ține de garaj.",
    heroImage: "/images/drive/hero.jpg",
    gearLabel: "Garaj",
    routesLabel: "Rute",
    nav: [
      { label: "Prezentare", href: "/drive" },
      { label: "Blog", href: "/drive/blog" },
      { label: "Garaj", href: "/drive/gear" },
      { label: "Rute", href: "/drive/routes" },
    ],
    socials: [
      { label: "Instagram", href: "#", icon: InstagramIcon },
      { label: "YouTube", href: "#", icon: YoutubeIcon },
    ],
    showSponsors: true,
  },
  code: {
    slug: "code",
    name: "Code",
    heroTitle: "Code",
    heroSubtitle: "Proiecte, unelte și notițe tehnice.",
    description:
      "Articole tehnice, proiecte personale și setup-ul de dezvoltare.",
    heroImage: "/images/code/hero.jpg",
    gearLabel: "Setup",
    nav: [
      { label: "Prezentare", href: "/code" },
      { label: "Blog", href: "/code/blog" },
      { label: "Setup", href: "/code/gear" },
    ],
    socials: [
      { label: "Instagram", href: "#", icon: InstagramIcon },
      { label: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
    showSponsors: false,
  },
};

export const sectionList = Object.values(sections);

export function isSectionSlug(value: string): value is SectionSlug {
  return value === "ride" || value === "drive" || value === "code";
}
