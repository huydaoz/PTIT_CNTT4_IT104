import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/slice/counterSlice";
import type { RootState } from "../store/store";

export default function Counter() {
  const result = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Giá trị Counter: {result}</p>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
