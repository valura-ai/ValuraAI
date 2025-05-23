// app/api/auth/verify/check/route.ts
import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@web/api/util/response";
import twilio from "twilio";
import { prisma } from "@repo/database";
import { redis, connectRedis } from "@repo/database/redis/redis";
import { userCache } from "@web/api/util/keys";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: NextRequest) {
  const { phoneNumber, code, id } = await req.json();
  try {
    const result = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({ to: phoneNumber, code });

    if (result.status === "approved") {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: { mobileVerification: "DONE" },
      });
      await connectRedis();
      if (updatedUser.workosId) {
        await redis.set(userCache(updatedUser.workosId), JSON.stringify(updatedUser), { EX: 300 });
      }else{
        return errorResponse("User not found", 404);
      }
      return successResponse({ success: true });
    }
    return successResponse({ success: false, status: result.status });
  } catch (err) {
    console.error(err);
    return errorResponse("Verification failed", 500);
  }
}
