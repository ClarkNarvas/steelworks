import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
        <div className="pl-10 flex pr-10 pt-5 bg-white content-center pb-5 shadow-lg sticky top-0">

        <Link href="/">
        <Image
          src="/uploads/mt-logo-red.png"
          width={150}
          height={500}
          alt="Picture of the author"
        />
        </Link>

          <div className="ml-auto mr-auto content-center">

            <Link href="/news">News</Link>
          </div>
            
          <div className="">
            
          </div>

        </div>
        
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
