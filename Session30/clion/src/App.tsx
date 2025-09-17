import { useState, useEffect } from "react";
import {
  Input,
  Button,
  List,
  Typography,
  Flex,
  Segmented,
  Checkbox,
  Spin,
  Alert,
} from "antd";
import axios from "axios";
const API = "http://localhost:8000/tasks";
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("Tất cả");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get(`${API}`)
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  const handleAddTask = () => {
    setLoading(true);
    axios
      .post(API, {
        title: inputValue.trim(),
        completed: false,
      })
      .then((response) => {
        setTasks([response.data, ...tasks]);
        setInputValue("");
      })
      .finally(() => setLoading(false));
  };

  const handleDeleteTask = (id: number) => {
    setLoading(true);
    axios
      .delete(`${API}/${id}`)
      .then(() => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .finally(() => setLoading(false));
  };

  const handleToggleStatus = (id: number, completed: boolean) => {
    setLoading(true);
    axios
      .put(`${API}/${id}`, { completed: !completed })
      .then((response) => {
        const newTasks = tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
      })
      .finally(() => setLoading(false));
  };

  const handleStartEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingText(task.title);
  };

  const handleSaveEdit = (id: number) => {
    setLoading(true);
    axios
      .put(`${API}/${id}`, { title: editingText })
      .then((response) => {
        const newTasks = tasks.map((task) =>
          task.id === id ? { ...task, title: editingText } : task
        );
        setTasks(newTasks);
        setEditingTaskId(null);
        setEditingText("");
      })
      .finally(() => setLoading(false));
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Hoàn thành") return task.completed;
    if (filter === "Đang thực hiện") return !task.completed;
    return true;
  });

  return (
    <div>
      <Typography.Title>Quản lý công việc</Typography.Title>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          closable
          onClose={() => setError(null)}
        />
      )}
      <Spin spinning={loading}>
        <Flex gap="small">
          <Input
            placeholder="Nhập tên công việc"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            onPressEnter={handleAddTask}
          />
          <Button type="primary" onClick={handleAddTask}>
            Thêm công việc
          </Button>
        </Flex>

        <Flex>
          <Segmented
            options={["Tất cả", "Đang thực hiện", "Hoàn thành"]}
            value={filter}
            onChange={setFilter}
          />
        </Flex>
        <List
          header={<div>Danh sách công việc</div>}
          bordered
          dataSource={filteredTasks}
          renderItem={(task) => (
            <List.Item
              actions={
                editingTaskId === task.id
                  ? [
                      <Button
                        type="link"
                        onClick={() => handleSaveEdit(task.id)}
                      >
                        Lưu
                      </Button>,
                    ]
                  : [
                      <Button type="link" onClick={() => handleStartEdit(task)}>
                        Sửa
                      </Button>,
                      <Button
                        type="link"
                        danger
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Xóa
                      </Button>,
                    ]
              }
            >
              {editingTaskId === task.id ? (
                <Input
                  value={editingText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditingText(e.target.value)
                  }
                  onPressEnter={() => handleSaveEdit(task.id)}
                />
              ) : (
                <Flex>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleToggleStatus(task.id, task.completed)}
                  />
                  <Typography.Text delete={task.completed}>
                    {task.title}
                  </Typography.Text>
                </Flex>
              )}
            </List.Item>
          )}
        />
      </Spin>
    </div>
  );
}
