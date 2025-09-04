import { Button } from "antd";

export default function Ex1() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button type="primary">Lưu</Button>
      <Button type="primary" style={{ backgroundColor: "#6c757d" }}>
        Hủy
      </Button>
      <Button type="primary" style={{ backgroundColor: "#198754" }}>
        Thành công
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#ffc107", color: "black" }}
      >
        Cảnh báo
      </Button>
      <Button type="primary" style={{ backgroundColor: "#dc3545" }}>
        Báo lỗi
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#0dcaf0", color: "black" }}
      >
        Thông tin
      </Button>
      <Button type="link" style={{ textDecoration: "underline" }}>
        Đường dẫn
      </Button>
    </div>
  );
}
