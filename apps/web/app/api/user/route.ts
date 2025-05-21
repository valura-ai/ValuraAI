import { NextRequest } from 'next/server';
import { prisma } from '@repo/database';
import { redis, connectRedis } from '@repo/database/redis/redis';
import { successResponse, errorResponse } from '@web/api/util/response';
import { exampleCache } from '@web/api/util/keys';

export async function GET(request: NextRequest) {
  try {
    await connectRedis();
    const cacheKey = exampleCache('user_metadata');
    const cached = await redis.get(cacheKey);
    if (cached) {
      return successResponse(JSON.parse(cached));
    }
    const data = await prisma.user.findMany();
    await redis.set(cacheKey, JSON.stringify(data), { EX: 300 }); 
    return successResponse(data);
  } catch (err) {
    return errorResponse('Failed to fetch user data');
  }
}