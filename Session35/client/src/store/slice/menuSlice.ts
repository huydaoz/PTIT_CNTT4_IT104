import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isCollapsed: boolean;
}

const initialState: MenuState = {
  isCollapsed: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
