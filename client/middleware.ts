import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  ACCESS_TOKEN_COOKIE_KEY,
  AUTH_RETURN_TO_QUERY_KEY,
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  CURRENCY_COOKIE_KEY,
  LANGUAGE_COOKIE_KEY,
  PROTECTED_ROUTE_PREFIXES,
  isSupportedLanguage,
  isSupportedCurrency,
} from './src/shared/preferences/constants';

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;
const LOCALE_SEGMENT_PATTERN = /^[a-z]{2,3}$/i;
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
const SUSPICIOUS_PATH_PATTERNS = [
  /\.\./,
  /%2e/i,
  /%00/i,
  /(?:^|\/)\.env(?:$|[./])/i,
  /(?:^|\/)\.git(?:$|[./])/i,
  /(?:^|\/)wp-admin(?:$|\/)/i,
  /(?:^|\/)wp-login\.php$/i,
  /(?:^|\/)phpmyadmin(?:$|\/)/i,
];
const ALLOWED_PAGE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const ALLOWED_HOSTS = (process.env.ALLOWED_HOSTS ?? '')
  .split(',')
  .map(host => host.trim().toLowerCase())
  .filter(Boolean);

type RouteClass =
  | 'bypass'
  | 'unlocalized'
  | 'localized-public'
  | 'localized-protected'
  | 'invalid-locale-prefix';

type ClassifiedPath = {
  className: RouteClass;
  locale: string | null;
  pathnameAfterLocale: string;
  segments: string[];
};

const hasProtectedPrefix = (pathnameAfterLocale: string) =>
  PROTECTED_ROUTE_PREFIXES.some(prefix => {
    if (pathnameAfterLocale === prefix) {
      return true;
    }

    return pathnameAfterLocale.startsWith(`${prefix}/`);
  });

const buildPathFromSegments = (segments: string[]) =>
  segments.length === 0 ? '/' : `/${segments.join('/')}`;

const resolveRequestHost = (request: NextRequest) =>
  (
    request.headers.get('x-forwarded-host') ??
    request.headers.get('host') ??
    ''
  )
    .split(',')[0]
    ?.trim()
    .toLowerCase();

const isRequestHostAllowed = (request: NextRequest) => {
  if (ALLOWED_HOSTS.length === 0) {
    return !IS_PRODUCTION;
  }

  const requestHost = resolveRequestHost(request);

  if (!requestHost) {
    return false;
  }

  return ALLOWED_HOSTS.some(
    allowedHost =>
      requestHost === allowedHost || requestHost.endsWith(`.${allowedHost}`)
  );
};

const isSuspiciousPath = (pathname: string) =>
  SUSPICIOUS_PATH_PATTERNS.some(pattern => pattern.test(pathname));

const isAuthGuardEnabled = () => process.env.MIDDLEWARE_AUTH_GUARD_ENABLED !== '0';

const classifyPath = (pathname: string): ClassifiedPath => {
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.json' ||
    pathname === '/site.webmanifest' ||
    PUBLIC_FILE_PATTERN.test(pathname)
  ) {
    return {
      className: 'bypass',
      locale: null,
      pathnameAfterLocale: pathname,
      segments: [],
    };
  }

  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0] ?? null;

  if (!maybeLocale) {
    return {
      className: 'unlocalized',
      locale: null,
      pathnameAfterLocale: '/',
      segments,
    };
  }

  if (isSupportedLanguage(maybeLocale)) {
    const pathnameAfterLocale = buildPathFromSegments(segments.slice(1));

    return {
      className: hasProtectedPrefix(pathnameAfterLocale)
        ? 'localized-protected'
        : 'localized-public',
      locale: maybeLocale,
      pathnameAfterLocale,
      segments,
    };
  }

  if (LOCALE_SEGMENT_PATTERN.test(maybeLocale)) {
    return {
      className: 'invalid-locale-prefix',
      locale: null,
      pathnameAfterLocale: buildPathFromSegments(segments.slice(1)),
      segments,
    };
  }

  return {
    className: 'unlocalized',
    locale: null,
    pathnameAfterLocale: pathname,
    segments,
  };
};

const parseAcceptLanguageHeader = (acceptLanguageHeader: string) =>
  acceptLanguageHeader
    .split(',')
    .map((part, index) => {
      const [languagePart, ...params] = part.trim().split(';');
      const language = languagePart?.trim().split('-')[0]?.toLowerCase();
      const qualityParam = params.find(param =>
        param.trim().toLowerCase().startsWith('q=')
      );
      const qualityValue = qualityParam
        ? Number.parseFloat(qualityParam.split('=')[1] ?? '')
        : 1;

      return {
        language,
        quality: Number.isFinite(qualityValue) ? qualityValue : 0,
        index,
      };
    })
    .filter(
      (
        item
      ): item is { language: string; quality: number; index: number } =>
        Boolean(item.language && isSupportedLanguage(item.language))
    )
    .sort((a, b) => {
      if (a.quality !== b.quality) {
        return b.quality - a.quality;
      }

      return a.index - b.index;
    });

const getLanguageFromHeader = (request: NextRequest) => {
  const acceptLanguageHeader = request.headers.get('accept-language');

  if (!acceptLanguageHeader) {
    return DEFAULT_LANGUAGE;
  }

  const languages = parseAcceptLanguageHeader(acceptLanguageHeader);

  return languages[0]?.language ?? DEFAULT_LANGUAGE;
};

const resolveRequestLanguage = (request: NextRequest) => {
  const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE_KEY)?.value;

  if (isSupportedLanguage(cookieLanguage)) {
    return cookieLanguage;
  }

  return getLanguageFromHeader(request);
};

