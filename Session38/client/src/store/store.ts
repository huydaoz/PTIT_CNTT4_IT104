import { configureStore } from "@reduxjs/toolkit";
import book_slice from "./slice/bookSlice";
const store = configureStore({
  reducer: {
    book: book_slice,
  },
});
export default store;
