import { client } from "../../tina/__generated__/client"
import PostList from "../../components/indexing/post-list"

export default async function NewsPage() {
  try {
    const response = await client.queries.newsConnection()

    // Pass the data property to the PostList component
    return <PostList data={response.data} />
  } catch (error) {
    console.error("Error fetching posts:", error)
    return <div>Error loading posts</div>
  }
}
