import React, { Component } from "react";
type Props = {
  date: string;
  submit: string;
};

export default class FormDate extends Component<object, Props> {
  constructor(props: object) {
    super(props);
    this.state = {
      date: "",
      submit: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submit: this.state.date,
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Ngày sinh: {this.state.submit}</h3>
          <input type="date" onChange={this.handleChange} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
