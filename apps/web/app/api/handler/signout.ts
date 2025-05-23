"use server";

import { signOut, withAuth } from "@workos-inc/authkit-nextjs";
import { redis,connectRedis } from "@repo/database/redis/redis";
import { userCache } from "@web/api/util/keys";

export const handleSignOutAction = async () => {
  await connectRedis();
  const session = await withAuth({ ensureSignedIn: false });
  if (session?.user?.id) {
    await redis.del(userCache(session.user.id));
  }
  await signOut();
};
