# Jasmine Crafted

Jasmine Crafted is a React + TypeScript storefront application built on Next.js App Router to support a modern e-commerce experience with internationalization, modular product pages, and SEO-friendly rendering.

The application is designed to be performance-aware and structured to support SEO-oriented rendering strategies as it evolves.

## Setup

### Requirements
- Node.js 22+
- npm

### Install and run

```sh
cd client
npm install
npm run dev
```

### Environment variables

Copy the example file and fill in real values:

```sh
cp .env.example .env.local
```

Required:
- `API_BASE_URL`: server-only API base URL (used by server components and route handlers)
- `NEXT_PUBLIC_API_BASE_URL`: browser API base URL for client-side fallback fetches
- `NEXT_PUBLIC_SITE_URL`: canonical site URL used for metadata and sitemap
- `NEXT_PUBLIC_DEFAULT_LOCALE`: default locale for redirects (`en` recommended)

Optional:
- `NEXT_PUBLIC_MEDIA_BASE_URL`: image/media host for `next/image`

### Scripts

```sh
npm run dev
npm run build
npm run start
```
