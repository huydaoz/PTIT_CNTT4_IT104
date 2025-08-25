import type { ProductType } from "./product.data";

type CartItemType = ProductType & { quantity: number };

type Props = {
  cart: CartItemType[];
  onClose: () => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function Cart({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div>
        <h3>Cart</h3>
        <hr />
        {cart.length === 0 ? (
          <p className="cart-item">Chưa có sản phẩm</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info">
                <p className="cart-name">{item.name}</p>
                <div className="cart-actions">
                  <button onClick={() => onIncrease(item.id)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <button
                    className="delete-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    xoá
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <hr />
        <p className="cart-total">Tổng tiền: {total.toLocaleString()} đ</p>
        <button onClick={onClose} className="close-btn">
          Đóng
        </button>
      </div>
    </div>
  );
}
