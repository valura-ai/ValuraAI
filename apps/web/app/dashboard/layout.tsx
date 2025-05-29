import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Your simple dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[url('/dashboard-bg.png')] bg-cover bg-no-repeat min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
