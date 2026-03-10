import { NextResponse } from 'next/server';
import { ApiError } from '../../../src/service/httpClient';
import { createOrder, listOrders } from '../../../src/service/ordersService';
import { getAccessTokenFromCookies } from '../../../src/service/authServer';

export async function GET() {
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const orders = await listOrders({ token, cache: 'no-store' });
    return NextResponse.json(orders);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to load orders';
    return NextResponse.json({ message }, { status });
  }
}

export async function POST(request: Request) {
  const token = await getAccessTokenFromCookies();
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const created = await createOrder(payload, { token, cache: 'no-store' });
    return NextResponse.json(created);
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500;
    const message = error instanceof ApiError ? error.message : 'Failed to create order';
    return NextResponse.json({ message }, { status });
  }
}
