import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { increment, decrement } from "./store";

export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Giá trị hiện tại: {counter}</p>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "10px" }}
      >
        Tăng
      </button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
}
