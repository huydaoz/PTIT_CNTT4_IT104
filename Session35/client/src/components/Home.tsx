import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { logout } from "../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!currentUser) {
    return <p>Vui lòng đăng nhập.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Trang chủ</h2>
      <p>User Name: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <button onClick={handleLogout} style={{ padding: "5px 10px" }}>
        Đăng xuất
      </button>
    </div>
  );
}
