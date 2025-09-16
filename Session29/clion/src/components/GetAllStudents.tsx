import axios from "axios";
import { useState, useEffect } from "react";
type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function GetAllStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    async function Students() {
      try {
        const response = await axios.get("http://localhost:8000/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Lỗi", error);
      }
    }
    Students();
  }, []);
  console.log(students);
  return <div></div>;
}
