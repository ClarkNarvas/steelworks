import Post from "./client-page";
import client from "../../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.newsConnection();
  const paths = pages.data?.newsConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}


export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {

  const data = await client.queries.news({
    relativePath: `${params.filename}.md`,
  });

  return (
    <Post {...data}></Post>
  );
}