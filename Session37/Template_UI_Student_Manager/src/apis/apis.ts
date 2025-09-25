import axios from "axios";
import type { Student } from "../utils/types";

const BASE_URL = "http://localhost:8080/students";

// Lấy tất cả sinh viên
export const API_GET_ALL_STUDENTS = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Thêm sinh viên
export const API_ADD_STUDENT = async (newStudent: Student) => {
  const response = await axios.post(BASE_URL, newStudent);
  return response.data;
};

// Xóa sinh viên
export const API_DELETE_STUDENT = async (id: number | string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

// Cập nhật sinh viên
export const API_UPDATE_STUDENT = async (
  id: number | string,
  updated: Partial<Student>
) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updated);
  return response.data;
};
