import "./globals.css";

export const metadata = {
  title: "ValuraAI",
  description: "ValuraAI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
