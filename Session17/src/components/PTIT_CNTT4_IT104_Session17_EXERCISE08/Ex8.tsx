import React, { useState } from "react";

export default function CheckBox() {
  const [check, setCheck] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheck((p) => [...p, value]);
    } else {
      setCheck((p) => p.filter((item) => item !== value));
    }
  };
  return (
    <div>
      <h2>Sở thích: {check}</h2>
      <input type="checkbox" value={"Đi chơi "} onChange={handleChange} />
      Đi chơi
      <input type="checkbox" value={"Đi học "} onChange={handleChange} />
      Đi học
      <input type="checkbox" value={"Làm việc "} onChange={handleChange} />
      Làm việc
      <input type="checkbox" value={"Nhảy "} onChange={handleChange} />
      Nhảy
    </div>
  );
}
