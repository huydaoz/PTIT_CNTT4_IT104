import { useState } from "react";
import bread from "../images/bread.jpg";
import cake from "../images/cake.jpg";
import hamburger from "../images/Hamburger.jpg";
import pizza from "../images/pizza.jpg";
type Product = {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number;
};
const data = [
  {
    id: 1,
    title: "Pizza",
    image: pizza,
    content: "pizza",
    price: 30,
  },
  {
    id: 2,
    title: "Hamburger",
    image: hamburger,
    content: "Hamburger",
    price: 40,
  },
  {
    id: 1,
    title: "Bread",
    image: bread,
    content: "bread",
    price: 20,
  },
  {
    id: 1,
    title: "Cake",
    image: cake,
    content: "Cake",
    price: 10,
  },
];
export default function ListProduct() {
  const [products, setProducts] = useState<Product[]>(data);
  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {products.map((item: Product, index: number) => {
                return (
                  <div>
                    <div className="media product" key={index}>
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src={pizza}
                            alt="pizza"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">{item.title}</h4>
                        <p>{item.content}</p>
                        <input
                          type="number"
                          name="quantity-product-1"
                          defaultValue={1}
                        />
                        <span className="price"> {item.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
