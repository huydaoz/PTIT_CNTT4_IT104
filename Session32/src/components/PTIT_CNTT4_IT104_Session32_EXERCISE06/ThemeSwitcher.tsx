import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store";
import type { RootState } from "./store";

export default function ThemeSwitcher() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  const styles = {
    light: {
      backgroundColor: "white",
      color: "black",
      minHeight: "100vh",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
    },
  };

  return (
    <div style={theme === "light" ? styles.light : styles.dark}>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleChange}
        />
        {theme === "light" ? "Sáng" : "Tối"}
      </label>
    </div>
  );
}
