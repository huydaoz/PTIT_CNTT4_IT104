import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  API_GET_ALL_STUDENTS,
  API_ADD_STUDENT,
  API_DELETE_STUDENT,
  API_UPDATE_STUDENT,
} from "../../apis/apis";
import type { Student } from "../../utils/types";

export const getAllStudents = createAsyncThunk("students/getAll", async () => {
  const data = await API_GET_ALL_STUDENTS();
  return data;
});

export const addStudent = createAsyncThunk(
  "students/add",
  async (student: Student) => {
    const data = await API_ADD_STUDENT(student);
    return data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id: number | string) => {
    await API_DELETE_STUDENT(id);
    return id;
  }
);

export const updateStudent = createAsyncThunk(
  "students/update",
  async (student: any) => {
    const data = await API_UPDATE_STUDENT(student.id, student);
    return data;
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [] as Student[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getAllStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi tải dữ liệu";
      })
      // ADD
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      // DELETE
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
      })
      // UPDATE
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.students = state.students.map((s) =>
          s.id === action.payload.id ? action.payload : s
        );
      });
  },
});

export default studentSlice.reducer;
