import { createStore } from "redux";

const REGISTER = "REGISTER";

export const registerAction = (payload: {
  email: string;
  password: string;
}) => ({
  type: REGISTER,
  payload,
});

interface AuthState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  email: "",
  password: "",
};

const authReducer = (
  state = initialState,
  action: { type: string; payload: AuthState }
): AuthState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export const store = createStore(authReducer);

export type RootState = ReturnType<typeof store.getState>;
