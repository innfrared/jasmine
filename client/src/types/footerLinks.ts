export type FooterLinkItem = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerLinksData: FooterLinkItem[] = [
  {
    title: 'about_us',
    links: [
      { label: 'Shipping Policy', href: '/shipping-policy' },
      { label: 'Returns & Refunds', href: '/returns-refunds' },
    ],
  },
  {
    title: 'support',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
  {
    title: 'social',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com' },
      { label: 'Facebook', href: 'https://www.facebook.com' },
      { label: 'Tiktok', href: 'https://www.tiktok.com' },
    ],
  },
];
