import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Product preview card compoenent",
  description: "A Challenge from Frontendmentor.io",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-cream`}>{children}</body>
    </html>
  )
}
