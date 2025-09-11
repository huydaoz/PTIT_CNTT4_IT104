import { Link, useParams } from "react-router-dom";
import { tasks } from "./Data";

export default function DetailTask() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <p style={{ textAlign: "center" }}>Không tìm thấy công việc.</p>;
  }

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

      <h2>Chi tiết công việc</h2>
      <p>
        <b>Id:</b> {task.id}
      </p>
      <p>
        <b>Tiêu đề:</b> {task.title}
      </p>
      <p>
        <b>Mô tả:</b> {task.description}
      </p>

      <Link to="/task" style={{ color: "blue" }}>
        Quay lại
      </Link>
    </div>
  );
}
