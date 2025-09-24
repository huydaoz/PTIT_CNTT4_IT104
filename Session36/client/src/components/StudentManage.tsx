import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  updateUser,
} from "../store/slices/usersSlice";

export default function StudentManage() {
  const result = useSelector((data: any) => {
    return data.users.users;
  });
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const editUser = (id: number) => {
    const newName: any = prompt("Nhập tên mới");
    const newUser = {
      name: newName,
      id: id,
    };
    dispatch(updateUser(newUser));
  };
  return (
    <div>
      <h1>Student Manage</h1>
      <ul>
        <ul>
          {result.map((item: any) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDelete(item.id)}>Xoá</button>
              <button onClick={() => editUser(item.id)}>Sửa</button>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
