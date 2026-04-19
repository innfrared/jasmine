import type { EditorialImage } from './editorial';

export type EditorialClosingMode = 'statement' | 'triptych' | 'craft';

export type CuratedCategoryEntry = {
  id: string;
  title: string;
  descriptor?: string;
  href: string;
  image: EditorialImage;
};

export type CuratedEntryProps = {
  dominant: CuratedCategoryEntry;
  /** 2–3 secondary entries; must not compete visually with dominant (layout handles hierarchy). */
  supporting: CuratedCategoryEntry[];
};

export type EditorialManifestoProps = {
  kicker?: string;
  headline: string;
  line?: string;
  layout: 'centered' | 'offset';
  image: EditorialImage;
  ctaLabel?: string;
  ctaHref?: string;
};

export type EditorialCraftProps = {
  /** 1–3 stills; crossfade only when length > 1 */
  slides: EditorialImage[];
};

export type MixedCommerceSignature = {
  title: string;
  subtitle?: string;
  href: string;
  image: EditorialImage;
};

export type MixedCommerceSupport = {
  title: string;
  href: string;
  image: EditorialImage;
};

export type MixedCommerceProps = {
  signature: MixedCommerceSignature;
  supporting: [MixedCommerceSupport, MixedCommerceSupport];
};

export type EditorialClosingStatement = {
  mode: 'statement';
  headline: string;
  line?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type EditorialClosingTriptych = {
  mode: 'triptych';
  panels: [EditorialImage, EditorialImage, EditorialImage];
  eyebrow: string;
  headline: string;
  supporting1: string;
  supporting2: string;
  note: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type EditorialClosingCraft = {
  mode: 'craft';
  headline: string;
  line?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type EditorialClosingProps =
  | EditorialClosingStatement
  | EditorialClosingTriptych
  | EditorialClosingCraft;

export type LandingHomeContent = {
  curatedEntry: CuratedEntryProps;
  editorialManifesto: EditorialManifestoProps;
  editorialCraft: EditorialCraftProps;
  mixedCommerce: MixedCommerceProps;
  editorialClosing: EditorialClosingProps;
};
