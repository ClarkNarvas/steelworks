import type { ReactNode } from "react"
import NavigationBar from "../components/navigation-bar"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Steelworks",
  description: "Your site description",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}