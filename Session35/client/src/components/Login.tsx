import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/authSlice";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const handleLogin = () => {
    dispatch(login({ email, password }));
    if (!currentUser) {
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>LOGIN FORM</h2>
      <div style={{ margin: "10px 0" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "5px", width: "200px" }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "5px", width: "200px" }}
        />
      </div>
      <button onClick={handleLogin} style={{ padding: "5px 10px" }}>
        Login
      </button>
    </div>
  );
}
