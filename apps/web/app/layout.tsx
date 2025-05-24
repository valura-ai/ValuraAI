import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConfAmplifyClient from "./amplify-cognito-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valura",
  description: "Your personalized wealth management dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfAmplifyClient />
        {children}
      </body>
    </html>
  );
}
