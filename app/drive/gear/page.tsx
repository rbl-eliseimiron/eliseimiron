import type { Metadata } from "next";
import { Container } from "@/components/container";
import { GearCard } from "@/components/gear-card";
import { gearBySection } from "@/lib/data/gear";
import { sections } from "@/lib/sections";

export const metadata: Metadata = { title: "Garaj" };

export default function DriveGearPage() {
  const section = sections.drive;
  const items = gearBySection.drive;

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight">{section.gearLabel}</h1>
      <p className="mt-2 text-muted-foreground">
        Mașini, piese și accesorii, actualizate pe măsură ce garajul evoluează.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <GearCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
