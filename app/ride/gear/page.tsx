import type { Metadata } from "next";
import { Container } from "@/components/container";
import { GearCard } from "@/components/gear-card";
import { gearBySection } from "@/lib/data/gear";
import { sections } from "@/lib/sections";

export const metadata: Metadata = { title: "Echipament" };

export default function RideGearPage() {
  const section = sections.ride;
  const items = gearBySection.ride;

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight">{section.gearLabel}</h1>
      <p className="mt-2 text-muted-foreground">
        Ce folosesc pe traseu, actualizat pe măsură ce testez lucruri noi.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <GearCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
