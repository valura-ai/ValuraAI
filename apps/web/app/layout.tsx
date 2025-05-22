import "./globals.css";
import { AuthKitProvider,Impersonation } from "@workos-inc/authkit-nextjs/components";


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
      <body className="antialiased">
        <AuthKitProvider>
          {children}
        </AuthKitProvider>
        <link href="https://fonts.googleapis.com/css2?family=Junicode&display=swap" rel="stylesheet" />
      </body>
    </html>
  );
}
