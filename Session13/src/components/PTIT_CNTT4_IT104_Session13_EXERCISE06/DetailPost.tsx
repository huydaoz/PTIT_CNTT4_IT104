import { Component } from "react";

type post = {
  id: number;
  title: string;
  content: string;
  author: string;
};
class DetailPost extends Component<post> {
  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <p>
          <b>Id:</b> {this.props.id}
        </p>
        <p>
          <b>Title:</b> {this.props.title}
        </p>
        <p>
          <b>Content:</b> {this.props.content}
        </p>
        <p>
          <b>Author:</b> {this.props.author}
        </p>
        <hr />
      </div>
    );
  }
}

export default DetailPost;
