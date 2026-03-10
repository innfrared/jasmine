import { NextResponse } from 'next/server';
import { ApiError } from '../../../../src/service/httpClient';
import {
  updateAddress,
  deleteAddress,
  type AddressPayload,
} from '../../../../src/service/addressService';
import { getAccessTokenFromCookies } from '../../../../src/service/authServer';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = (await request.json()) as AddressPayload;
    const updated = await updateAddress(Number(id), payload, token, {
      cache: 'no-store',
    });
    return NextResponse.json(updated);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to update address';
    return NextResponse.json({ message }, { status });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await deleteAddress(Number(id), token, { cache: 'no-store' });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to delete address';
    return NextResponse.json({ message }, { status });
  }
}
