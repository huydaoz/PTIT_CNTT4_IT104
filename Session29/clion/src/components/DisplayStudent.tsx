import React, { useEffect, useState } from "react";
import { Button, Flex, Table } from "antd";
import type { TableProps, TableColumnsType } from "antd";

import axios from "axios";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface Student {
  id: number;
  student_name: string;
  email: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function DisplayStudent() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function dataStudent() {
      try {
        const response = await axios.get("http://localhost:8000/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Lỗi", error);
      }
    }
    dataStudent();
  }, []);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Student> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/students/${id}`);
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa sinh viên:", error);
    }
  };
  const columns: TableColumnsType<Student> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "student_name", key: "student_name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: boolean) => (value ? "Active" : "Block"),
    },
    { title: "Created At", dataIndex: "created_at", key: "created_at" },
    {
      title: "Action",
      key: "action",
      render: (_text: string, record: Student) => (
        <>
          <button
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
              padding: "0",
              color: "blue",
              marginLeft: "10px",
            }}
          >
            Sửa
          </button>
          <button
            style={{
              marginLeft: "10px",
              color: "red",
              cursor: "pointer",
              border: "none",
              background: "none",
              padding: "0",
            }}
            onClick={() => handleDelete(record.id)}
          >
            Xóa
          </button>
        </>
      ),
    },
  ];

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <button>+ Thêm sinh viên</button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table<Student>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={students.map((s) => ({ ...s, key: s.id }))}
      />
    </Flex>
  );
}
