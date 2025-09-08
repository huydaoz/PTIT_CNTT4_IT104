import { useEffect, useState } from "react";
import { Layout, message } from "antd";
import WarehouseForm from "./components/WarehouseForm";
import WarehouseTable from "./components/WarehouseTable";

const { Header, Content } = Layout;

export type Warehouse = {
  id: number;
  name: string;
  address: string;
  status: "Hoạt động" | "Ngừng hoạt động";
};

export default function App() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("warehouses");
    if (saved) setWarehouses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("warehouses", JSON.stringify(warehouses));
  }, [warehouses]);

  const addWarehouse = (warehouse: Omit<Warehouse, "id">) => {
    const newWarehouse: Warehouse = {
      id: warehouses.length + 1,
      ...warehouse,
    };
    setWarehouses([...warehouses, newWarehouse]);
    message.success("Thêm kho thành công!");
  };

  const deleteWarehouse = (id: number) => {
    setWarehouses(warehouses.filter((w) => w.id !== id));
    message.success("Xóa kho thành công!");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "green ",
          textAlign: "center",
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Quản Lý Kho
      </Header>
      <Content style={{ padding: 20 }}>
        <WarehouseForm onAdd={addWarehouse} />
        <WarehouseTable data={warehouses} onDelete={deleteWarehouse} />
      </Content>
    </Layout>
  );
}
