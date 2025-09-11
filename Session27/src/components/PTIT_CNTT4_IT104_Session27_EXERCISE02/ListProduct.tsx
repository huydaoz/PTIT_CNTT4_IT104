import { Link } from "react-router-dom";
import { productData } from "./products";

export default function ListProduct() {
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

      <h1>Danh sách sản phẩm</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {productData.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "250px",
            }}
          >
            <h4>{p.name}</h4>
            <p>{p.price}</p>
            <Link to={`/product/${p.id}`} style={{ color: "blue" }}>
              <button>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
