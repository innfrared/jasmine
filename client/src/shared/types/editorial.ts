export type EditorialImageSizeVariant = 'tall' | 'short' | 'thumbnail';

export type EditorialImage = {
  src: string;
  alt: string;
  focalPointDesktop: string;
  focalPointMobile: string;
  aspectRatio?: string;
  minHeight?: string;
  sizeVariant?: EditorialImageSizeVariant;
};

export type HeroEditorialProps = {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: EditorialImage;
};

export type SplitEditorialProps = {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: EditorialImage;
  supportingImages?: EditorialImage[];
};

export type GridEditorialItem = {
  id: string;
  title: string;
  href: string;
  image: EditorialImage;
};

export type GridEditorialProps = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  items: GridEditorialItem[];
};
