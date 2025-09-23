import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slice/themeSlice";
import type { RootState } from "../store/store";

export default function Theme() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "#fff" : "#333",
        color: mode === "light" ? "#000" : "#fff",
        padding: "50px",
        display: "flex",
      }}
    >
      <button onClick={() => dispatch(toggleTheme())}>
        {mode === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
