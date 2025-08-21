import { Component } from "react";

type LoginState = {
  email: string;
  password: string;
  message: string;
};

type Account = {
  name: string;
  email: string;
  password: string;
  address: string;
};

export default class Login extends Component<object, LoginState> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({
        ...this.state,
        message: "Email và Mật khẩu không được để trống",
      });
      return;
    }

    const accounts: Account[] = JSON.parse(
      localStorage.getItem("accounts") || "[]"
    );

    const check = accounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (check) {
      this.setState({
        ...this.state,
        message: "Đăng nhập thành công",
      });
    } else {
      this.setState({
        ...this.state,
        message: "Đăng nhập thất bại",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Đăng nhập tài khoản</h3>

          {this.state.message && (
            <p
              style={{
                color: this.state.message.includes("thành công")
                  ? "green"
                  : "red",
              }}
            >
              {this.state.message}
            </p>
          )}

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

          <button>Đăng nhập</button>
        </form>
      </div>
    );
  }
}
