-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('PENDING', 'COMPLETED');

-- CreateTable
CREATE TABLE "User" (
    "cognito_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,
    "is_uae" BOOLEAN NOT NULL DEFAULT false,
    "inquiry_id" TEXT,
    "kyc_status" "KycStatus" NOT NULL DEFAULT 'PENDING',
    "category" TEXT NOT NULL DEFAULT 'Unknown',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("cognito_id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_inquiry_id_key" ON "User"("inquiry_id");

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_user_id_symbol_key" ON "Watchlist"("user_id", "symbol");

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("cognito_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_symbol_fkey" FOREIGN KEY ("symbol") REFERENCES "FinancialInstrument"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;
