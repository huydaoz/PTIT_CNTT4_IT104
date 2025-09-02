import { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Nhập thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button>Gửi</button>
      </form>

      {submitted && (
        <div>
          <h3>Thông tin đã nhập:</h3>
          <p> Tên: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}
