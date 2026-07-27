import type { GearItem, SectionSlug } from "../types";

export const gearBySection: Record<SectionSlug, GearItem[]> = {
  ride: [
    {
      id: "cadru-enduro",
      name: "Cadru enduro full-suspension",
      category: "Cadru",
      description: "Placeholder — detalii despre geometrie și cursă vor fi adăugate ulterior.",
      image: "/images/ride/gear/placeholder-1.jpg",
    },
    {
      id: "casca-full-face",
      name: "Cască full-face",
      category: "Protecție",
      description: "Placeholder — link afiliat și specificații vor fi completate ulterior.",
      image: "/images/ride/gear/placeholder-2.jpg",
    },
  ],
  drive: [
    {
      id: "set-anvelope",
      name: "Set anvelope de vară",
      category: "Anvelope",
      description: "Placeholder — detalii despre performanță și link către produs.",
      image: "/images/drive/gear/placeholder-1.jpg",
    },
  ],
  code: [
    {
      id: "laptop-dev",
      name: "Laptop de dezvoltare",
      category: "Hardware",
      description: "Placeholder — specificații și configurație vor fi completate ulterior.",
      image: "/images/code/gear/placeholder-1.jpg",
    },
  ],
};
