import { useState } from "react";

export default function InputValidator() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Nhập chuỗi kiểm tra</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length > 5 && <p>Chuỗi nhập vào dài hơn 5 ký tự</p>}
    </div>
  );
}
