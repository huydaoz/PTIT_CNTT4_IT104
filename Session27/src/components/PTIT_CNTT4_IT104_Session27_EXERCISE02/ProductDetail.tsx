import { Link, useParams } from "react-router-dom";
import { productData } from "./products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((p) => p.id === Number(id));

  if (!product) {
    return <p style={{ textAlign: "center" }}>Không tìm thấy sản phẩm.</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <nav
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        Trang chi tiết sản phẩm
      </nav>

      <h2>Chi tiết sản phẩm</h2>
      <p>
        <b>Id:</b> {product.id}
      </p>
      <p>
        <b>Tên:</b> {product.name}
      </p>
      <p>
        <b>Giá:</b> {product.price}
      </p>
      <p>
        <b>Mô tả:</b> {product.description}
      </p>

      <Link to="/product" style={{ color: "blue" }}>
        Quay lại
      </Link>
    </div>
  );
}
