import { Form, Input, Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerAction } from "./store";
import Login from "./Login";

export default function Register() {
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(registerAction(values));
    setIsRegistered(true);
  };

  if (isRegistered) {
    return <Login />;
  }

  return (
    <Card title="Đăng ký" style={{ width: 300, margin: "50px auto" }}>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Nhập email!" }]}
        >
          <Input placeholder="Nhập email..." />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
