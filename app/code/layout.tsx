import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SectionShell } from "@/components/section-shell";
import { sections } from "@/lib/sections";

const section = sections.code;

export const metadata: Metadata = {
  title: section.heroTitle,
  description: section.description,
};

export default function CodeLayout({ children }: { children: ReactNode }) {
  return <SectionShell section={section}>{children}</SectionShell>;
}
