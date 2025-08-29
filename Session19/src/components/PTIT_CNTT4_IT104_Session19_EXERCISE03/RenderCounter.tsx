import { useState, useRef, useEffect } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <h2>Render Counter</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Giá trị nhập: {value}</p>
      <p>Số lần render: {renderCount.current}</p>
    </div>
  );
}
