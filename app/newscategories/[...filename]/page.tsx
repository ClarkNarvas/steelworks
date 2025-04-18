import { client } from "../../../tina/__generated__/client"
import PostList from "../../../components/indexing/post-list"

// Force this page to be dynamically rendered at request time
export const dynamic = "force-dynamic"
// Disable static generation for this route
export const generateStaticParams = () => {
  return []
}
// Set revalidate to 0 to prevent caching
export const revalidate = 0

interface PageParams {
  params: {
    filename: string[] // This is an array with catch-all routes [...filename]
  }
}

export default async function NewsPage({ params }: PageParams) {
  // Extract the first element from the filename array
  const category = params?.filename?.[0]

  // Add validation to ensure category exists
  if (!category) {
    console.log("Params received:", JSON.stringify(params, null, 2))
    return <div>Error: Category parameter is undefined</div>
  }

  console.log("Fetching posts for category:", category)

  try {
    const response = await client.queries.newsConnection({
      filter: {
        category: {
          eq: category, // Now this is a string, not an array
        },
      },
      sort: "date",
    })

    // Pass the data property to the PostList component
    return <PostList data={response.data} />
  } catch (error) {
    console.error("Error fetching posts:", error)
    return <div>Error loading posts: {String(error)}</div>
  }
}
