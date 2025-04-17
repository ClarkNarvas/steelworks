"use client"
import Link from "next/link"
import type { NewsConnectionQuery } from "../../tina/__generated__/types"
import { motion } from "framer-motion"

export interface PostListProps {
  data: NewsConnectionQuery
  variables?: any
  query?: string
  errors?: any
}

export default function PostList({ data }: PostListProps) {
  // Add null checking to handle undefined data
  const posts = data?.newsConnection?.edges || []

  // Format the date to be more human-friendly
  const formatDate = (dateString: string) => {
    if (!dateString) return ""

    const date = new Date(dateString)

    // Check if the date is valid
    if (isNaN(date.getTime())) return dateString

    // Format the date as "Month Day, Year"
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center text-[#0a2240]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, 0.01, 0.99],
        }}
      >
        News
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="show">
              {posts.map((post, index) => {
                // Add null check before accessing post.node
                if (!post?.node) return null

                // Use optional chaining for all nested properties
                const title = post.node.title || "Untitled"
                const filename = post.node._sys?.filename || ""
                const date = post.node.date || "No date"
                const formattedDate = formatDate(date)
                const category = post.node.category || "Uncategorized"

                return (
                  <motion.div key={post.node.id || post.cursor} className="border-b pb-8" variants={itemVariants}>
                    <Link href={`/news/${filename}`} className="group">
                      <h2 className="text-2xl font-bold text-[#0a2240] mb-2 group-hover:text-[#e4003b]">{title}</h2>
                    </Link>
                    <div className="flex items-center text-sm text-gray-600 space-x-2">
                      <span>{formattedDate}</span>
                      <span>•</span>
                      <Link
                        href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[#e4003b] hover:underline uppercase"
                      >
                        {category}
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </div>

        <motion.div
          className="md:w-1/4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">FILTER BY:</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/news" className="text-[#e4003b] hover:underline">
                  View All
                </Link>
              </li>
              <li>
                <Link href="/news/#" className="text-[#e4003b] hover:underline">
                  Example Category Here
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
