import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '../src/lib/locale';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');
  const disallowPaths = [
    '/login',
    '/checkout',
    '/orders',
    '/profile',
    '/shipping',
    '/order-confirmation',
  ];
  const localeDisallows = SUPPORTED_LOCALES.flatMap((locale) =>
    disallowPaths.map((path) => `/${locale}${path}`)
  );
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: localeDisallows,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
