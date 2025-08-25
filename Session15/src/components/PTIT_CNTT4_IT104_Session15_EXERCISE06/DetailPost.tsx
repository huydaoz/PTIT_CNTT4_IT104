import { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type DetailPostProps = {
  post: Post;
};

export default class DetailPost extends Component<DetailPostProps> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div>
        <p>
          <strong>Id:</strong> {id}
        </p>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Content:</strong> {content}
        </p>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <hr />
      </div>
    );
  }
}
