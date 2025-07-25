
import { deleteSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST() {
  await deleteSession();
  return NextResponse.json({ success: true });
}
