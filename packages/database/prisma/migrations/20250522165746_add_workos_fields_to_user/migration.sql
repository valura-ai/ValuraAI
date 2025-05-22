-- AlterTable
ALTER TABLE "User"
ADD COLUMN     "workosId" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT now(),
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT now();

-- Make workosId and email unique
CREATE UNIQUE INDEX IF NOT EXISTS "User_workosId_key" ON "User"("workosId");
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");

-- If you have existing users, you may want to update them with default values here
UPDATE "User" SET "workosId" = gen_random_uuid() WHERE "workosId" IS NULL;
