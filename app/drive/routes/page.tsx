import type { Metadata } from "next";
import { Container } from "@/components/container";
import { RouteCard } from "@/components/route-card";
import { routesBySection } from "@/lib/data/routes";
import { sections } from "@/lib/sections";

export const metadata: Metadata = { title: "Rute" };

export default function DriveRoutesPage() {
  const section = sections.drive;
  const items = routesBySection.drive ?? [];

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight">{section.routesLabel}</h1>
      <p className="mt-2 text-muted-foreground">
        Rute parcurse sau planificate, cu distanță și durată estimată.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </Container>
  );
}
