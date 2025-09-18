import { useDispatch, useSelector } from "react-redux";
import { addRandomNumber } from "./store";

export default function RandomNumber() {
  const dispatch = useDispatch();
  const numbers = useSelector((state: any) => state.numbers);

  const handleGenerate = () => {
    dispatch(addRandomNumber());
  };

  return (
    <div>
      <div>[{numbers.join(",")}]</div>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
}
