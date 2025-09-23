import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../store/slice/viewSlice";
import type { RootState } from "../store/store";

export default function ViewMode() {
  const mode = useSelector((state: RootState) => state.view.mode);
  const dispatch = useDispatch();

  const items = [1, 2, 3, 4];

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => dispatch(toggleView())}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: mode === "list" ? "column" : "row",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              textAlign: "center",
              flex: mode === "grid" ? "1" : "none",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
