"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  slug: string
  title: string
  description: string
  date: string
  image: string
}

export default function IndexScroll() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])

  useEffect(() => {
    // Fetch news items on the client side
    const fetchNews = async () => {
      const response = await fetch("/api/news")
      const data = await response.json()
      setNewsItems(data)
    }

    fetchNews()
  }, [])

  return (
    <div className="mt-container">
      <h2 className="text-4xl font-bold text-[#d1293e] mb-6">Latest News</h2>
      <div className="relative">
        <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex gap-4 pb-4">
            {newsItems.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="w-[300px] shrink-0 group">
                <div className="bg-gray-200 aspect-[4/3] mb-2 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg?height=225&width=300"}
                    alt={item.title}
                    width={300}
                    height={225}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#4a2b33]">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 -mt-10">
          <Link href="/news" className="text-[#4a2b33] font-bold text-xl hover:underline">
            More News &gt;
          </Link>
        </div>
      </div>
    </div>
  )
}

