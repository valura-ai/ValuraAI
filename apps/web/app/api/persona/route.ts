// app/api/persona/update-kyc-status/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@repo/database'; // Adjust path for your project

export async function POST(request: NextRequest) {
  try {
    const { inquiryId, workosId } = await request.json();

    if (!inquiryId || !workosId) {
      return NextResponse.json({ error: 'Missing inquiryId or workosId' }, { status: 400 });
    }

    await prisma.user.update({
      where: { workosId },
      data: { kycStatus: 'DONE' },
    });

    return NextResponse.json({ message: 'KYC status marked as done' });
  } catch (error) {
    console.error('Error updating KYC status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
