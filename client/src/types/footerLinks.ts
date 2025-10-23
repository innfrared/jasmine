export type FooterLinkItem = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerLinksData: FooterLinkItem[] = [
  {
    title: 'about_us',
    links: [
      { label: 'Mission', href: '#faq' },
      { label: 'Team', href: '#privacy' },
      { label: 'Newsletter', href: '#privacy' },
    ],
  },
  {
    title: 'support',
    links: [
      { label: 'Contact', href: '#faq' },
      { label: "FAQ's", href: '#privacy' },
    ],
  },
  {
    title: 'social',
    links: [
      { label: 'Instagram', href: '#faq' },
      { label: 'Facebook', href: '#privacy' },
      { label: 'Tiktok', href: '#privacy' },
    ],
  },
];
