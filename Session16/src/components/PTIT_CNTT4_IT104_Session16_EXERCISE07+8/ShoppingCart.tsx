import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import type { ProductType } from "./product.data";

type CartItemType = ProductType & { quantity: number };

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: ProductType) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        if (exist.quantity + 1 > product.stock) {
          alert("Số lượng sản phẩm trong kho không đủ");
          return prev;
        }
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleIncrease = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? item.quantity + 1 > item.stock
            ? (alert("Số lượng sản phẩm trong kho không đủ"), item)
            : { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <button onClick={() => setShowCart(!showCart)} className="cart-button">
        giỏ {cart.length}
      </button>

      <ProductList onAddToCart={handleAddToCart} />

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
}
