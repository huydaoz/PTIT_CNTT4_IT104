import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function ListUser() {
  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nvc@gmail.com",
      address: "Ninh Bình",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {users.map((user) => (
        <div key={user.id}>
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <Link to={`/user/${user.id}`}>
            <button>Xem chi tiết</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
