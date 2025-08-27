import { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <h2>Chọn màu:</h2>
      <input type="color" value={color} onChange={handleChangeColor} />
      <div>
        <p>
          Màu hiển thị: <br />
          <div
            style={{ backgroundColor: color, width: "100px", height: "50px" }}
          ></div>
        </p>
      </div>
    </div>
  );
}
