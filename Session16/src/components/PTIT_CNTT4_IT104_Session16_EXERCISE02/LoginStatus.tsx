import { Component } from "react";
type Status = {
  check: boolean;
};
export default class LoginStatus extends Component<object, Status> {
  constructor(props: object) {
    super(props);
    this.state = {
      check: false,
    };
  }
  handleClick = () => {
    this.setState({ check: !this.state.check });
  };

  render() {
    return (
      <div>
        <h1> {this.state.check ? "xin chào user" : "Đăng nhập để tiếp tục"}</h1>

        <button onClick={this.handleClick}>
          {this.state.check ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
