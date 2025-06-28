import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ContentProvider } from "@/contexts/content-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Whimsical Help Center",
  description: "Get answers, gain understanding, and learn how to work faster in Whimsical.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>{children}</ContentProvider>
      </body>
    </html>
  )
}
