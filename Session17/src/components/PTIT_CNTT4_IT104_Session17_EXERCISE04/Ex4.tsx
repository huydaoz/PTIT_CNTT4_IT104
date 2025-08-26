import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState<boolean>(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <p style={{ display: show ? "block" : "none" }}>Tiêu đề văn bản</p>
      <button onClick={handleShow}>{show ? "Ẩn" : "Hiện"}</button>
    </div>
  );
}
