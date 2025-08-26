import React from "react";

export default function Select() {
  const [select, setSelect] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <h3>Thành phố: {select} </h3>
      <select name="" id="" onChange={handleChange} value={select}>
        <option value="">Chọn</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Cần Thơ">Cần Thơ</option>
        <option value="Hưng Yên">Hưng Yên</option>
      </select>
    </div>
  );
}
