import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    document.title = username
      ? `Cin chàoo ${username} hẹ hẹ`
      : "Trang web của bạn hẹ hẹ";
  }, [username]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h3>Chào mừng bạn đến với trang của tôi hẹ hẹ</h3>
      <input
        id="usernameInput"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Nhập tên của bạn hẹ hẹ"
      />
    </div>
  );
}
