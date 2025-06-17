// /app/layout.tsx

import type { Metadata } from "next"
import "@/syles/globals.css"
import NavBar from "@/components/nonreusable/NavBar"
import Header from "@/components/nonreusable/Header"

export const metadata: Metadata = {
  title: "Stayfinder",
  description: "Find your perfect stay with Stayfinder",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
