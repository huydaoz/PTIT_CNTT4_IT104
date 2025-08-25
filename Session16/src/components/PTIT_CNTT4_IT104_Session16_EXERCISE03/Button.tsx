import { Component } from "react";
type Buttons = {
  text: string;
  type: string;
};
export default class Button extends Component<Buttons> {
  constructor(props: Buttons) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={this.props.type}>{this.props.text}</button>
      </div>
    );
  }
}
