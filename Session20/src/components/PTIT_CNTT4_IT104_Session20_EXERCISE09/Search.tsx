import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Apple iPhone 13",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  { id: 5, name: "Xiaomi Mi 11", description: "Điện thoại thông minh giá rẻ" },
];

export default function Search() {
  const [query, setQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div>
        <h2>Tìm kiếm sản phẩm</h2>

        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <p>
            {filteredData.length} kết quả tìm thấy cho "<b>{query}</b>"
          </p>
        )}

        <div>
          {filteredData.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
