import type React from "react"
import NavigationBar from "../components/navigation-bar"
import { poppins, literata } from "./fonts"
import "./globals.css"

export const metadata = {
  title: "Steelworks",
  description: "Test Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${literata.variable}`}>
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}