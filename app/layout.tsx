import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavigationBar from "../components/navigation-bar"
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
