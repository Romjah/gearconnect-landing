import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const CONTACT_EMAIL = 'contact@gearconnect.fr';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email },
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    await prisma.waitlistEntry.create({
      data: { email },
    });

    return NextResponse.json(
      { 
        message: `Successfully joined the waitlist! We'll keep you updated at ${email}. For any questions, contact us at ${CONTACT_EMAIL}.`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 