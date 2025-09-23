import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  favorites: number;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    { id: 1, username: "Nguyễn Văn A", favorites: 0 },
    { id: 2, username: "Nguyễn Văn B", favorites: 0 },
    { id: 3, username: "Nguyễn Văn C", favorites: 0 },
    { id: 4, username: "Nguyễn Văn D", favorites: 0 },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.favorites += 1;
      }
    },
  },
});

export const { addFavorite } = userSlice.actions;
export default userSlice.reducer;
