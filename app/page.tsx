import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionChooser } from "@/components/section-chooser";
import { SectionShell } from "@/components/section-shell";
import { sections } from "@/lib/sections";
import { activeSection } from "@/lib/site-config";

export const metadata: Metadata = activeSection
  ? {
      title: sections[activeSection].heroTitle,
      description: sections[activeSection].description,
    }
  : {
      description:
        "Trei pasiuni, trei lumi: mountain bike, mașini și programare — alege pe unde intri.",
    };

export default function Home() {
  if (activeSection) {
    const section = sections[activeSection];
    return (
      <SectionShell section={section}>
        <Hero section={section} />
      </SectionShell>
    );
  }

  return <SectionChooser />;
}
