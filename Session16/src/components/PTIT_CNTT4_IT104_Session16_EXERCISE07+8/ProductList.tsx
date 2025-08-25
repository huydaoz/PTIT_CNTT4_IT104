import { products } from "./product.data";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
}

interface Props {
  onAddToCart: (product: Product) => void;
}

export default function ProductList({ onAddToCart }: Props) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p className="price">{p.price.toLocaleString()} đ</p>
          <button onClick={() => onAddToCart(p)} className="add-btn">
            Thêm vào giỏ hàng
          </button>
        </div>
      ))}
    </div>
  );
}
