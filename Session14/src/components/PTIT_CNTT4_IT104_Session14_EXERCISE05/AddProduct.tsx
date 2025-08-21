import { Component } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default class AddProduct extends Component<object, Product> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: "SP001",
      name: "Cam da xanh",
      price: 20000,
      quantity: 10,
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Thông tin sản phẩm:", this.state);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Thêm sản phẩm mới</h3>
          <label htmlFor="">Mã sản phẩm</label>
          <br />
          <input
            type="text"
            value={this.state.id}
            name="id"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Tên sản phẩm</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="">Giá</label>
          <br />
          <input
            type="number"
            value={this.state.price}
            name="price"
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="">Số lượng</label>
          <br />
          <input
            type="number"
            value={this.state.quantity}
            name="quantity"
            onChange={this.handleChange}
          />

          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
