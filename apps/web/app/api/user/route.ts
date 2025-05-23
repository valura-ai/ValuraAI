import { NextRequest } from 'next/server';
import { withAuth } from '@workos-inc/authkit-nextjs';
import { prisma } from '@repo/database';
import { redis, connectRedis } from '@repo/database/redis/redis';
import { successResponse, errorResponse } from '@web/api/util/response';
import { userCache } from '../util/keys';

export async function GET(request: NextRequest) {
  try {
    const session = await withAuth({ ensureSignedIn: true });
    const user = session.user;
    const userId = user.id;
    if (!userId) {
      return errorResponse('No user session found', 401);
    }
    await connectRedis();
    const cacheKey = userCache(userId);
    const cached = await redis.get(cacheKey);
    if (cached) {
      return successResponse(JSON.parse(cached));
    }
    const dbUser = await prisma.user.findUnique({ where: { workosId: userId } });
    if (!dbUser) {
      return errorResponse('User not found', 404);
    }
    await redis.set(cacheKey, JSON.stringify(dbUser), { EX: 300 });
    return successResponse(dbUser);
  } catch (err) {
    return errorResponse('Failed to fetch user data');
  }
}