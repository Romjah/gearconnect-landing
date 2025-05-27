import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  console.log('API: Starting waitlist count request');
  
  try {
    const count = await prisma.waitlistEntry.count();
    console.log('API: Count retrieved successfully:', count);
    
    const response = NextResponse.json({ count });
    console.log('API: Response created:', response);
    return response;
  } catch (error) {
    console.error('API: Error in waitlist count:', error);
    return NextResponse.json(
      { error: 'Failed to get waitlist count' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    await prisma.$connect();
    const count = await prisma.waitlistEntry.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error in POST waitlist count:', error);
    return NextResponse.json(
      { error: 'Failed to update waitlist count', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 