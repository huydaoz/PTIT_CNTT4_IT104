import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type Task from "../../utils/types";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const getAllTask = createAsyncThunk("getAllTask", async () => {
  try {
    const response = await axios.get(`http://localhost:8080/task`);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
});
export const deleteTask = createAsyncThunk("deleteTask", async (id: string) => {
  try {
    await axios.delete(`http://localhost:8080/task/${id}`);
    return id;
  } catch (error) {
    console.log("Error: ", error);
  }
});
export const addTask = createAsyncThunk(
  "addTask",
  async (task: { title: string; priority: string }) => {
    try {
      const response = await axios.post(`http://localhost:8080/task`, task);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }
);
export const editTask = createAsyncThunk(
  "editTask",
  async (task: { id: string; title: string; priority: string }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/task/${task.id}`,
        {
          title: task.title,
          priority: task.priority,
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTask.pending, () => {
        console.log("dang xu ly qua trinh");
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(getAllTask.rejected, () => {
        console.log("Lay du lieu that bai");
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t: any) => t.id !== action.payload);
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});
export default taskSlice.reducer;
