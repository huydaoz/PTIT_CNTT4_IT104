import { Component } from "react";
type Click = {
  clickMe: number;
};
export default class ClickCounter extends Component<object, Click> {
  constructor(props: object) {
    super(props);
    this.state = {
      clickMe: 0,
    };
  }
  handleClick = () => {
    this.setState((prev) => ({
      clickMe: prev.clickMe + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>Click count: {this.state.clickMe}</p>
      </div>
    );
  }
}
