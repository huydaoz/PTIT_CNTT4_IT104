import { Component } from "react";
type Props = {
  email: string;
};
export default class InputSubmit extends Component<object, Props> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Thông tin người dùng:", this.state);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Form</h3>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
