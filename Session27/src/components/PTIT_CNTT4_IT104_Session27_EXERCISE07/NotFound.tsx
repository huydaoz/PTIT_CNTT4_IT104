import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>404</h1>
      <p>Trang bạn tìm không tồn tại.</p>
      <div style={{ marginTop: "12px" }}>
        <button onClick={() => navigate("/")} style={{ marginRight: "10px" }}>
          Quay về trang chủ
        </button>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    </div>
  );
}
