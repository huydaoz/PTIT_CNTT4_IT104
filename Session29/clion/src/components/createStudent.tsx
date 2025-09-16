import axios from "axios";
import React, { useState, useEffect } from "react";

type Student = {
  id?: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at?: string;
};

export default function CreateStudent() {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
  });

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await axios.get("http://localhost:8000/students");
    setStudents(response.data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const addStudent = async () => {
    const response = await axios.post("http://localhost:8000/students", {
      ...newStudent,
      created_at: new Date().toISOString().split("T")[0],
    });
    setStudents([...students, response.data]);
    setNewStudent({
      student_name: "",
      email: "",
      address: "",
      phone: "",
      status: true,
    });
  };

  return (
    <div>
      <input
        name="student_name"
        value={newStudent.student_name}
        onChange={handleChange}
        placeholder="Họ tên"
      />
      <input
        name="email"
        value={newStudent.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="address"
        value={newStudent.address}
        onChange={handleChange}
        placeholder="Địa chỉ"
      />
      <input
        name="phone"
        value={newStudent.phone}
        onChange={handleChange}
        placeholder="Điện thoại"
      />
      <select
        name="status"
        value={String(newStudent.status)}
        onChange={handleChange}
      >
        <option value="true">Active</option>
        <option value="false">Block</option>
      </select>
      <button onClick={addStudent}>Thêm mới</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.student_name} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
