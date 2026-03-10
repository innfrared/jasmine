import { NextResponse } from 'next/server';
import { ApiError } from '../../../../../src/service/httpClient';
import { setDefaultAddress } from '../../../../../src/service/addressService';
import { getAccessTokenFromCookies } from '../../../../../src/service/authServer';

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenFromCookies();

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await setDefaultAddress(Number(id), token, {
      cache: 'no-store',
    });

    return NextResponse.json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message =
      error instanceof ApiError
        ? error.message
        : 'Failed to update default address';

    return NextResponse.json({ message }, { status });
  }
}