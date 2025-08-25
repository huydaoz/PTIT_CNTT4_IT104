import React, { Component } from "react";
type Props = {
  range: string;
  submit: string;
};

export default class FormRange extends Component<object, Props> {
  constructor(props: object) {
    super(props);
    this.state = {
      range: "",
      submit: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      range: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submit: this.state.range,
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Tiến độ hoàn thành: {this.state.submit} %</h3>
          <input type="range" onChange={this.handleChange} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
