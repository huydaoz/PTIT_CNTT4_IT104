import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;
