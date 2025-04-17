import Link from 'next/link';

function PostList({ data }) {
  const posts = data.postConnection.edges.map(edge => ({
    title: edge.node.title,
    slug: edge.node._sys.filename,
    date: edge.node.date,
  }));
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl mb-8 text-center mt-3">Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="rounded-lg p-4 border-b group transition-shadow">
            <Link href={`/news/${post.slug}`} className="block">
              <h2 className="text-3xl m-0 mb-2 group-hover:stroke-pink-600">{post.title}</h2>
              <p className="text-gray-600 mt-5">{new Date(post.date).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;