import { PlaceholderCover } from "./placeholder-cover";
import type { GearItem } from "@/lib/types";

export function GearCard({ item }: { item: GearItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <PlaceholderCover label={item.name} className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">
          {item.category}
        </span>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-2 text-sm font-medium text-accent hover:underline"
          >
            Vezi produsul →
          </a>
        )}
      </div>
    </article>
  );
}
