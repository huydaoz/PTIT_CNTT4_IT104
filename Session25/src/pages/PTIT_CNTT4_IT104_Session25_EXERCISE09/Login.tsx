import React from "react";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const onFinish = (values: LoginForm) => {
    const { email, password } = values;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (!user) {
      message.error("Invalid email or password!");
      return;
    }

    message.success("Login successfully!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Form
        name="login"
        onFinish={onFinish}
        style={{ width: 400 }}
        layout="vertical"
      >
        <h2 style={{ textAlign: "center" }}>Login account</h2>

        <Form.Item
          label="Your email"
          name="email"
          rules={[
            { required: true, message: "nhập email" },
            { type: "email", message: "Email không đúng định dạng" },
          ]}
        >
          <Input placeholder="name@company.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login an account
          </Button>
        </Form.Item>

        <div style={{ textAlign: "center" }}>
          Chưa có tài khoản? <Link to="/register">Đăng ký tại đây</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
