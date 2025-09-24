import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Lấy dữ liệu từ server (json-server)
export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "Fetch error");
    }
  }
);
export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "users/update",
  async (data: { id: number; name: string }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        console.log("Đang xử lý...");
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        console.log("Thành công");
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        console.log("Thất bại");
        state.loading = false;
        state.users = [];
        state.error = action.payload as string;
      });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((item) => item.id !== action.payload);
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    });
  },
});

export default userSlice.reducer;
