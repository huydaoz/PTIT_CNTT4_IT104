import { Component } from "react";
type user = {
  name: string;
  email: string;
  age: number | null;
  check: boolean;
  message: string;
};

export default class UserForm extends Component<object, user> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: null,
      check: false,
      message: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      check: true,
    });

    const { name, email, age } = this.state;

    if (!name || !email || !age) {
      this.setState({
        ...this.state,
        message: "Tên sinh viên, Email và Tuổi không được để trống",
      });
      return;
    }
    if (!email.includes("@")) {
      this.setState({
        ...this.state,
        message: "Email không đúng định dạng",
      });
      return;
    }
    if (age < 1) {
      this.setState({
        ...this.state,
        message: "Tuổi không được âm",
      });
      return;
    }
  };
  handleClear = () => {
    this.setState({
      name: "",
      email: "",
      age: 0,
      check: false,
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Nhập thông tin người dùng</h3>
          <input
            type="text"
            placeholder="Họ tên"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Tuổi"
            name="age"
            value={this.state.age || ""}
            onChange={this.handleChange}
          />

          <button type="submit" onClick={this.handleSubmit}>
            Gửi
          </button>
          <button type="button" onClick={this.handleClear}>
            Xoá tất cả
          </button>
        </form>
        <ul>
          <h3>Thông tin người dùng</h3>
          <li>Họ và tên: {this.state.check && this.state.name}</li>
          <li>Email: {this.state.check && this.state.email}</li>
          <li>Tuổi: {(this.state.check && this.state.age) || ""}</li>
        </ul>
        <div>{!this.state.check && <p>{this.state.message}</p>}</div>
      </div>
    );
  }
}
