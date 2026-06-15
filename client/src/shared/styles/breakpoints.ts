export const breakpoints = {
  tablet: 768,
  laptop: 1024,
  wide: 1440,
} as const;

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

export const media = {
  motionReduce: `@media (prefers-reduced-motion: reduce)`,
  motionOk: `@media (prefers-reduced-motion: no-preference)`,
} as const;

export const imageSizes = {
  interactiveProductCell: `(max-width: ${below.tablet}px) 50vw, (max-width: ${below.wide}px) 33vw, 25vw`,
} as const;
