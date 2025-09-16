import { useState } from "react";
import axios from "axios";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
export default function GetStudentById() {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState("");
  const SearchId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/students/${studentId}`
      );
      if (response.data) {
        setStudent(response.data);
      } else {
        setStudent(null);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError("Không tìm thấy sinh viên với ID đã nhập.");
        setStudent(null);
      } else {
        setError("Đã có lỗi xảy ra khi tìm kiếm sinh viên.");
        setStudent(null);
      }
    }
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Nhập ID sinh viên"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={SearchId}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {student && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin sinh viên</h3>
          <p>ID: {student.id}</p>
          <p>Họ tên: {student.student_name}</p>
          <p>Email: {student.email}</p>
          <p>Địa chỉ: {student.address}</p>
          <p>Điện thoại: {student.phone}</p>
          <p>Trạng thái: {student.status ? "Đang học" : "Nghỉ học"}</p>
          <p>Ngày tạo: {student.created_at}</p>
        </div>
      )}
    </div>
  );
}
