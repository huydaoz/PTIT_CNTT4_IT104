import { Component } from "react";
import DetailPost from "./DetailPost";

export default class ListPost extends Component {
  render() {
    const posts = [
      {
        id: 1,
        title: "Tại sao nên học ReactJS",
        content: "Học ReactJS để đi làm",
        author: "David",
      },
      {
        id: 2,
        title: "Props trong ReactJS",
        content:
          "Props giúp truyền dữ liệu từ component con xuống component cha",
        author: "Linda",
      },
      {
        id: 3,
        title: "State trong ReactJS là gì?",
        content: "State giúp trữ trạng thái dữ liệu bên trong một component",
        author: "John",
      },
    ];
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {posts.map((post) => (
          <DetailPost
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      </div>
    );
  }
}
