import React from "react";
import "./App.css";
import ListProduct from "./components/ListProduct";
import ShoppingCart from "./components/ShoppingCart";
export default function App() {
  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          {/* Danh sach san pham */}
          <ListProduct />
          {/* Gio hang */}
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
