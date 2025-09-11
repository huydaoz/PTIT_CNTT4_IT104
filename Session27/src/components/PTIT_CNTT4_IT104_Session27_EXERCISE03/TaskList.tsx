import { Link } from "react-router-dom";
import { tasks } from "./Data";

export default function TaskList() {
  return (
    <div style={{ textAlign: "center" }}>
      <nav
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        Trang chi tiết công việc
      </nav>

      <h1>Danh sách công việc</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {tasks.map((t) => (
          <div
            key={t.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "250px",
            }}
          >
            <h4>{t.title}</h4>
            <p>{t.description}</p>
            <Link to={`/task/${t.id}`} style={{ color: "blue" }}>
              <button>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
