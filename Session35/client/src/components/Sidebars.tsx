import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { toggleMenu } from "../store/slice/menuSlice";
import {
  DashboardOutlined,
  UserOutlined,
  PieChartOutlined,
  FileOutlined,
  BarChartOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state: RootState) => state.menu.isCollapsed);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      style={{
        width: isCollapsed ? "60px" : "200px",
        background: "#001529",
        color: "white",
        minHeight: "100vh",
        transition: "0.3s",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>{isCollapsed ? <DashboardOutlined /> : "Bảng điều khiển"}</div>
        <div>{isCollapsed ? <UserOutlined /> : "Tài khoản"}</div>
        <div>{isCollapsed ? <PieChartOutlined /> : "Tài sản"}</div>
        <div>{isCollapsed ? <BarChartOutlined /> : "Thống kê"}</div>
        <div>{isCollapsed ? <FileOutlined /> : "Tài liệu"}</div>
      </div>

      <div
        style={{ marginTop: "20px", cursor: "pointer" }}
        onClick={handleToggle}
      >
        <MenuFoldOutlined /> {isCollapsed ? "" : "Thu gọn"}
      </div>
    </div>
  );
}
