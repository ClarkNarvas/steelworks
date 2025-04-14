import Link from "next/link";

export default function PostList(props) {
  return (


<div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl mb-8 text-center mt-3">News</h1>
      <ul>
      {props.data.postConnection.edges.map((post) => (
          <li key={post.slug} className=" rounded-lg p-4 border-b group transition-shadow">
            <Link href={`/posts/${post.node._sys.filename}`} className="block">
              <h2 className="text-3xl m-0 mb-2 group-hover:stroke-pink-600">{post.node._sys.filename}</h2>
              <p className="text-gray-600 mt-5">Date Here</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
