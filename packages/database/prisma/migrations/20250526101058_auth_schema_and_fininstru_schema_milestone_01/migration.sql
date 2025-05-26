/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `kycStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mobileNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mobileVerification` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `workosId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[inquiry_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cognito_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_uae` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kyc_status` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_workosId_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "id",
DROP COLUMN "kycStatus",
DROP COLUMN "lastName",
DROP COLUMN "mobileNumber",
DROP COLUMN "mobileVerification",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
DROP COLUMN "workosId",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "cognito_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "inquiry_id" TEXT,
ADD COLUMN     "is_uae" BOOLEAN NOT NULL,
ADD COLUMN     "kyc_status" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "mobile_number" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("cognito_id");

-- DropEnum
DROP TYPE "KycStatus";

-- DropEnum
DROP TYPE "VerificationStatus";

-- CreateTable
CREATE TABLE "FinancialInstrument" (
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "FinancialInstrument_pkey" PRIMARY KEY ("symbol")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "watchlist_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("watchlist_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_user_id_symbol_key" ON "Watchlist"("user_id", "symbol");

-- CreateIndex
CREATE UNIQUE INDEX "User_inquiry_id_key" ON "User"("inquiry_id");

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("cognito_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_symbol_fkey" FOREIGN KEY ("symbol") REFERENCES "FinancialInstrument"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;
