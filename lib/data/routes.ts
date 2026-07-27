import type { RouteItem, SectionSlug } from "../types";

export const routesBySection: Partial<Record<SectionSlug, RouteItem[]>> = {
  ride: [
    {
      id: "traseu-exemplu",
      name: "Traseu exemplu — Munții X",
      description: "Placeholder — descriere traseu, poteci și puncte de interes.",
      distanceKm: 24,
      elevationM: 850,
      durationLabel: "~3h",
      difficulty: "dificil",
      image: "/images/ride/routes/placeholder-1.jpg",
    },
  ],
  drive: [
    {
      id: "ruta-exemplu",
      name: "Rută exemplu — Serpentine de munte",
      description: "Placeholder — descriere rută, peisaje și puncte de oprire.",
      distanceKm: 180,
      durationLabel: "~2h30m",
      difficulty: "mediu",
      image: "/images/drive/routes/placeholder-1.jpg",
    },
  ],
};
