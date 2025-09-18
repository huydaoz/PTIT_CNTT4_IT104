import { Form, Input, Button, Card } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

export default function Login() {
  const { email, password } = useSelector((state: RootState) => state);

  return (
    <Card title="Đăng nhập" style={{ width: 300, margin: "50px auto" }}>
      <Form initialValues={{ email, password }}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Nhập email!" }]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
