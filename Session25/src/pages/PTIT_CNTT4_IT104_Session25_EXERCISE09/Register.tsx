import React from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: RegisterForm) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      message.error("mật khẩu không được để trống");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u: { email: string }) => u.email === email);
    if (exists) {
      message.error("Email already exists!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    message.success("Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Form
        name="register"
        onFinish={onFinish}
        style={{ width: 400 }}
        layout="vertical"
      >
        <h2 style={{ textAlign: "center" }}>Create account</h2>

        <Form.Item
          label="Your email"
          name="email"
          rules={[
            { required: true, message: "Nhập email!" },
            { type: "email", message: "Email không đúng định dạng" },
          ]}
        >
          <Input placeholder="name@company.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu" }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "mật khẩu không được để trống" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("mật khẩu không khớp với mật khẩu đã nhập")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create an account
          </Button>
        </Form.Item>

        <div style={{ textAlign: "center" }}>
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
