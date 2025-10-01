import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";

import axios from "axios";
import type { Category, Product } from "../utils/types";

type ProductStatus = "active" | "inactive";

type ProductRow = {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
};

export default function Products() {
  const [rows, setRows] = useState<ProductRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [url, setUrl] = useState<string>("")

  //ham lay tat ca danh muc 
  const getAllCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/categories`)
      setCategories(response.data)
    } catch (error) {
      console.log("Error: ", error);

    }
  }

  useEffect(() => {
    getAllCategories()
    getAllProduct()
  }, [])


  //ham khi onchange anh gui du lieu len cloudinary
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", import.meta.env.VITE_PROJECT_NAME);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        formData
      );

      console.log("Cloudinary response:", response.data);
      setUrl(response.data.secure_url);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };


  //ham gui thong tin tong len tren json server 
  const addProduct = async (new_Product: Product) => {
    try {
      const response = await axios.post(`http://localhost:8080/product`, new_Product)
      //  console.log("resposnse", response.data)
      setRows([...rows, response.data])
    } catch (error) {
      console.log("Error: ", error);

    }

  }


  //lay tat ca san pham tren server ve 
  const getAllProduct = async () => {
    const res = await axios.get("http://localhost:8080/product")
    setRows(res.data)
  }

  //xoa
  const handleDelete = async (id: string | number) => {
    try {
      await axios.delete(`http://localhost:8080/product/${id}`)
      return id
    } catch (error) {
      console.log("Error: ", error);

    }
  }

  const handleEdit = async (product: ProductRow) => {
    try {
      const res = await axios.put(`http://localhost:8080/product/${product.id}`, {
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        status: product.status
      })
      return res.data
    } catch (error) {
      console.log("Error: ", error);

    }
  }
  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<ProductRow> = [
    { title: "Mã", dataIndex: "code", key: "code", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Danh mục", dataIndex: "category", key: "category", width: 160 },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: ProductRow) {
    // handleEdit(row)
    setEditing(row);
    setOpen(true);
  }

  function onDelete(id: string) {
    handleDelete(id)
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  interface ProductFormValues {
    code: string;
    name: string;
    category: string;
    price: number | string;
    image?: string;
    status: ProductStatus;
  }

  function onSubmit(values: ProductFormValues) {
    const next: ProductRow = {
      id: editing?.id || String(Date.now()),
      code: editing?.code || "SP" + Date.now(),
      name: values.name,
      category: values.category,
      price: Number(values.price) || 0,
      image: url || editing?.image || "",
      status: values.status,
    };

    if (editing) {
      // cập nhật
      handleEdit(next).then((updated) => {
        setRows((prev) => prev.map(r => r.id === next.id ? next : r));
      });
    } else {
      // tạo mới
      addProduct(next);
    }
    setOpen(false);
    setUrl(""); // reset url sau mỗi lần submit
  }


  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as ProductStatus) || "")}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          {/* <Form.Item
            name="code"
            label="Mã"
            rules={[{ required: true, message: "Nhập mã" }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Chọn danh mục" }]}
          >
            <Select
              options={
                categories.map((c) => {
                  return {
                    value: c.id,
                    label: c.name
                  }
                }
                )
              }
              placeholder="Nhập tên danh mục"
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item label="Ảnh (URL)">
            <Input onChange={handleChange} type="file" placeholder="Dán URL ảnh" />
            {url && (
              <div style={{ marginTop: 8 }}>
                <Image src={url} width={80} />
              </div>
            )}
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
