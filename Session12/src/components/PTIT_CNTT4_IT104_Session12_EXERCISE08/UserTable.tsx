import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

export default function UserTable() {
  const users = [
    {
      id: 1,
      name: "Malcolm Lockyer",
      dob: "21/03/1961",
      gender: "Nam",
      address: "New york",
    },
    {
      id: 2,
      name: "Maria",
      dob: "11/02/1990",
      gender: "Nữ",
      address: "London",
    },
  ];

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        border: "1px solid #ddd",
      }}
    >
      <UserTableHeader />
      <tbody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
