import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Roboto_Mono } from "next/font/google"
import "./globals.css"
import "../styles/lockScroll.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "600", "700"],
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kellyn Ocampo - Marketing Strategist",
  description:
    "Professional portfolio of Kellyn Ocampo, Marketing Strategist specializing in digital marketing, brand strategy, and data-driven campaigns",
  generator: "Kellyn Ocampo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${robotoMono.variable}`}>
      <body className="bg-cyber-dark text-white font-roboto-mono">{children}</body>
    </html>
  )
}
