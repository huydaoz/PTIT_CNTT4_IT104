import { useEffect, useState } from "react";
import Loading from "./Loading.css";
import axios from "axios";

interface User {
  name: string;
  email: string;
  age: number;
}
export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  async function getAllUser() {
    let result: User[];
    try {
      const response = await axios.get("http://localhost:8000/users ");
      result = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setUsers([...result]);
      }, 1000);
    }
  }
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      {loading ? <Loading /> : ""}
      <h1>Hoc API</h1>
      <ul>
        {users &&
          users.map((item: User, index: number) => {
            return <li key={index}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
}
