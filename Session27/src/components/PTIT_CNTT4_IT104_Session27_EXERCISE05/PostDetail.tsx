import { useParams } from "react-router-dom";
import { posts } from "./postsData";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>Bài viết không tồn tại.</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
