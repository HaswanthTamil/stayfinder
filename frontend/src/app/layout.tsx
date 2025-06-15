// /app/layout.tsx

import type { Metadata } from "next";
import "@/syles/globals.css";

export const metadata: Metadata = {
  title: "Stayfinder",
  description: "Find your perfect stay with Stayfinder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
