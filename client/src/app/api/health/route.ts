import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    { ok: true, t: Date.now() },
    { status: 200, headers: { 'Cache-Control': 'no-store' } }
  );
}
