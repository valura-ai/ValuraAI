import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Not available in next/font/google
import BackgroundGradient from "./components/BackgroundGradient";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-transparent">
        <BackgroundGradient />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
