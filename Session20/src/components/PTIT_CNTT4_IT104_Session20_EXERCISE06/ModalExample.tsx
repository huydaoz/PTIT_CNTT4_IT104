import { useState, useRef, useEffect } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>

      {isOpen && (
        <div>
          <div>
            <h2>Đăng nhập hẹ hẹ</h2>
            <input ref={inputRef} type="text" />
            <br />
            <button onClick={() => setIsOpen(false)}>Đóng Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}
