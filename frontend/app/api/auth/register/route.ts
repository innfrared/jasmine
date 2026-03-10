import { NextResponse } from 'next/server';
import { register } from '../../../../src/service/authService';
import { getMe } from '../../../../src/service/userService';
import { ApiError } from '../../../../src/service/httpClient';
import { setAuthCookies } from '../../../../src/service/authServer';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { tokens, user } = await register(payload);
    const resolvedUser = user ?? (tokens ? await getMe(tokens.access, { cache: 'no-store' }) : null);
    const response = NextResponse.json({ user: resolvedUser });
    if (tokens) {
      setAuthCookies(response, tokens);
    }
    return response;
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Registration failed';
    return NextResponse.json({ message }, { status });
  }
}
