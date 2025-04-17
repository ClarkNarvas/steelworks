"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/uploads/mt-logo-red.png"
            alt="Marie Tidball MP for Penistone & Stocksbridge"
            width={180}
            height={60}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-gray-900 transition-colors hover:text-red-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Action Buttons - Right aligned */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/support" className="whitespace-nowrap text-base font-medium text-green-700 hover:text-green-800">
            Get support &gt;
          </Link>
          <Button className="whitespace-nowrap rounded-full bg-red-600 px-6 hover:bg-red-700">Newsletter</Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="ml-auto">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6 p-5">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-gray-900 transition-colors hover:text-red-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 pt-4">
                  <Link
                    href="/support"
                    className="text-lg font-medium text-green-700 hover:text-green-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Get support &gt;
                  </Link>
                  <Button
                    className="w-full rounded-full bg-red-600 px-6 hover:bg-red-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Newsletter
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
