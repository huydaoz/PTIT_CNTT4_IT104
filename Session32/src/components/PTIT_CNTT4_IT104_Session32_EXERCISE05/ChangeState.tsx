import { useDispatch, useSelector } from "react-redux";
import { changeCompany } from "./store";

export default function ChangeState() {
  const dispatch = useDispatch();
  const company = useSelector((state: any) => state.company);

  const handleChange = () => {
    dispatch(changeCompany());
  };

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
