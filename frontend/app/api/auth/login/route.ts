import { NextResponse } from 'next/server';
import { login } from '../../../../src/service/authService';
import { getMe } from '../../../../src/service/userService';
import { ApiError } from '../../../../src/service/httpClient';
import { setAuthCookies } from '../../../../src/service/authServer';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { tokens } = await login(payload);
    const user = await getMe(tokens.access, { cache: 'no-store' });
    const response = NextResponse.json({ user });
    setAuthCookies(response, tokens);
    return response;
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Login failed';
    return NextResponse.json({ message }, { status });
  }
}
