import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { addFavorite } from "../store/slice/userSlice";
import { HeartOutlined } from "@ant-design/icons";

export default function UserList() {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>List Favorites User</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <p>
            <b>UserName:</b> {user.username}
          </p>
          <p>
            <b>Favorites:</b> {user.favorites}{" "}
            <HeartOutlined
              style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
              onClick={() => dispatch(addFavorite(user.id))}
            />
          </p>
        </div>
      ))}
    </div>
  );
}
