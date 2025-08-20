import ActionButtons from "./ActionButtons";

interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

interface UserTableRowProps {
  user: User;
}

export default function UserTableRow({ user }: UserTableRowProps) {
  return (
    <tr style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.dob}</td>
      <td>{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <ActionButtons
          onEdit={() => alert(`Sửa user: ${user.name}`)}
          onDelete={() => alert(`Xóa user: ${user.name}`)}
        />
      </td>
    </tr>
  );
}
