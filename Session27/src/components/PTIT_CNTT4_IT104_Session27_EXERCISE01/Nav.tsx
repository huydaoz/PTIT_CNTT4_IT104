import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function main() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "#f0f0f0",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          width: "80%",
          margin: "10px auto",
          fontWeight: "bold",
        }}
      >
        <NavLink
          to={"/"}
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Contact
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
