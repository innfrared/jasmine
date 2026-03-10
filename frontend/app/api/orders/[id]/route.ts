import { NextResponse } from 'next/server';
import { ApiError } from '../../../../src/service/httpClient';
import { getOrder } from '../../../../src/service/ordersService';
import { getAccessTokenFromCookies } from '../../../../src/service/authServer';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const orderId = Number(id);
    const order = await getOrder(orderId, { token, cache: 'no-store' });
    return NextResponse.json(order);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to load order';
    return NextResponse.json({ message }, { status });
  }
}
