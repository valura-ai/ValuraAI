// app/callback/route.ts
import { handleAuth } from '@workos-inc/authkit-nextjs';
import { prisma } from '@repo/database';

export const GET = handleAuth({
  onSuccess: async ({ user }) => {
    const { id: workosId, email, firstName, lastName } = user;
    // console.log('Logging user from auth callback:', user);
    try {
      await prisma.user.upsert({
        where: { workosId },
        update: { email, firstName, lastName },
        create: { workosId, email, firstName, lastName },
      });
    } catch (err) {
      console.error('User upsert error:', err);
    }
  },
  returnPathname: '/account',
});