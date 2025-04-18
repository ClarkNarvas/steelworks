import { client } from "../../../tina/__generated__/client"
import PostList from "../../../components/indexing/post-list"

interface PageParams {
  params: {
    filename: string[]
  }
}

export default async function NewsPage({ params }: PageParams) {
  // Extract the first element from the filename array
  const category = params?.filename?.[0]

  // Add validation to ensure category exists
  if (!category) {
    return <div className="container mx-auto p-4">Error: Category parameter is undefined</div>
  }

  try {
    const response = await client.queries.newsConnection({
      filter: {
        category: {
          eq: category  // Now this is a string, not an array
        }
      }
    })

    // Make sure we're returning a valid React element, not just the data
    return <PostList data={response.data} />
  } catch (error) {
    console.error("Error fetching posts:", error)
    // Return a valid React element for the error case
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Error Loading Posts</h1>
        <p className="text-red-500">There was a problem loading posts for this category.</p>
        <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto text-sm">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    )
  }
}