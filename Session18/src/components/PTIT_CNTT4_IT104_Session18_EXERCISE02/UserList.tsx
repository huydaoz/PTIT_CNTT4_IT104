import { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function UserList() {
  const users: User[] = useMemo(
    () => [
      { id: 1, name: "Huy", age: 17 },
      { id: 2, name: "An", age: 20 },
      { id: 3, name: "Linh", age: 22 },
      { id: 4, name: "Nam", age: 15 },
    ],
    []
  );

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">
        Danh sách người dùng trên 18 tuổi:
      </h2>
      <ul className="list-disc pl-6">
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
