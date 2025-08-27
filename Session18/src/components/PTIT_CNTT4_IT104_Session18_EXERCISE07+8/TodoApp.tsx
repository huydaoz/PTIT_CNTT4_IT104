import { useReducer, useEffect, useState } from "react";

type Task = {
  id: number;
  name: string;
};

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "SET_TASKS"; payload: Task[] };

const reducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK": {
      if (!action.payload.trim()) return state;
      const newTask: Task = {
        id: Date.now(),
        name: action.payload,
      };
      const updatedAdd = [...state, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedAdd));
      return updatedAdd;
    }

    case "REMOVE_TASK": {
      const updatedRemove = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedRemove));
      return updatedRemove;
    }

    case "SET_TASKS": {
      return action.payload;
    }

    default:
      return state;
  }
};

export default function TodoApp() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      dispatch({ type: "SET_TASKS", payload: JSON.parse(stored) });
    }
  }, []);

  const handleAdd = () => {
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  const handleRemove = (id: number) => {
    const ok = window.confirm("xoá nhé hẹ hẹ");
    if (ok) {
      dispatch({ type: "REMOVE_TASK", payload: id });
    }
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            {""}
            <button onClick={() => handleRemove(task.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
