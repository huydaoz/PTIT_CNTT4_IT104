import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Book, PageAble } from "../../utils/types";
import axios from "axios";
interface BookState {
  books: Book[];
  loading: boolean;
  totalPage: number;
}
const initialState: BookState = {
  books: [],
  loading: false,
  totalPage: 0,
};
export const getAllBook = createAsyncThunk(
  "book/getAllBook",
  async ({ page, size, search }: PageAble) => {
    const response = await axios.get(
      `http://localhost:8080/books?_page=${page}&_limit=${size}&title_like=${search}`
    );
    return {
      books: response.data,
      totalPage: Math.ceil(+response.headers["x-total-count"] / size), // Tính tổng số trang
    };
  }
);
export const getAllBooks = createAsyncThunk("getAllBooks", async () => {
  try {
    const res = await axios.get(`http://localhost:8080/books`);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
});
export const AddBooks = createAsyncThunk("AddBooks", async (new_Book: Book) => {
  try {
    const res = await axios.post(`http://localhost:8080/books`, new_Book);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
});
export const deleleBooks = createAsyncThunk(
  "deleteBooks",
  async (id: string | number) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
      return id;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
export const editBooks = createAsyncThunk("editBooks", async (book: Book) => {
  try {
    const res = await axios.put(`http://localhost:8080/books/${book.id}`, {
      title: book.title,
      author: book.author,
      year: book.year,
      category: book.category,
    });
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
});
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(AddBooks.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleleBooks.fulfilled, (state, action) => {
        state.books = state.books.filter((b) => b.id !== action.payload);
      })
      .addCase(editBooks.fulfilled, (state, action) => {
        const index = state.books.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(getAllBook.fulfilled, (state, action) => {
        return (state = {
          books: action.payload.books,
          totalPage: action.payload.totalPage,
          loading: false,
        });
      });
  },
});
export default bookSlice.reducer;
