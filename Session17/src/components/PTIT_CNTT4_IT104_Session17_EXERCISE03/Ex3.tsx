import { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor("red");
  };

  return (
    <div>
      <h1 style={{ color: color }}>Tiêu đề văn bản</h1>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}
