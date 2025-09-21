import { useDispatch } from "react-redux";
import bread from "../images/bread.jpg";
import cake from "../images/cake.jpg";
import hamburger from "../images/Hamburger.jpg";
import pizza from "../images/pizza.jpg";
import type { Product } from "../interface/interface";

const data: Product[] = [
  {
    id: 1,
    title: "Pizza",
    image: pizza,
    content: "pizza",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    title: "Hamburger",
    image: hamburger,
    content: "Hamburger",
    price: 40,
    quantity: 1,
  },
  {
    id: 3,
    title: "Bread",
    image: bread,
    content: "bread",
    price: 20,
    quantity: 1,
  },
  {
    id: 4,
    title: "Cake",
    image: cake,
    content: "Cake",
    price: 10,
    quantity: 1,
  },
];

export default function ListProduct() {
  const dispatch = useDispatch();

  const handleAdd = (item: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {data.map((item: Product) => (
            <div className="media product" key={item.id}>
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src={item.image}
                    alt={item.title}
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{item.title}</h4>
                <p>{item.content}</p>
                <input
                  type="number"
                  name={`quantity-product-${item.id}`}
                  defaultValue={1}
                />
                <span className="price"> {item.price} USD</span>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleAdd(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
