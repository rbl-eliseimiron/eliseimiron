import type { SectionSlug } from "./types";

/**
 * MVP mode: when set, the homepage ("/") renders this section's content
 * directly instead of the three-panel Ride/Drive/Code chooser, and the main
 * header nav becomes that section's sub-nav (Blog/Gear/Routes...) instead of
 * the Ride/Drive/Code switcher.
 *
 * Set to `null` to restore the full multi-section homepage and nav.
 */
export const activeSection: SectionSlug | null = "ride";
