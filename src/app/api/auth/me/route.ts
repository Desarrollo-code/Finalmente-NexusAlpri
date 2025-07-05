import { getSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await getSession();

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user });
}