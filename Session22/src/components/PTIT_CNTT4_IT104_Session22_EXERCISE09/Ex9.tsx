import Table from "react-bootstrap/Table";
export default function Ex9() {
  return (
    <Table striped className="w-75 mx-auto border-1">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1990</td>
          <td>nguyenvana@example.com</td>
          <td>Hà Nội</td>
          <td className="flex gap-2">
            <button className="btn btn-warning">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Trần Thị B</td>
          <td>Nữ</td>
          <td>02/02/1995</td>
          <td>tranthib@example.com</td>
          <td>TP. Hồ Chí Minh</td>
          <td className="flex gap-2">
            <button className="btn btn-warning">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Phạm Văn C</td>
          <td>Nam</td>
          <td>03/03/1992</td>
          <td>phamvanc@example.com</td>
          <td>Đà Nẵng</td>
          <td className="flex gap-2">
            <button className="btn btn-warning">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Lê Thị D</td>
          <td>Nữ</td>
          <td>04/04/1993</td>
          <td>lethid@example.com</td>
          <td>Hải Phòng</td>
          <td className="flex gap-2">
            <button className="btn btn-warning">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Nguyễn Văn E</td>
          <td>Nam</td>
          <td>05/05/1991</td>
          <td>nguyenvane@example.com</td>
          <td>Cần Thơ</td>
          <td className="flex gap-2">
            <button className="btn btn-warning">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
