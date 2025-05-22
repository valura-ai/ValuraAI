import { prisma } from "./client";

const DEFAULT_USERS = [
  {
    workosId: "workos_1",
    email: "alice@example.com",
    firstName: "Alice",
    lastName: "Smith",
    mobileNumber: "1234567890",
    kycStatus: "PENDING" as const,
    mobileVerification: "PENDING" as const,
  },
  {
    workosId: "workos_2",
    email: "bob@example.com",
    firstName: "Bob",
    lastName: "Johnson",
    mobileNumber: "9876543210",
    kycStatus: "DONE" as const,
    mobileVerification: "DONE" as const,
  },
];

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: { email: user.email },
          update: {
            ...user,
            kycStatus: user.kycStatus,
            mobileVerification: user.mobileVerification,
          },
          create: {
            ...user,
            kycStatus: user.kycStatus,
            mobileVerification: user.mobileVerification,
          },
        })
      )
    );
    console.log("Seeded users successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
