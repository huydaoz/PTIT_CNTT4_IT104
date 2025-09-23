import { createSlice } from "@reduxjs/toolkit";

interface ListState {
  numbers: number[];
}

const initialState: ListState = {
  numbers: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    generateFiveNumbers: (state) => {
      const newNumbers = Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 10) + 1
      );
      state.numbers = newNumbers;
    },
  },
});

export const { generateFiveNumbers } = listSlice.actions;
export default listSlice.reducer;
