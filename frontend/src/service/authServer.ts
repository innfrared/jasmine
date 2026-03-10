import 'server-only';

import { cookies } from 'next/headers';
import type { NextResponse } from 'next/server';
import { ApiError } from './httpClient';
import { getMe } from './userService';
import { refresh } from './authService';
import type { TokenPair, UserDto } from './types';

export const AUTH_COOKIES = {
  access: 'jc_access',
  refresh: 'jc_refresh',
};

const isProd = process.env.NODE_ENV === 'production';

const accessCookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: isProd,
  path: '/',
  maxAge: 60 * 60,
};

const refreshCookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: isProd,
  path: '/',
  maxAge: 60 * 60 * 24 * 30,
};

export const getAccessTokenFromCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIES.access)?.value ?? null;
};

export const getRefreshTokenFromCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIES.refresh)?.value ?? null;
};

export const setAuthCookies = (response: NextResponse, tokens: TokenPair) => {
  response.cookies.set(AUTH_COOKIES.access, tokens.access, accessCookieOptions);
  response.cookies.set(AUTH_COOKIES.refresh, tokens.refresh, refreshCookieOptions);
};

export const clearAuthCookies = (response: NextResponse) => {
  response.cookies.set(AUTH_COOKIES.access, '', {
    ...accessCookieOptions,
    maxAge: 0,
  });
  response.cookies.set(AUTH_COOKIES.refresh, '', {
    ...refreshCookieOptions,
    maxAge: 0,
  });
};

export const getServerSession = async (): Promise<UserDto | null> => {
  const access = await getAccessTokenFromCookies();
  if (!access) return null;

  try {
    return await getMe(access, { cache: 'no-store' });
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      return null;
    }
    return null;
  }
};

export const refreshServerSession = async (): Promise<TokenPair | null> => {
  const refreshToken = await getRefreshTokenFromCookies();
  if (!refreshToken) return null;

  try {
    return await refresh(refreshToken);
  } catch {
    return null;
  }
};