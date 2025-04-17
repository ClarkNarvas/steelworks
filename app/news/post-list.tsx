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
  // This is the key fix - use optional chaining and provide a fallback empty array
  const posts = data?.postConnection?.edges || []

  // The rest of your component can remain the same
  // Just make sure to add optional chaining when accessing nested properties

  return (
    // Your original HTML structure here
    <div>
      <h1 className="text-3xl font-bold mb-4">News</h1>
      {/* Use your original HTML structure, just add null checks */}
      {posts.map((post) => {
        // Add null check before accessing post.node
        if (!post?.node) return null

        // Use optional chaining for all nested properties
        const title = post.node.title || "Untitled"
        const filename = post.node._sys?.filename || ""

        return (
          <div key={post.node.id || post.cursor} className="border p-4 rounded-lg">
            <Link href={`/news/${filename}`}>
              <h2 className="text-xl font-semibold hover:underline">{title}</h2>
            </Link>
            {/* Rest of your original structure */}
          </div>
        )
      })}

      {posts.length === 0 && <p>No posts found.</p>}
    </div>
  )
}
