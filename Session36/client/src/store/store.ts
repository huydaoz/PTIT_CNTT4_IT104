import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: user_slice,
  },
});
export default store;
