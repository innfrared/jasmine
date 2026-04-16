import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  CURRENCY_COOKIE_KEY,
  LANGUAGE_COOKIE_KEY,
  SUPPORTED_LANGUAGES,
  isSupportedLanguage,
} from './src/shared/preferences/constants';

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

const getLanguageFromHeader = (request: NextRequest) => {
  const acceptLanguageHeader = request.headers.get('accept-language');

  if (!acceptLanguageHeader) {
    return DEFAULT_LANGUAGE;
  }

  const languages = acceptLanguageHeader
    .split(',')
    .map(part => part.split(';')[0]?.trim().split('-')[0])
    .filter(isSupportedLanguage);

  return languages[0] ?? DEFAULT_LANGUAGE;
};

const resolveRequestLanguage = (request: NextRequest) => {
  const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE_KEY)?.value;

  if (isSupportedLanguage(cookieLanguage)) {
    return cookieLanguage;
  }

  return getLanguageFromHeader(request);
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    PUBLIC_FILE_PATTERN.test(pathname)
  ) {
    return NextResponse.next();
  }

  const [, maybeLocale, ...segments] = pathname.split('/');
  const hasLocalePrefix = isSupportedLanguage(maybeLocale);

  if (!hasLocalePrefix) {
    const locale = resolveRequestLanguage(request);
    const redirectUrl = request.nextUrl.clone();
    const normalizedPath = pathname === '/' ? '' : pathname;

    redirectUrl.pathname = `/${locale}${normalizedPath}`;
    redirectUrl.search = search;

    return NextResponse.redirect(redirectUrl);
  }

  const response = NextResponse.next();
  const currencyCookie = request.cookies.get(CURRENCY_COOKIE_KEY)?.value;

  response.cookies.set(LANGUAGE_COOKIE_KEY, maybeLocale, {
    path: '/',
    sameSite: 'lax',
  });

  response.cookies.set(CURRENCY_COOKIE_KEY, currencyCookie || DEFAULT_CURRENCY, {
    path: '/',
    sameSite: 'lax',
  });

  if (segments.length === 0 && pathname.endsWith('/')) {
    return response;
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
