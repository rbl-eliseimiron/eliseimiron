import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import type { SectionConfig } from "@/lib/sections";

export function SectionShell({
  section,
  children,
}: {
  section: SectionConfig;
  children: ReactNode;
}) {
  return (
    <div data-section={section.slug} className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer section={section} />
    </div>
  );
}
