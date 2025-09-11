import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "./Datas";

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(searchQuery);

  useEffect(() => {
    setKeyword(searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/products?search=${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ marginBottom: "12px" }}>Danh sách sản phẩm</h2>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Nhập từ khóa"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ padding: "6px", width: "200px" }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "6px 12px", marginLeft: "8px" }}
        >
          Search
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <strong>{p.name}</strong> - {p.price.toLocaleString("vi-VN")}₫
            <p style={{ margin: "4px 0 0" }}>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
