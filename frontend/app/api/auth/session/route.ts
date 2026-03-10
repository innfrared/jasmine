import { NextResponse } from 'next/server';
import { ApiError } from '../../../../src/service/httpClient';
import { getMe } from '../../../../src/service/userService';
import {
  getAccessTokenFromCookies,
  getRefreshTokenFromCookies,
  refreshServerSession,
  setAuthCookies,
} from '../../../../src/service/authServer';

export async function GET() {
  const access = await getAccessTokenFromCookies();
  const refreshToken = await getRefreshTokenFromCookies();

  if (!access && !refreshToken) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  if (access) {
    try {
      const user = await getMe(access, { cache: 'no-store' });
      return NextResponse.json({ user });
    } catch (error) {
      if (!(error instanceof ApiError) || error.status !== 401) {
        return NextResponse.json({ user: null }, { status: 200 });
      }
    }
  }

  if (!refreshToken) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    const tokens = await refreshServerSession();
    if (!tokens) {
      return NextResponse.json({ user: null }, { status: 200 });
    }
    const user = await getMe(tokens.access, { cache: 'no-store' });
    const response = NextResponse.json({ user });
    setAuthCookies(response, tokens);
    return response;
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
