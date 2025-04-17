import type React from "react"
import NavigationBar from "../components/navigation-bar"
import "./globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
