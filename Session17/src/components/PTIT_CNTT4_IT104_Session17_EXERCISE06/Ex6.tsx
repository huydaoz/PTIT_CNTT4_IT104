import React, { useState } from "react";

export default function CountText() {
  const [count, setCount] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  };
  return (
    <div>
      <input type="text" value={count} onChange={handleChange} />
      <p>Số ký tự: {count.length}</p>
    </div>
  );
}
