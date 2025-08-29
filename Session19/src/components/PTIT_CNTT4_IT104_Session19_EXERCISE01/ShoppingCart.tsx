import { useMemo } from "react";

const cartItems = [
  { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
];

export default function ShoppingCart() {
  const total = useMemo(() => {
    console.log("Tính lại tổng giá trị...");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, []);

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Giá: {item.price.toLocaleString()} VNĐ - Số lượng:{" "}
            {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Tổng giá trị đơn hàng: {total.toLocaleString()} VNĐ</h3>
    </div>
  );
}
