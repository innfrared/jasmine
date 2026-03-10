import { normalizeLocale, type Locale, SUPPORTED_LOCALES } from '../lib/locale';
import { withLocale } from '../lib/locale';

const metadataByLocale: Record<
  Locale,
  {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
    productsTitle: string;
    productsDescription: string;
    policiesTitle: string;
    policiesDescription: string;
  }
> = {
  en: {
    siteName: 'Jasmine Crafted',
    homeTitle: 'Jasmine Crafted | Handcrafted Fashion & Accessories',
    homeDescription:
      'Discover handcrafted bags, dresses, and accessories made with care by Jasmine Crafted.',
    productsTitle: 'Products | Jasmine Crafted',
    productsDescription: 'Browse handcrafted products from Jasmine Crafted.',
    policiesTitle: 'Policies | Jasmine Crafted',
    policiesDescription:
      'Read the Jasmine Crafted policies and customer information.',
  },
  am: {
    siteName: 'Jasmine Crafted',
    homeTitle: 'Jasmine Crafted | Ձեռագործ նորաձեւություն եւ աքսեսուարներ',
    homeDescription:
      'Բացահայտեք Jasmine Crafted-ի ձեռագործ պայուսակներն ու զգեստները։',
    productsTitle: 'Ապրանքներ | Jasmine Crafted',
    productsDescription: 'Դիտեք Jasmine Crafted-ի ձեռագործ արտադրանքը։',
    policiesTitle: 'Քաղաքականություններ | Jasmine Crafted',
    policiesDescription:
      'Jasmine Crafted-ի պայմաններն ու քաղաքականությունները։',
  },
  ru: {
    siteName: 'Jasmine Crafted',
    homeTitle: 'Jasmine Crafted | Ручная работа и аксессуары',
    homeDescription:
      'Откройте для себя сумки и платья ручной работы от Jasmine Crafted.',
    productsTitle: 'Товары | Jasmine Crafted',
    productsDescription: 'Каталог товаров ручной работы Jasmine Crafted.',
    policiesTitle: 'Политики | Jasmine Crafted',
    policiesDescription: 'Политики и информация для клиентов Jasmine Crafted.',
  },
};

export const getLocaleMetadata = (locale: string) => {
  const normalized = normalizeLocale(locale);
  return metadataByLocale[normalized];
};

export const buildProductTitle = (locale: string, productName: string) => {
  const meta = getLocaleMetadata(locale);
  return `${productName} | ${meta.siteName}`;
};

export const buildPolicyTitle = (locale: string, policyLabel: string) => {
  const meta = getLocaleMetadata(locale);
  return `${policyLabel} | ${meta.siteName}`;
};

export const getSiteUrl = () =>
  (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(
    /\/+$/,
    ''
  );

const buildUrl = (
  locale: string,
  pathname: string,
  query?: Record<string, string | number | undefined>
) => {
  const path = withLocale(locale, pathname);
  const url = new URL(getSiteUrl());
  url.pathname = path;
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined) return;
      url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
};

export const buildAlternates = (
  locale: string,
  pathname: string,
  query?: Record<string, string | number | undefined>
) => {
  const canonical = buildUrl(locale, pathname, query);
  const languages = SUPPORTED_LOCALES.reduce<Record<string, string>>(
    (acc, loc) => {
      acc[loc] = buildUrl(loc, pathname, query);
      return acc;
    },
    {}
  );

  return { canonical, languages };
};
