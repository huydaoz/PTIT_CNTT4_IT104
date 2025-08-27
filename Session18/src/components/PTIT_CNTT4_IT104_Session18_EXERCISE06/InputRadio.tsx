import { useReducer } from "react";

type Action = { type: "SET_GENDER"; payload: string };

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "SET_GENDER":
      return action.payload;
    default:
      return state;
  }
};

export default function InputRadio() {
  const [gender, dispatch] = useReducer(reducer, "Nam");

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={gender === "Nam"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={gender === "Nữ"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={gender === "Khác"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Khác
      </label>
      <p>Giới tính: {gender}</p>
    </div>
  );
}
