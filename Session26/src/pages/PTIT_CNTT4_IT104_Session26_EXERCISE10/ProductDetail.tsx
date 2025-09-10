import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const product = products.find((p: { id: number }) => p.id === Number(id));

  if (!product) {
    return <h3>Không tìm thấy sản phẩm</h3>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Chi tiết sản phẩm</h2>
      <p>
        <b>Id:</b> {product.id}
      </p>
      <p>
        <b>ProductName:</b> {product.name}
      </p>
      <p>
        <b>Price:</b> {product.price}
      </p>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
    </div>
  );
}
