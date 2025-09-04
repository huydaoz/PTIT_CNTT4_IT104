import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Ex4() {
  return (
    <DropdownButton title="Nguyễn Văn Nam">
      <Dropdown.Item>Cài đặt</Dropdown.Item>
      <Dropdown.Item>Đổi mật khẩu</Dropdown.Item>
      <Dropdown.Item>Đăng xuất</Dropdown.Item>
    </DropdownButton>
  );
}
