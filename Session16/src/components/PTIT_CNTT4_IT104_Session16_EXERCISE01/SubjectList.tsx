import { Component } from "react";
type Subject = string[];
export default class SubjectList extends Component<object, Subject> {
  constructor(props: object) {
    super(props);
    this.state = ["Toán", "Văn", "Anh", "Hoá", "Sinh"];
  }

  render() {
    return (
      <div>
        <h1>Danh sách môn học</h1>
        <ul>
          {this.state.map((subject, index) => {
            return <li key={index}>{subject}</li>;
          })}
        </ul>
      </div>
    );
  }
}
