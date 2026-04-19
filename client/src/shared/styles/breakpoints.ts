/**
 * Single source of truth for viewport breakpoint **pixel literals** and
 * `min-width` / `max-width` media query strings. Consumers must import helpers
 * from this module only—no raw `@media (…px)` elsewhere.
 */
export const breakpoints = {
  tablet: 768,
  laptop: 1024,
  wide: 1440,
} as const;

/** max-width for “below” each tier (mobile-first exclusive upper bound). */
const below = {
  tablet: breakpoints.tablet - 1,
  laptop: breakpoints.laptop - 1,
  wide: breakpoints.wide - 1,
} as const;

export const up = {
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  laptop: `@media (min-width: ${breakpoints.laptop}px)`,
  wide: `@media (min-width: ${breakpoints.wide}px)`,
} as const;

export const down = {
  tablet: `@media (max-width: ${below.tablet}px)`,
  laptop: `@media (max-width: ${below.laptop}px)`,
  wide: `@media (max-width: ${below.wide}px)`,
} as const;

/** Non-viewport media — use instead of inline `prefers-reduced-motion` blocks. */
export const media = {
  motionReduce: `@media (prefers-reduced-motion: reduce)`,
  motionOk: `@media (prefers-reduced-motion: no-preference)`,
} as const;

/**
 * Responsive `sizes` for `<img>` — only references `breakpoints` / `below`.
 * Legacy cutoffs merged into tablet / laptop / wide tiers.
 */
export const imageSizes = {
  homeFeaturedProductCard: `(max-width: ${below.tablet}px) 88vw, (max-width: ${below.laptop}px) 42vw, 28vw`,
  interactiveProductCell: `(max-width: ${below.tablet}px) 50vw, (max-width: ${below.wide}px) 33vw, 25vw`,
} as const;
