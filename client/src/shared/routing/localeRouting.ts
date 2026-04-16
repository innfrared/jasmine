'use client';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import i18n, {
  DEFAULT_LANGUAGE,
  isSupportedLanguage,
  type AppLanguage,
} from '../../i18n';

const EXTERNAL_PATH_PATTERN = /^(https?:|mailto:|tel:)/i;

const splitPath = (value: string) => {
  const hashIndex = value.indexOf('#');
  const searchIndex = value.indexOf('?');
  const firstSpecialIndex = [searchIndex, hashIndex]
    .filter(index => index !== -1)
    .sort((a, b) => a - b)[0];

  if (firstSpecialIndex === undefined) {
    return { pathname: value, search: '', hash: '' };
  }

  const pathname = value.slice(0, firstSpecialIndex);
  const remainder = value.slice(firstSpecialIndex);
  const remainderHashIndex = remainder.indexOf('#');

  if (remainderHashIndex === -1) {
    return { pathname, search: remainder, hash: '' };
  }

  return {
    pathname,
    search: remainder.slice(0, remainderHashIndex),
    hash: remainder.slice(remainderHashIndex),
  };
};

export const stripLocaleFromPath = (pathname: string) => {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalizedPath.split('/').filter(Boolean);

  if (segments.length > 0 && isSupportedLanguage(segments[0])) {
    const remainingSegments = segments.slice(1).join('/');
    return remainingSegments ? `/${remainingSegments}` : '/';
  }

  return normalizedPath || '/';
};

export const buildLocalizedPath = (path: string, locale: AppLanguage) => {
  if (!path) {
    return `/${locale}`;
  }

  if (EXTERNAL_PATH_PATTERN.test(path) || path.startsWith('#')) {
    return path;
  }

  const { pathname, search, hash } = splitPath(path);
  const normalizedPathname = pathname ? stripLocaleFromPath(pathname) : '/';

  if (normalizedPathname === '/') {
    return `/${locale}${search}${hash}`;
  }

  return `/${locale}${normalizedPathname}${search}${hash}`;
};

export const resolveLocale = (candidate?: string | null): AppLanguage => {
  if (isSupportedLanguage(candidate)) {
    return candidate;
  }

  if (isSupportedLanguage(i18n.resolvedLanguage)) {
    return i18n.resolvedLanguage;
  }

  return DEFAULT_LANGUAGE;
};

export const useLocalizedRouting = () => {
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeLocale = resolveLocale(params?.locale);

  const getLocalizedPath = (path: string) => buildLocalizedPath(path, activeLocale);

  const navigateLocalized = (
    path: string,
    options?: {
      replace?: boolean;
      scroll?: boolean;
    }
  ) => {
    const targetPath = getLocalizedPath(path);
    if (options?.replace) {
      router.replace(targetPath, { scroll: options.scroll });
      return;
    }

    router.push(targetPath, { scroll: options?.scroll });
  };

  const getPathForLocale = (nextLocale: AppLanguage) =>
    buildLocalizedPath(
      `${stripLocaleFromPath(pathname)}${
        searchParams.toString() ? `?${searchParams.toString()}` : ''
      }`,
      nextLocale
    );

  return {
    locale: activeLocale,
    pathname,
    search: searchParams.toString() ? `?${searchParams.toString()}` : '',
    getLocalizedPath,
    navigateLocalized,
    getPathForLocale,
  };
};
