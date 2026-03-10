/** @type {import('next').NextConfig} */
const { URL } = require('url');

const parseHostname = (value) => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return { protocol: url.protocol.replace(':', ''), hostname: url.hostname, port: url.port || undefined };
  } catch {
    return null;
  }
};

const mediaHost =
  parseHostname(process.env.NEXT_PUBLIC_MEDIA_BASE_URL) ||
  parseHostname(process.env.NEXT_PUBLIC_ASSET_BASE_URL) ||
  parseHostname(process.env.NEXT_PUBLIC_API_BASE_URL) ||
  parseHostname(process.env.API_BASE_URL);

const remotePatterns = [
  { protocol: 'http', hostname: 'localhost' },
  { protocol: 'http', hostname: '127.0.0.1' },
  { protocol: 'https', hostname: 'localhost' },
].concat(mediaHost ? [mediaHost] : []);

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  cacheComponents: false,
  trailingSlash: false,
  images: {
    remotePatterns,
  },
  async redirects() {
    const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en';
    return [
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      {
        source: '/products/product/:slug',
        destination: `/${defaultLocale}/product/:slug`,
        permanent: true,
      },
      {
        source: '/products',
        destination: `/${defaultLocale}/products`,
        permanent: true,
      },
      {
        source: '/cart',
        destination: `/${defaultLocale}/cart`,
        permanent: true,
      },
      {
        source: '/orders',
        destination: `/${defaultLocale}/orders`,
        permanent: true,
      },
      {
        source: '/profile',
        destination: `/${defaultLocale}/profile`,
        permanent: true,
      },
      {
        source: '/checkout',
        destination: `/${defaultLocale}/checkout`,
        permanent: true,
      },
      {
        source: '/shipping',
        destination: `/${defaultLocale}/shipping`,
        permanent: true,
      },
      {
        source: '/shipping-policy',
        destination: `/${defaultLocale}/policies/shipping-policy`,
        permanent: true,
      },
      {
        source: '/returns-refunds',
        destination: `/${defaultLocale}/policies/returns-refunds`,
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: `/${defaultLocale}/policies/privacy-policy`,
        permanent: true,
      },
      {
        source: '/terms-conditions',
        destination: `/${defaultLocale}/policies/terms-conditions`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
