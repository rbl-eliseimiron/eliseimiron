import clsx from "clsx";

/**
 * Stand-in for real photography. Every image slot (hero, gear, routes, blog
 * covers) renders this until actual assets are dropped in — swap for
 * next/image once files exist under /public/images/{section}.
 */
export function PlaceholderCover({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/25 via-accent/10 to-surface",
        className,
      )}
    >
      <span className="px-4 text-center text-sm font-medium text-accent/80">
        {label}
      </span>
    </div>
  );
}
