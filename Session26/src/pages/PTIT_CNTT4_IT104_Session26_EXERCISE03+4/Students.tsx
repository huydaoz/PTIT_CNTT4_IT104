import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function Students() {
  const [studentName, setStudentName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };
  const [name, setSearchParamName] = useSearchParams();

  const handleClick = () => {
    // setSearchParamName truyền dữ liệu lên thanh URL
    console.log(name);
    setSearchParamName({ name: studentName });
  };
  return (
    <div>
      <input type="text" value={studentName} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      <p>Giá trị vừa tìm kiếm: {name.get("name")}</p>
    </div>
  );
}
