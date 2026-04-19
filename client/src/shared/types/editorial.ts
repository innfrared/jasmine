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
