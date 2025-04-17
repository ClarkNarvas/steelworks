import Link from "next/link"
import type { PostConnectionQuery } from "../../tina/__generated__/types"

export interface PostListProps {
  data: PostConnectionQuery
  variables?: any
  query?: string
  errors?: any
}

export default function PostList({ data }: PostListProps) {
  // Add null checking to handle undefined data
  const posts = data?.postConnection?.edges || []

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#0a2240]">News</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                // Add null check before accessing post.node
                if (!post?.node) return null

                // Use optional chaining for all nested properties
                const title = post.node.title || "Untitled"
                const filename = post.node._sys?.filename || ""
                const date = post.node.date || "No date"
                const category = post.node.category || "Uncategorized"

                return (
                  <div key={post.node.id || post.cursor} className="border-b pb-8">
                    <Link href={`/news/${filename}`} className="group">
                      <h2 className="text-2xl font-bold text-[#0a2240] mb-2 group-hover:text-[#e4003b]">{title}</h2>
                    </Link>
                    <div className="flex items-center text-sm text-gray-600 space-x-2 uppercase">
                      <span>{date}</span>
                      <span>•</span>
                      <Link
                        href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[#e4003b] hover:underline uppercase"
                      >
                        {category}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="md:w-1/4">
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
        </div>
      </div>
    </div>
  )
}
