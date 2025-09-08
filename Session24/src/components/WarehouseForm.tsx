import { Button, Form, Input, Select } from "antd";
import type { Warehouse } from "../App";

type Props = {
  onAdd: (warehouse: Omit<Warehouse, "id">) => void;
};

export default function WarehouseForm({ onAdd }: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: Omit<Warehouse, "id">) => {
    if (!values.name) {
      return;
    }
    onAdd(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
      style={{ margin: "20px 0" }}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Tên kho không được để trống!" }]}
      >
        <Input placeholder="Tên kho" />
      </Form.Item>
      <Form.Item name="address">
        <Input placeholder="Địa chỉ" style={{ width: 250 }} />
      </Form.Item>
      <Form.Item name="status" initialValue="Hoạt động">
        <Select
          style={{ width: 150 }}
          options={[
            { value: "Hoạt động", label: "Hoạt động" },
            { value: "Ngừng hoạt động", label: "Ngừng hoạt động" },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
}
