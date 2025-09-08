import { Button, Modal, Table, Tag } from "antd";
import type { Warehouse } from "../App";
import { useState } from "react";

type Props = {
  data: Warehouse[];
  onDelete: (id: number) => void;
};

export default function WarehouseTable({ data, onDelete }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const confirmDelete = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedId) onDelete(selectedId);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Tên kho",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Hoạt động" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (record: Warehouse) => (
        <>
          <Button type="primary" style={{ marginRight: 8 }}>
            Sửa
          </Button>
          <Button danger onClick={() => confirmDelete(record.id)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 2 }}
      />
      <Modal
        title="Xác nhận"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xóa"
        cancelText="Hủy"
      >
        Bạn có chắc chắn muốn xóa kho này không?
      </Modal>
    </>
  );
}
