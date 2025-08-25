import { Component } from "react";
type props = {
  color: string;
  submit: string;
};
export default class FormColor extends Component<object, props> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "",
      submit: "",
    };
  }
  state = {
    color: "black",
    submit: "",
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submit: this.state.color,
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Color: {this.state.submit}</h3>
          <label htmlFor="">Màu sắc</label>
          <br />
          <input
            type="color"
            name="color"
            onChange={this.handleChange}
            value={this.state.color}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
