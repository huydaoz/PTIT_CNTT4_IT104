import { useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();

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

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>Không tìm thấy user!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin chi tiết</h2>
      <div>
        <p>Id: {user.id}</p>
        <p>UserName: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
      </div>
    </div>
  );
}
