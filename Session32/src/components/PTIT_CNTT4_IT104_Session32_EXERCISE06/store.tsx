import { createStore } from "redux";

const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "light",
};

const themeReducer = (
  state = initialState,
  action: { type: string }
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export const store = createStore(themeReducer);

export type RootState = ReturnType<typeof store.getState>;
