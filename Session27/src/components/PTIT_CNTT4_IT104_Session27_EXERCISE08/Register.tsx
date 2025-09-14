import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import type { FormProps } from "antd";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish: FormProps<RegisterForm>["onFinish"] = (values) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      message.error("Mật khẩu nhập lại không khớp!");
      return;
    }

    const users: RegisterForm[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    const exists = users.find((u) => u.email === email);

    if (exists) {
      message.error("Email đã được sử dụng!");
      return;
    }

    const newUser = { email, password, confirmPassword };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    message.success("Đăng ký thành công! Hãy đăng nhập.");
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
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
      <h2>Create account</h2>
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

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Create an account
          </Button>
        </Form.Item>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
