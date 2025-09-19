import { useSelector } from "react-redux";
import type { Product } from "../interface/interface";

export default function ShoppingCart() {
  const result = useSelector((data: any) => {
    return data.cart.cart;
  });
  return (
    <div>
      <div>
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
                  {result.map((item: Product, index: number) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                          <button>-</button>
                          <input
                            name="cart-item-quantity-1"
                            type="number"
                            defaultValue={item.quantity}
                          />
                          <button>+</button>
                        </td>
                        <td>
                          <a
                            className="label label-info update-cart-item"
                            data-product=""
                          >
                            Update
                          </a>
                          <a
                            className="label label-danger delete-cart-item"
                            data-product=""
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>2</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      630 USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
        </div>
      </div>
    </div>
  );
}
