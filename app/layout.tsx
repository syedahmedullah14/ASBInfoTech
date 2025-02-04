import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import type React from "react" // Added import for React
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ASB Infotech - Technology Solutions Provider",
  description:
    "ASB Infotech provides technology solutions across Financial, Retail, Insurance, Educational, E-Commerce, Security, and Medical/Pharmaceutical domains.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  )
}

