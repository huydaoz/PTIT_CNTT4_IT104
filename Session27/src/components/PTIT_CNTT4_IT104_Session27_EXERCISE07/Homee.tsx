import { Link } from "react-router-dom";

export default function Homee() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Trang chủ</h1>
      <nav>
        <Link to="/aboutt" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/abc">link sai</Link>
      </nav>
    </div>
  );
}
