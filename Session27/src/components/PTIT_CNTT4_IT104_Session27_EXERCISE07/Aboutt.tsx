import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <p>Đây là trang giới thiệu</p>
      <Link to="/homee">Quay về Trang chủ</Link>
    </div>
  );
}
