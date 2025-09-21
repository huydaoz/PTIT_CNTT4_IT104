import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../interface/interface";

export default function ShoppingCart() {
  const cart = useSelector(
    (state: {
      cart: {
        cart: Product[];
      };
    }) => state.cart.cart
  );
  const dispatch = useDispatch();

  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id: number) => {
    if (confirm("Are you sure to delete this product?")) {
      dispatch({ type: "DELETE", payload: id });
      alert("Delete cart successfully");
    }
  };

  if (cart.length === 0) {
    return <p>Empty product in your cart</p>;
  }

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {cart.map((item: Product, index: number) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => decrease(item.id)}>-</button>
                    <input type="number" value={item.quantity} readOnly />
                    <button onClick={() => increase(item.id)}>+</button>
                  </td>
                  <td>
                    <button
                      className="label label-danger"
                      onClick={() => remove(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot id="my-cart-footer">
              <tr>
                <td colSpan={4}>
                  There are <b>{cart.length}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                  {cart.reduce(
                    (total: number, item: Product) =>
                      total + item.price * item.quantity,
                    0
                  )}{" "}
                  USD
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
