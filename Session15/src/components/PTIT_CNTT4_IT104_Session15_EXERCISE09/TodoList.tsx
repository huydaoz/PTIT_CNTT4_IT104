import { Component } from "react";

type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};

type InitialState = {
  tasks: Task[];
  isEdit: boolean;
  currentTaskId: number | null;
  taskNameInput: string;
};

export default class Baitap9 extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      isEdit: false,
      currentTaskId: null,
      taskNameInput: "",
    };
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isEdit, currentTaskId, taskNameInput } = this.state;
    if (taskNameInput.trim() === "") return;

    if (isEdit && currentTaskId !== null) {
      const updatedTasks = this.state.tasks.map((task) =>
        task.id === currentTaskId ? { ...task, taskName: taskNameInput } : task
      );
      this.setState(
        {
          tasks: updatedTasks,
          isEdit: false,
          currentTaskId: null,
          taskNameInput: "",
        },
        () => {
          localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
      );
    } else {
      const newTask: Task = {
        id: Math.floor(Math.random() * 9999999999),
        taskName: taskNameInput,
        completed: false,
      };
      this.setState(
        (prevState) => ({
          tasks: [...prevState.tasks, newTask],
          taskNameInput: "",
        }),
        () => {
          localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
      );
    }
  };

  handleDelete = (id: number) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updatedTasks }, () => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  };

  handleToggleComplete = (id: number) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updatedTasks }, () => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  };

  handleEdit = (id: number) => {
    const taskToEdit = this.state.tasks.find((task) => task.id === id);
    if (taskToEdit) {
      this.setState({
        isEdit: true,
        currentTaskId: id,
        taskNameInput: taskToEdit.taskName,
      });
    }
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>DANH SÁCH CÔNG VIỆC</h1>
          <input
            type="text"
            name="taskName"
            placeholder="thêm công việc"
            value={this.state.taskNameInput}
            onChange={(e) => this.setState({ taskNameInput: e.target.value })}
          />
          <button type="submit">
            {this.state.isEdit ? "Cập nhật" : "Thêm"}
          </button>
        </form>

        <ul>
          {this.state.tasks.map((item) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => this.handleToggleComplete(item.id)}
                />
                {item.completed ? (
                  <span style={{ textDecoration: "line-through" }}>
                    {item.taskName}
                  </span>
                ) : (
                  <span>{item.taskName}</span>
                )}
                <button onClick={() => this.handleEdit(item.id)}>Sửa</button>
                <button onClick={() => this.handleDelete(item.id)}>Xóa</button>
              </li>
            );
          })}
        </ul>

        <p>
          Số lượng công việc hoàn thành:{" "}
          {this.state.tasks.filter((task) => task.completed).length} /{" "}
          {this.state.tasks.length}
        </p>
      </div>
    );
  }
}
