import { createClient, RedisClientType } from 'redis';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

export const redis: RedisClientType = createClient({
  url: redisUrl,
});

redis.on('error', (err: unknown) => {
  console.error('Redis Client Error', err);
});

export async function connectRedis() {
  if (!redis.isOpen) {
    await redis.connect();
  }
}
