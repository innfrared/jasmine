import { NextResponse } from 'next/server';
import { ApiError } from '../../../src/service/httpClient';
import { getMe, updateProfile, type UpdateProfilePayload } from '../../../src/service/userService';
import { getAccessTokenFromCookies } from '../../../src/service/authServer';

export async function GET() {
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await getMe(token, { cache: 'no-store' });
    return NextResponse.json(user);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to load profile';
    return NextResponse.json({ message }, { status });
  }
}

export async function PATCH(request: Request) {
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = (await request.json()) as UpdateProfilePayload;
    const updated = await updateProfile(payload, token);
    return NextResponse.json(updated);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to update profile';
    return NextResponse.json({ message }, { status });
  }
}
