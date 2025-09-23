import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

import { generateFiveNumbers } from "../store/slice/listSlice";

export default function RandomList() {
  const numbers = useSelector((state: RootState) => state.list.numbers);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List number: [{numbers.join(", ")}]</h2>
      <button onClick={() => dispatch(generateFiveNumbers())}>
        Random numbers
      </button>
    </div>
  );
}
