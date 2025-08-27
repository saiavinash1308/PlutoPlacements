import type React from "react"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "PlutoPlacements - Professional HR Solutions & Bulk Hiring Services",
  description:
    "Leading HR solutions provider specializing in bulk hiring, workforce management, and corporate staffing across BPO, KPO, IT, and Non-IT sectors.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>
        <Header />
        {children}
        <SocialSidebar />
      </body>
    </html>
  )
}
