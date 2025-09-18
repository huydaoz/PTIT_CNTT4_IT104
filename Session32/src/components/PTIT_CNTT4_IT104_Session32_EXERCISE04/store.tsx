import { createStore } from "redux";

const ADD_RANDOM_NUMBER = "ADD_RANDOM_NUMBER";

export const addRandomNumber = () => {
  return {
    type: ADD_RANDOM_NUMBER,
    payload: Math.floor(Math.random() * 100),
  };
};

const initialState = {
  numbers: [] as number[],
};

const randomReducer = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case ADD_RANDOM_NUMBER:
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    default:
      return state;
  }
};

export const store = createStore(randomReducer);
