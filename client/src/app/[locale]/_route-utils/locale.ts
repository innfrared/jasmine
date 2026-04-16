import { notFound } from 'next/navigation';
import { isSupportedLanguage } from '@/shared/preferences/constants';

export type LocaleRouteParams = {
  locale: string;
};

export type AsyncRouteProps<TParams extends LocaleRouteParams, TSearchParams> = {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
};

export type RouteSearchParams = {
  page?: string;
};

export async function validateLocale<T extends LocaleRouteParams>(
  params: Promise<T>
) {
  const resolvedParams = await params;

  if (!isSupportedLanguage(resolvedParams.locale)) {
    notFound();
  }

  return resolvedParams;
}

export function parsePage(value?: string) {
  if (!value) {
    return 1;
  }

  const numericValue = Number(value);
  return Number.isFinite(numericValue) && numericValue > 0
    ? Math.floor(numericValue)
    : 1;
}
