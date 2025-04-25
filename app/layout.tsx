import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "EcoHope | Environmental Conservation",
  description: "Dedicated to protecting wildlife and ecosystems across Africa",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
