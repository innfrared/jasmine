import { NextResponse } from 'next/server';
import { ApiError } from '../../../src/service/httpClient';
import {
  listAddresses,
  createAddress,
  type AddressPayload,
} from '../../../src/service/addressService';
import { getAccessTokenFromCookies } from '../../../src/service/authServer';

export async function GET() {
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const addresses = await listAddresses(token, { cache: 'no-store' });
    return NextResponse.json(addresses);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to load addresses';
    return NextResponse.json({ message }, { status });
  }
}

export async function POST(request: Request) {
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = (await request.json()) as AddressPayload;
    const created = await createAddress(payload, token, { cache: 'no-store' });
    return NextResponse.json(created);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to create address';
    return NextResponse.json({ message }, { status });
  }
}
