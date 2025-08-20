import { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default class ParentComponent extends Component {
  render() {
    const product = {
      id: 1,
      name: "Bưởi ba roi",
      price: 12000,
      quantity: 6,
    };
    return (
      <div>
        <ChildrenComponent product={product} />
      </div>
    );
  }
}
