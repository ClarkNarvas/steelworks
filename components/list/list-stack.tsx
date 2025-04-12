"use client"

import Image from "next/image"
import Link from "next/link";

export interface ListStackItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  ctaText?: string
  ctaAction?: () => void
}

interface ListStackProps {
  heading?: string
  items: ListStackItem[]
  className?: string
}

export default function ListStack({ heading = "Items", items, className = "" }: ListStackProps) {
  return (
    <div className="bg-gray-100 mt-9">
      <div className="mt-container">
        <div className={`mx-auto px-4 py-12 ${className}`}>
          {heading && (
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-gray-900">{heading}</h1>
              <div className="h-px bg-gray-300 w-full mt-4"></div>
            </div>
          )}

          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.id} className="grid md:grid-cols-2 gap-6">
                <div className="bg-white h-64 md:h-auto w-full relative">
                  <Image
                    src={item.imageUrl || "/placeholder.svg?height=300&width=500"}
                    alt={`${item.title} image`}
                    fill
                    className="object-cover"
                    priority={item.id === items[0].id}
                  />
                </div>
                <div className="space-y-4">
                  <div className="h-px bg-gray-300 w-full mb-4 md:block"></div>
                  <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  {item.ctaText && (
                    <Link href="{item.ctaAction}"className="mt-button mt-button-red mt-3">{item.ctaText}</Link>
                  )}

                      
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

