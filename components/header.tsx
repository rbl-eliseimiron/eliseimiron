"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { sectionList } from "@/lib/sections";
import type { SectionSlug } from "@/lib/types";

const ACCENT: Record<
  SectionSlug,
  { text: string; hoverText: string; softBg: string; border: string }
> = {
  ride: {
    text: "text-ride",
    hoverText: "hover:text-ride",
    softBg: "bg-ride/10",
    border: "border-ride/30",
  },
  drive: {
    text: "text-drive",
    hoverText: "hover:text-drive",
    softBg: "bg-drive/10",
    border: "border-drive/30",
  },
  code: {
    text: "text-code",
    hoverText: "hover:text-code",
    softBg: "bg-code/10",
    border: "border-code/30",
  },
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <span className="text-lg font-semibold tracking-tight">Elisei Miron</span>

        <nav className="hidden items-center gap-1 md:flex">
          {sectionList.map((section) => {
            const basePath = `/${section.slug}`;
            const isActive = pathname === basePath || pathname.startsWith(`${basePath}/`);
            const accent = ACCENT[section.slug];
            const subItems = section.nav.filter((item) => item.href !== basePath);

            return (
              <div key={section.slug} className="group relative">
                <Link
                  href={basePath}
                  className={clsx(
                    "flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    accent.text,
                    isActive ? accent.softBg : "opacity-60 hover:opacity-100",
                  )}
                >
                  {section.name}
                </Link>

                {subItems.length > 0 && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div
                      className={clsx(
                        "overflow-hidden rounded-xl border bg-background shadow-lg",
                        accent.border,
                      )}
                    >
                      {subItems.map((item) => {
                        const isSubActive =
                          pathname === item.href || pathname.startsWith(`${item.href}/`);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                              "block px-4 py-2.5 text-sm font-medium transition-colors",
                              isSubActive
                                ? clsx(accent.text, accent.softBg)
                                : clsx("text-foreground/70", accent.hoverText),
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Comută meniul"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 border-t border-border px-4 py-4 md:hidden">
          {sectionList.map((section) => {
            const basePath = `/${section.slug}`;
            const accent = ACCENT[section.slug];
            const subItems = section.nav.filter((item) => item.href !== basePath);

            return (
              <div key={section.slug}>
                <Link
                  href={basePath}
                  onClick={() => setOpen(false)}
                  className={clsx("text-base font-semibold", accent.text)}
                >
                  {section.name}
                </Link>
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {subItems.map((item) => {
                    const isSubActive =
                      pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "rounded-md px-2 py-1.5 text-sm transition-colors",
                          isSubActive
                            ? clsx(accent.text, accent.softBg)
                            : "text-foreground/70 hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}
