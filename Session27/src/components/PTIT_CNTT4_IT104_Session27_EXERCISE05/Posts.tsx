import { Link } from "react-router-dom";
import { posts } from "./postsData";

export default function Posts() {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          >
            <Link to={`/blog/posts/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
