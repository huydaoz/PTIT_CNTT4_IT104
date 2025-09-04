import { Alert } from "antd";

export default function Ex5() {
  return (
    <div className="w-50">
      <Alert message="Thêm tài khoản thành công" type="success" closable />
      <br />
      <Alert message="Thêm mới tài khoản thất bại" type="error" closable />
      <br />
      <Alert message="Tên không được để trống" type="warning" closable />
    </div>
  );
}