const buildLocaleRedirect = (
  request: NextRequest,
  locale: string,
  targetPathname: string
) => {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = targetPathname === '/' ? `/${locale}` : `/${locale}${targetPathname}`;
  return redirectUrl;
};

const buildAuthRedirect = (request: NextRequest, locale: string) => {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}`;

  const returnTo = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const sanitizedReturnTo =
    returnTo.startsWith('/') &&
    !returnTo.startsWith('//') &&
    !returnTo.startsWith('/\\')
      ? returnTo
      : `/${locale}`;
  redirectUrl.searchParams.set(AUTH_RETURN_TO_QUERY_KEY, sanitizedReturnTo);

  return redirectUrl;
};

const buildBlockedResponse = (status: number) =>
  new NextResponse(null, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });

const applyPreferenceCookies = (
  response: NextResponse,
  request: NextRequest,
  locale: string
) => {
  const secure = request.nextUrl.protocol === 'https:';
  const languageCookie = request.cookies.get(LANGUAGE_COOKIE_KEY)?.value;

  if (languageCookie !== locale) {
    response.cookies.set(LANGUAGE_COOKIE_KEY, locale, {
      path: '/',
      sameSite: 'lax',
      secure,
      maxAge: ONE_YEAR_IN_SECONDS,
    });
  }

  const currencyCookie = request.cookies.get(CURRENCY_COOKIE_KEY)?.value;
  const resolvedCurrency = isSupportedCurrency(currencyCookie)
    ? currencyCookie
    : DEFAULT_CURRENCY;

  if (currencyCookie !== resolvedCurrency) {
    response.cookies.set(CURRENCY_COOKIE_KEY, resolvedCurrency, {
      path: '/',
      sameSite: 'lax',
      secure,
      maxAge: ONE_YEAR_IN_SECONDS,
    });
  }
};

const buildErrorFallbackResponse = (
  request: NextRequest,
  pathInfo: ClassifiedPath
) => {
  if (pathInfo.className === 'localized-protected' && pathInfo.locale) {
    return NextResponse.redirect(buildAuthRedirect(request, pathInfo.locale));
  }

  if (pathInfo.className === 'invalid-locale-prefix') {
    const locale = resolveRequestLanguage(request);
    return NextResponse.redirect(
      buildLocaleRedirect(request, locale, pathInfo.pathnameAfterLocale)
    );
  }

  return NextResponse.next();
};

const FALLBACK_CLASSIFIED_PATH: ClassifiedPath = {
  className: 'unlocalized',
  locale: null,
  pathnameAfterLocale: '/',
  segments: [],
};

const safeRequestId = (request: NextRequest): string => {
  const fromHeader =
    request.headers.get('x-request-id')?.trim() ||
    request.headers.get('x-vercel-id')?.trim();
  if (fromHeader) {
    return fromHeader;
  }

  try {
    const uuid = globalThis.crypto?.randomUUID?.();
    if (typeof uuid === 'string' && uuid.length > 0) {
      return uuid;
    }
  } catch {
    // ignore
  }

  return `mw-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 14)}`;
};

export function middleware(request: NextRequest) {
  let pathInfo: ClassifiedPath = FALLBACK_CLASSIFIED_PATH;
  let requestId = 'unknown';

  try {
    requestId = safeRequestId(request);
    pathInfo = classifyPath(request.nextUrl.pathname);

    if (!isRequestHostAllowed(request)) {
      console.warn('middleware blocked host', {
        requestId,
        pathname: request.nextUrl.pathname,
        host: resolveRequestHost(request),
        hasAllowlist: ALLOWED_HOSTS.length > 0,
      });
      return buildBlockedResponse(421);
    }

    if (isSuspiciousPath(request.nextUrl.pathname)) {
      console.warn('middleware blocked suspicious path', {
        requestId,
        pathname: request.nextUrl.pathname,
      });
      return buildBlockedResponse(403);
    }

    if (pathInfo.className === 'bypass') {
      return NextResponse.next();
    }

    if (!ALLOWED_PAGE_METHODS.has(request.method)) {
      console.warn('middleware blocked unsupported method', {
        requestId,
        pathname: request.nextUrl.pathname,
        method: request.method,
      });
      return new NextResponse(null, {
        status: 405,
        headers: {
          Allow: 'GET, HEAD, OPTIONS',
          'Cache-Control': 'no-store',
        },
      });
    }

    const locale = pathInfo.locale ?? resolveRequestLanguage(request);

    if (pathInfo.className === 'invalid-locale-prefix') {
      return NextResponse.redirect(
        buildLocaleRedirect(request, locale, pathInfo.pathnameAfterLocale)
      );
    }

    if (pathInfo.className === 'unlocalized') {
      return NextResponse.redirect(
        buildLocaleRedirect(request, locale, pathInfo.pathnameAfterLocale)
      );
    }

    if (pathInfo.className === 'localized-protected' && isAuthGuardEnabled()) {
      const hasAccessToken = Boolean(
        request.cookies.get(ACCESS_TOKEN_COOKIE_KEY)?.value?.trim()
      );

      if (!hasAccessToken) {
        return NextResponse.redirect(buildAuthRedirect(request, locale));
      }
    }

    const response = NextResponse.next();
    applyPreferenceCookies(response, request, locale);
    return response;
  } catch (error) {
    console.error('middleware invocation failed', {
      requestId,
      pathname: request.nextUrl.pathname,
      routeClass: pathInfo.className,
      error,
    });
    return buildErrorFallbackResponse(request, pathInfo);
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|manifest.json|site.webmanifest).*)',
  ],
};
