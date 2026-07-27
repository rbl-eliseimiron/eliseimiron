import { PlaceholderCover } from "./placeholder-cover";
import type { RouteItem } from "@/lib/types";

export function RouteCard({ route }: { route: RouteItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <PlaceholderCover label={route.name} className="aspect-video w-full" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{route.name}</h3>
          <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium capitalize text-accent">
            {route.difficulty}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{route.description}</p>
        <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-3 text-center text-xs">
          <div>
            <dt className="text-muted-foreground">Distanță</dt>
            <dd className="font-semibold">{route.distanceKm} km</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Diferență nivel</dt>
            <dd className="font-semibold">
              {route.elevationM !== undefined ? `${route.elevationM} m` : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Durată</dt>
            <dd className="font-semibold">{route.durationLabel}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
