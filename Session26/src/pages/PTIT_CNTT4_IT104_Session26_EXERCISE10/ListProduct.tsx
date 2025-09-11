import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function ListProduct() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get("name")?.toLowerCase() || "";

  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: string;
      image: string;
    }[]
  >([]);

  const [search, setSearch] = useState("");

  const productData = [
    {
      id: 1,
      name: "Điện thoại iPhone 15 Pro",
      price: "30.000.000 VND",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    },
    {
      id: 2,
      name: "Điện thoại OPPO Reno11 5G",
      price: "10.600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot5A2oMCjLS6Rx3wGkF0b-DTEgB_YPnA5bg&s",
    },
    {
      id: 3,
      name: "Điện thoại vivo Y17s",
      price: "3.300.000 VND",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/314975/vivo-y17s-thumb-600x600.jpg",
    },
    {
      id: 4,
      name: "Điện thoại Nokia 8210 4G",
      price: "3.000.000 VND",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/286060/Nokia%208210-do-thumb-600x600.jpg",
    },
  ];

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productData));
    setProducts(productData);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(queryName)
  );

  const handleSearch = () => {
    navigate(`/list-product?name=${search}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>List product</h2>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "180px",
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: "100%" }} />
            <h4>{p.name}</h4>
            <p>{p.price}</p>
            <Link to={`/product/${p.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
