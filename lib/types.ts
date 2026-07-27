import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons/social";

export type SectionSlug = "ride" | "drive" | "code";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
}

export interface GearItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

export interface RouteItem {
  id: string;
  name: string;
  description: string;
  distanceKm: number;
  elevationM?: number;
  durationLabel: string;
  difficulty: "ușor" | "mediu" | "dificil";
  image: string;
  mapUrl?: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  /** Path under /public, e.g. "/images/sponsors/ride/example.png". */
  logo: string;
  href: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
}
