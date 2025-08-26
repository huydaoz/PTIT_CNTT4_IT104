import { useState, useEffect } from "react";

type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};

export default function Baitap9() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    if (stored && JSON.parse(stored).length > 0) {
      return JSON.parse(stored);
    }
    return [
      { id: 1, taskName: "code", completed: false },
      { id: 2, taskName: "ngủ", completed: true },
      { id: 3, taskName: "game", completed: false },
    ];
  });

  const [isEdit, setIsEdit] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const [taskNameInput, setTaskNameInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskNameInput.trim() === "") return;

    if (isEdit && currentTaskId !== null) {
      const updatedTasks = tasks.map((task) =>
        task.id === currentTaskId ? { ...task, taskName: taskNameInput } : task
      );
      setTasks(updatedTasks);
      setIsEdit(false);
      setCurrentTaskId(null);
      setTaskNameInput("");
    } else {
      const newTask: Task = {
        id: Math.floor(Math.random() * 9999999999),
        taskName: taskNameInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskNameInput("");
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setIsEdit(true);
      setCurrentTaskId(id);
      setTaskNameInput(taskToEdit.taskName);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>DANH SÁCH CÔNG VIỆC</h1>
        <input
          type="text"
          placeholder="thêm công việc"
          value={taskNameInput}
          onChange={(e) => setTaskNameInput(e.target.value)}
        />
        <button type="submit">{isEdit ? "Cập nhật" : "Thêm"}</button>
      </form>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(item.id)}
            />
            {item.completed ? (
              <span style={{ textDecoration: "line-through" }}>
                {item.taskName}
              </span>
            ) : (
              <span>{item.taskName}</span>
            )}
            <button onClick={() => handleEdit(item.id)}>Sửa</button>
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>

      <p>
        Số lượng công việc hoàn thành:{" "}
        {tasks.filter((task) => task.completed).length} / {tasks.length}
      </p>
    </div>
  );
}
