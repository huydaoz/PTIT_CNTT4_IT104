import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import listReducer from "./slice/listSlice";
import themeReducer from "./slice/themeSlice";
import viewReducer from "./slice/viewSlice";
import menuReducer from "./slice/menuSlice";
import languageReducer from "./slice/languageSlice";
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
    theme: themeReducer,
    view: viewReducer,
    menu: menuReducer,
    language: languageReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
