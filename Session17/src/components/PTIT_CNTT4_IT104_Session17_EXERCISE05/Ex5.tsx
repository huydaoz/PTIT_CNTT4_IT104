import { useState } from "react";

export default function Form() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <br />
      <p>Nội dung: {text} </p>
    </div>
  );
}
