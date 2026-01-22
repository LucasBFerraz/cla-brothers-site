import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Rajdhani for bold military aesthetic
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Battlefield V clan
export const metadata: Metadata = {
  title: "Clã Brothers Oficial - Battlefield V",
  description:
    "Unidos pela estratégia. Movidos pela vitória. Clã oficial de Battlefield V focado em cooperação e excelência tática.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${rajdhani.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
