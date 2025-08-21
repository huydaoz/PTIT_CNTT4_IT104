import { Component } from "react";
interface CheckMaleState {
  gender: string;
  submit: string;
}

export default class CheckMale extends Component<object, CheckMaleState> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submit: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      gender: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      submit: this.state.gender,
    });
  };

  render() {
    return (
      <div>
        <h3>Giới tính: {this.state.submit}</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Nam</label>
          <input
            type="radio"
            value={"Nam"}
            onChange={this.handleChange}
            checked={this.state.gender === "Nam"}
          />
          <br />
          <label htmlFor="">Nữ</label>
          <input
            type="radio"
            value={"Nữ"}
            onChange={this.handleChange}
            checked={this.state.gender === "Nữ"}
          />
          <br />
          <label htmlFor="">Khác</label>
          <input
            type="radio"
            value={"Khác"}
            onChange={this.handleChange}
            checked={this.state.gender === "Khác"}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
