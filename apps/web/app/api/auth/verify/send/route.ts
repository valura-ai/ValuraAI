// app/api/auth/verify/send/route.ts
import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@web/api/util/response';
import twilio from 'twilio';
import { prisma } from '@repo/database';

const client = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);

export async function POST(req: NextRequest) {
  const { phoneNumber, id } = await req.json();
  if (!phoneNumber) {
    return errorResponse('Phone number is required', 400);
  }
  if (!id) {
    return errorResponse('ID is required', 400);
  }
  if (!/^\+\d{1,3}\d{9,15}$/.test(phoneNumber)) {
    return errorResponse('Invalid phone number format', 400);
  }
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return errorResponse('User not found', 404);
  }
  if (user.mobileNumber === phoneNumber && user.mobileVerification === 'DONE') {
    return errorResponse('Phone number is already verified', 400);
  }
  try {
    await prisma.user.update({
      where: { id },
      data: { mobileNumber: phoneNumber },
    });
  } catch (err) {
    console.error(err);
    return errorResponse('Failed to update user', 500);
  }
  try {
    const verification = await client.verify
      .v2.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verifications.create({ to: phoneNumber, channel: 'sms' });

    return successResponse({ status: verification.status });
  } catch (err) {
    console.error(err);
    return errorResponse('Failed to send verification code', 500);
  }
}