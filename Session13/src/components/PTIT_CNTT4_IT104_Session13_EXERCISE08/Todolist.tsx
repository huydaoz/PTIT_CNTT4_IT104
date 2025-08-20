import { Component } from "react";

type Job = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type State = {
  jobs: Job[];
};

export default class Todolist extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      jobs: [
        {
          id: 1,
          name: "Thiết kế giao diện header",
          assign: "Nguyễn Văn A",
          status: false,
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Thiết kế giao diện footer",
          assign: "Nguyễn Văn B",
          status: true,
          created_at: new Date(),
        },
      ],
    };
  }

  formatDate(date: Date): string {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    const hh = date.getHours().toString().padStart(2, "0");
    const mm = date.getMinutes().toString().padStart(2, "0");
    const ss = date.getSeconds().toString().padStart(2, "0");
    return `${d}/${m}/${y} ${hh}:${mm}:${ss}`;
  }

  render() {
    return (
      <div>
        <table
          border={1}
          cellPadding={8}
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>

          <tbody>
            {this.state.jobs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.assign}</td>
                <td>
                  {item.status ? (
                    <span style={{ color: "green" }}>Hoàn thành</span>
                  ) : (
                    <span style={{ color: "red" }}>Chưa hoàn thành</span>
                  )}
                </td>
                <td>{this.formatDate(item.created_at)}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                    }}
                  >
                    Sửa
                  </button>

                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
