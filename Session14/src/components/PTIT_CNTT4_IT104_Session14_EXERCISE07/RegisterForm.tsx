import { Component, createRef } from "react";

type Account = {
  name: string;
  email: string;
  password: string;
  address: string;
};

type State = Account & {
  message: string;
};

export default class RegisterForm extends Component<object, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      message: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, address } = this.state;

    if (!name || !email || !password) {
      this.setState({
        ...this.state,
        message: "Tên sinh viên, Email và Mật khẩu không được để trống",
      });
      return;
    }

    const accounts: Account[] = JSON.parse(
      localStorage.getItem("accounts") || "[]"
    );

    const exist = accounts.find((acc) => acc.email === email);
    if (exist) {
      this.setState({
        ...this.state,
        message: "Email không được phép trùng",
      });
      return;
    }

    accounts.push({ name, email, password, address });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công",
    });

    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Đăng ký tài khoản</h3>

          {this.state.message && (
            <p style={{ color: "red" }}>{this.state.message}</p>
          )}

          <label>Tên sinh viên</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={this.nameInputRef}
          />
          <br />

          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />

          <label>Mật khẩu</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <label>Địa chỉ</label>
          <br />
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />

          <button>Đăng ký</button>
        </form>
      </div>
    );
  }
}
