export type FooterLinkKind = 'internal' | 'external';

export type FooterLinkConfig = {
  id: string;
  labelKey: string;
  href: string;
  kind: FooterLinkKind;
};

export const FOOTER_EXPLORE_LINKS: FooterLinkConfig[] = [
  { id: 'new', labelKey: 'footer.links.new', href: '/new', kind: 'internal' },
  {
    id: 'all-bags',
    labelKey: 'footer.links.allBags',
    href: '/bags',
    kind: 'internal',
  },
  {
    id: 'crossbody',
    labelKey: 'footer.links.crossbody',
    href: '/bags/crossbody',
    kind: 'internal',
  },
  {
    id: 'shoulder',
    labelKey: 'footer.links.shoulder',
    href: '/bags/shoulder',
    kind: 'internal',
  },
  {
    id: 'top-handle',
    labelKey: 'footer.links.topHandle',
    href: '/bags/top-handle',
    kind: 'internal',
  },
  {
    id: 'evening',
    labelKey: 'footer.links.evening',
    href: '/bags/evening',
    kind: 'internal',
  },
  {
    id: 'belts',
    labelKey: 'footer.links.belts',
    href: '/accessories/belts',
    kind: 'internal',
  },
  {
    id: 'accessories',
    labelKey: 'footer.links.accessories',
    href: '/accessories',
    kind: 'internal',
  },
  {
    id: 'sitemap',
    labelKey: 'footer.links.sitemap',
    href: '/sitemap',
    kind: 'internal',
  },
];

export const FOOTER_CLIENT_SERVICE_LINKS: FooterLinkConfig[] = [
  {
    id: 'shipping',
    labelKey: 'footer.links.shipping',
    href: '/shipping-policy',
    kind: 'internal',
  },
  {
    id: 'returns',
    labelKey: 'footer.links.returns',
    href: '/returns-refunds',
    kind: 'internal',
  },
  { id: 'faq', labelKey: 'footer.links.faq', href: '/faq', kind: 'internal' },
  {
    id: 'care-services',
    labelKey: 'footer.links.careServices',
    href: '/care-services',
    kind: 'internal',
  },
  {
    id: 'contact',
    labelKey: 'footer.links.contact',
    href: '/contact',
    kind: 'internal',
  },
  {
    id: 'about-jasmine',
    labelKey: 'footer.links.aboutJasmine',
    href: '/about-jasmine',
    kind: 'internal',
  },
  {
    id: 'my-account',
    labelKey: 'footer.links.myAccount',
    href: '/profile',
    kind: 'internal',
  },
];

export const FOOTER_LEGAL_LINKS: FooterLinkConfig[] = [
  {
    id: 'privacy',
    labelKey: 'footer.links.privacyPolicy',
    href: '/privacy-policy',
    kind: 'internal',
  },
  {
    id: 'terms',
    labelKey: 'footer.links.termsConditions',
    href: '/terms-conditions',
    kind: 'internal',
  },
  {
    id: 'accessibility',
    labelKey: 'footer.links.accessibility',
    href: '/accessibility',
    kind: 'internal',
  },
];

export const FOOTER_SOCIAL_LINKS: FooterLinkConfig[] = [
  {
    id: 'instagram',
    labelKey: 'footer.links.instagram',
    href: 'https://www.instagram.com',
    kind: 'external',
  },
  {
    id: 'facebook',
    labelKey: 'footer.links.facebook',
    href: 'https://www.facebook.com',
    kind: 'external',
  },
];
