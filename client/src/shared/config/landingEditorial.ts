import type { TFunction } from 'i18next';
import type {
  EditorialImage,
  GridEditorialItem,
  GridEditorialProps,
  HeroEditorialProps,
  SplitEditorialProps,
} from '../types/editorial';

type ConfiguredEditorialImage = Omit<EditorialImage, 'alt'> & {
  altKey: string;
};

type LandingEditorialContent = {
  hero: HeroEditorialProps;
  split: SplitEditorialProps;
  grid: GridEditorialProps;
};

type LocalizePath = (path: string) => string;

const LANDING_EDITORIAL_ASSETS: Record<string, ConfiguredEditorialImage> = {
  hero: {
    src: '/assets/model/SAR_0969.jpg',
    altKey: 'landingEditorial.images.hero',
    focalPointDesktop: '58% 22%',
    focalPointMobile: '62% 20%',
    aspectRatio: '4 / 5',
    minHeight: '42rem',
  },
  splitPrimary: {
    src: '/assets/model/split/SAR_0896.jpg',
    altKey: 'landingEditorial.images.splitPrimary',
    focalPointDesktop: '50% 50%',
    focalPointMobile: '50% 50%',
    aspectRatio: '1 / 1',
  },
  splitSecondaryOne: {
    src: '/assets/model/split/secondary/SAR_0151.jpg',
    altKey: 'landingEditorial.images.splitSecondaryOne',
    focalPointDesktop: '50% 22%',
    focalPointMobile: '50% 20%',
    aspectRatio: '6 / 7',
  },
  splitSecondaryTwo: {
    src: '/assets/model/split/secondary/SAR_0157.jpg',
    altKey: 'landingEditorial.images.splitSecondaryTwo',
    focalPointDesktop: '50% 24%',
    focalPointMobile: '50% 22%',
    aspectRatio: '6 / 7',
  },
  splitSecondaryThree: {
    src: '/assets/model/split/secondary/SAR_0185.jpg',
    altKey: 'landingEditorial.images.splitSecondaryThree',
    focalPointDesktop: '50% 18%',
    focalPointMobile: '50% 16%',
    aspectRatio: '6 / 7',
    sizeVariant: 'thumbnail',
  },
  gridCrossbody: {
    src: '/assets/model/split/SAR_0896.jpg',
    altKey: 'landingEditorial.images.gridCrossbody',
    focalPointDesktop: '52% 15%',
    focalPointMobile: '48% 18%',
    sizeVariant: 'tall',
  },
  gridTopHandle: {
    src: '/assets/model/SAR_0969.jpg',
    altKey: 'landingEditorial.images.gridTopHandle',
    focalPointDesktop: '60% 36%',
    focalPointMobile: '58% 28%',
    sizeVariant: 'short',
  },
  gridEvening: {
    src: '/assets/model/SAR_0969.jpg',
    altKey: 'landingEditorial.images.gridEvening',
    focalPointDesktop: '40% 26%',
    focalPointMobile: '42% 22%',
    sizeVariant: 'short',
  },
  gridNew: {
    src: '/assets/model/split/SAR_0896.jpg',
    altKey: 'landingEditorial.images.gridNew',
    focalPointDesktop: '56% 42%',
    focalPointMobile: '54% 36%',
    sizeVariant: 'tall',
  },
};

function resolveEditorialImage(
  image: ConfiguredEditorialImage,
  t: TFunction<'translation'>
): EditorialImage {
  return {
    ...image,
    alt: t(image.altKey),
  };
}

function resolveGridItems(
  t: TFunction<'translation'>,
  getLocalizedPath: LocalizePath
): GridEditorialItem[] {
  return [
    {
      id: 'crossbody',
      title: t('landingEditorial.grid.items.crossbody'),
      href: getLocalizedPath('/bags/crossbody'),
      image: resolveEditorialImage(LANDING_EDITORIAL_ASSETS.gridCrossbody, t),
    },
    {
      id: 'top-handle',
      title: t('landingEditorial.grid.items.topHandle'),
      href: getLocalizedPath('/bags/top-handle'),
      image: resolveEditorialImage(LANDING_EDITORIAL_ASSETS.gridTopHandle, t),
    },
    {
      id: 'evening',
      title: t('landingEditorial.grid.items.evening'),
      href: getLocalizedPath('/bags/evening'),
      image: resolveEditorialImage(LANDING_EDITORIAL_ASSETS.gridEvening, t),
    },
    {
      id: 'new',
      title: t('landingEditorial.grid.items.new'),
      href: getLocalizedPath('/new'),
      image: resolveEditorialImage(LANDING_EDITORIAL_ASSETS.gridNew, t),
    },
  ];
}

export function buildLandingEditorialContent(
  t: TFunction<'translation'>,
  getLocalizedPath: LocalizePath
): LandingEditorialContent {
  return {
    hero: {
      headline: t('landingEditorial.hero.headline'),
      body: t('landingEditorial.hero.body'),
      ctaLabel: t('landingEditorial.hero.cta'),
      ctaHref: getLocalizedPath('/bags'),
      image: resolveEditorialImage(LANDING_EDITORIAL_ASSETS.hero, t),
    },
    split: {
      headline: t('landingEditorial.split.headline'),
      body: t('landingEditorial.split.body'),
      ctaLabel: t('landingEditorial.split.cta'),
      ctaHref: getLocalizedPath('/bags/shoulder'),
      image: resolveEditorialImage(LANDING_EDITORIAL_ASSETS.splitPrimary, t),
      supportingImages: [
        resolveEditorialImage(LANDING_EDITORIAL_ASSETS.splitSecondaryOne, t),
        resolveEditorialImage(LANDING_EDITORIAL_ASSETS.splitSecondaryTwo, t),
        resolveEditorialImage(LANDING_EDITORIAL_ASSETS.splitSecondaryThree, t),
      ],
    },
    grid: {
      heading: t('landingEditorial.grid.heading'),
      ctaLabel: t('landingEditorial.grid.cta'),
      ctaHref: getLocalizedPath('/bags'),
      items: resolveGridItems(t, getLocalizedPath),
    },
  };
}
