import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

const DEFAULT_USERS = [
  {
    cognitoId: "user_1",
    firstName: "Alice",
    lastName: "Smith",
    mobileNumber: "1234567890",
    isUae: true,
    inquiryId: "inquiry_1",
    kycStatus: "PENDING",
    category: "Investor",
  },
  {
    cognitoId: "user_2",
    firstName: "Bob",
    lastName: "Johnson",
    mobileNumber: "0987654321",
    isUae: false,
    inquiryId: "inquiry_2",
    kycStatus: "DONE",
    category: "Trader",
  },
];

const DEFAULT_FINANCIAL_INSTRUMENTS = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    type: "Stock",
    currency: "USD",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    type: "Stock",
    currency: "USD",
  },
];

const DEFAULT_WATCHLISTS = [
  {
    watchlistId: "watchlist_1",
    userId: "user_1",
    symbol: "AAPL",
    addedAt: new Date(),
  },
  {
    watchlistId: "watchlist_2",
    userId: "user_2",
    symbol: "GOOGL",
    addedAt: new Date(),
  },
];

(async () => {
  try {
    // Seed Users
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: { cognitoId: user.cognitoId },
          update: user,
          create: user,
        })
      )
    );

    // Seed Financial Instruments
    await Promise.all(
      DEFAULT_FINANCIAL_INSTRUMENTS.map((instrument) =>
        prisma.financialInstrument.upsert({
          where: { symbol: instrument.symbol },
          update: instrument,
          create: instrument,
        })
      )
    );

    // Seed Watchlists
    await Promise.all(
      DEFAULT_WATCHLISTS.map((watchlist) =>
        prisma.watchlist.upsert({
          where: { watchlistId: watchlist.watchlistId },
          update: watchlist,
          create: watchlist,
        })
      )
    );

    console.log("Seeded data successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();