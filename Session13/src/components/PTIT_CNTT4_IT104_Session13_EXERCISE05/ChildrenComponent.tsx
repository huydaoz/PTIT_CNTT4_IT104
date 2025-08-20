import { Component } from "react";

type PropTypes = {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
};

export default class ChildrenComponent extends Component<PropTypes> {
  render() {
    return (
      <div>
        <p>ID: {this.props.product.id}</p>
        <p>Product name: {this.props.product.name}</p>
        <p>Price: {this.props.product.price} đ</p>
        <p>Quantity: {this.props.product.quantity}</p>
      </div>
    );
  }
}
