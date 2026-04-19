import type { TFunction } from 'i18next';
import type { EditorialImage } from '@/shared/types/editorial';
import type { LandingHomeContent } from '@/shared/types/landingHome';

type ConfiguredEditorialImage = Omit<EditorialImage, 'alt'> & {
  altKey: string;
};

type LocalizePath = (path: string) => string;

const ASSETS = {
  dominantHandbag: {
    src: '/assets/model/SAR_0969.jpg',
    altKey: 'landingHome.curated.dominantImage',
    focalPointDesktop: '52% 38%',
    focalPointMobile: '48% 32%',
    aspectRatio: '4 / 5',
  },
  supportShoulder: {
    src: '/assets/model/split/SAR_0896.jpg',
    altKey: 'landingHome.curated.supportShoulder',
    focalPointDesktop: '48% 24%',
    focalPointMobile: '50% 22%',
    aspectRatio: '1 / 1',
  },
  supportCrossbody: {
    src: '/assets/model/split/secondary/SAR_0151.jpg',
    altKey: 'landingHome.curated.supportCrossbody',
    focalPointDesktop: '50% 28%',
    focalPointMobile: '50% 26%',
    aspectRatio: '6 / 7',
  },
  supportEvening: {
    src: '/assets/model/split/secondary/SAR_0157.jpg',
    altKey: 'landingHome.curated.supportEvening',
    focalPointDesktop: '50% 30%',
    focalPointMobile: '50% 28%',
    aspectRatio: '6 / 7',
  },
  manifesto: {
    src: '/assets/model/split/secondary/SAR_0185.jpg',
    altKey: 'landingHome.manifesto.image',
    focalPointDesktop: '50% 22%',
    focalPointMobile: '52% 20%',
    aspectRatio: '4 / 5',
    minHeight: '28rem',
  },
  craftOne: {
    src: '/assets/model/split/secondary/SAR_0151.jpg',
    altKey: 'landingHome.craft.one',
    focalPointDesktop: '55% 40%',
    focalPointMobile: '52% 38%',
    aspectRatio: '1 / 1',
  },
  craftTwo: {
    src: '/assets/model/split/secondary/SAR_0157.jpg',
    altKey: 'landingHome.craft.two',
    focalPointDesktop: '48% 45%',
    focalPointMobile: '50% 42%',
    aspectRatio: '1 / 1',
  },
  craftThree: {
    src: '/assets/model/split/secondary/SAR_0185.jpg',
    altKey: 'landingHome.craft.three',
    focalPointDesktop: '50% 35%',
    focalPointMobile: '50% 32%',
    aspectRatio: '1 / 1',
  },
  signature: {
    src: '/assets/model/SAR_0969.jpg',
    altKey: 'landingHome.signature.image',
    focalPointDesktop: '58% 32%',
    focalPointMobile: '56% 30%',
    aspectRatio: '4 / 5',
  },
  mixSupportA: {
    src: '/assets/model/split/SAR_0896.jpg',
    altKey: 'landingHome.mixed.supportA',
    focalPointDesktop: '50% 42%',
    focalPointMobile: '48% 40%',
    aspectRatio: '5 / 6',
  },
  mixSupportB: {
    src: '/assets/model/split/secondary/SAR_0151.jpg',
    altKey: 'landingHome.mixed.supportB',
    focalPointDesktop: '52% 36%',
    focalPointMobile: '50% 34%',
    aspectRatio: '5 / 6',
  },
  closingHardware: {
    src: '/assets/editorialClosing/SAR_0187.jpg',
    altKey: 'landingHome.closing.hardware',
    focalPointDesktop: '50% 50%',
    focalPointMobile: '50% 50%',
    aspectRatio: '4 / 5',
  },
  closingLogo: {
    src: '/assets/editorialClosing/SAR_0212.jpg',
    altKey: 'landingHome.closing.logoDetail',
    focalPointDesktop: '50% 50%',
    focalPointMobile: '50% 50%',
    aspectRatio: '4 / 5',
  },
  closingStitch: {
    src: '/assets/editorialClosing/SAR_0216.jpg',
    altKey: 'landingHome.closing.stitching',
    focalPointDesktop: '50% 50%',
    focalPointMobile: '50% 50%',
    aspectRatio: '4 / 5',
  },
} satisfies Record<string, ConfiguredEditorialImage>;

function resolveImage(
  img: ConfiguredEditorialImage,
  t: TFunction<'translation'>
): EditorialImage {
  return {
    ...img,
    alt: t(img.altKey),
  };
}

export function buildLandingHomeContent(
  t: TFunction<'translation'>,
  getLocalizedPath: LocalizePath
): LandingHomeContent {
  return {
    curatedEntry: {
      dominant: {
        id: 'handbags',
        title: t('landingHome.curated.dominantTitle'),
        descriptor: t('landingHome.curated.dominantDescriptor'),
        href: getLocalizedPath('/bags'),
        image: resolveImage(ASSETS.dominantHandbag, t),
      },
      supporting: [
        {
          id: 'shoulder',
          title: t('landingHome.curated.supportTitles.shoulder'),
          href: getLocalizedPath('/bags/shoulder'),
          image: resolveImage(ASSETS.supportShoulder, t),
        },
        {
          id: 'crossbody',
          title: t('landingHome.curated.supportTitles.crossbody'),
          href: getLocalizedPath('/bags/crossbody'),
          image: resolveImage(ASSETS.supportCrossbody, t),
        },
        {
          id: 'evening',
          title: t('landingHome.curated.supportTitles.evening'),
          href: getLocalizedPath('/bags/evening'),
          image: resolveImage(ASSETS.supportEvening, t),
        },
      ],
    },
    editorialManifesto: {
      kicker: t('landingHome.manifesto.kicker'),
      headline: t('landingHome.manifesto.headline'),
      line: t('landingHome.manifesto.line'),
      layout: 'offset',
      image: resolveImage(ASSETS.manifesto, t),
      ctaLabel: t('landingHome.manifesto.cta'),
      ctaHref: getLocalizedPath('/bags'),
    },
    editorialCraft: {
      slides: [
        resolveImage(ASSETS.craftOne, t),
        resolveImage(ASSETS.craftTwo, t),
        resolveImage(ASSETS.craftThree, t),
      ],
    },
    mixedCommerce: {
      signature: {
        title: t('landingHome.mixed.signatureTitle'),
        subtitle: t('landingHome.mixed.signatureSubtitle'),
        href: getLocalizedPath('/bags/top-handle'),
        image: resolveImage(ASSETS.signature, t),
      },
      supporting: [
        {
          title: t('landingHome.mixed.supportOneTitle'),
          href: getLocalizedPath('/bags/shoulder'),
          image: resolveImage(ASSETS.mixSupportA, t),
        },
        {
          title: t('landingHome.mixed.supportTwoTitle'),
          href: getLocalizedPath('/new'),
          image: resolveImage(ASSETS.mixSupportB, t),
        },
      ],
    },
    editorialClosing: {
      mode: 'triptych',
      panels: [
        resolveImage(ASSETS.closingHardware, t),
        resolveImage(ASSETS.closingLogo, t),
        resolveImage(ASSETS.closingStitch, t),
      ],
      eyebrow: t('landingHome.closing.eyebrow'),
      headline: t('landingHome.closing.headline'),
      supporting1: t('landingHome.closing.supporting1'),
      supporting2: t('landingHome.closing.supporting2'),
      note: t('landingHome.closing.note'),
      ctaLabel: t('landingHome.closing.cta'),
      ctaHref: getLocalizedPath('/craftsmanship'),
    },
  };
}
