import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import type { FormProps } from "antd";

type LoginForm = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish: FormProps<LoginForm>["onFinish"] = (values) => {
    const { email, password } = values;
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      message.success("Đăng nhập thành công!");
      setLoading(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      message.error("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <h2>Login account</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Your email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input placeholder="name@company.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Login an account
          </Button>
        </Form.Item>
      </Form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
