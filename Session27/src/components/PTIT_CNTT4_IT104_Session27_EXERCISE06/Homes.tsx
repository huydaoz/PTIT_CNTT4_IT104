import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavLink to="/www/home">Home</NavLink>
      <NavLink to="/www/product">Product</NavLink>
      <NavLink to="/www/detail">Detail</NavLink>
    </div>
  );
}
