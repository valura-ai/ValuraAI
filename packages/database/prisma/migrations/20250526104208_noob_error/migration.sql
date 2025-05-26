/*
  Warnings:

  - The `kyc_status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "is_uae" SET DEFAULT false,
DROP COLUMN "kyc_status",
ADD COLUMN     "kyc_status" "KycStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
