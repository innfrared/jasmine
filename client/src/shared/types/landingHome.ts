import type { ListingProduct } from '@/entities/catalog/listingProduct';
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
  title: string;
  description?: string;
  categories: readonly [
    CuratedCategoryEntry,
    CuratedCategoryEntry,
    CuratedCategoryEntry,
  ];
};

export type EditorialManifestoConfig = {
  headline: string;
  line?: string;
  image: EditorialImage;
  ctaLabel?: string;
  ctaHref?: string;
};

export type EditorialManifestoProps = EditorialManifestoConfig & {
  products: ListingProduct[];
};

export type EditorialCraftProps = {
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
  editorialManifesto: EditorialManifestoConfig;
  editorialCraft: EditorialCraftProps;
  mixedCommerce: MixedCommerceProps;
  editorialClosing: EditorialClosingProps;
};
