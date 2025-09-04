import Toast from "react-bootstrap/Toast";

export default function Ex7() {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Cảnh báo</strong>
      </Toast.Header>
      <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
    </Toast>
  );
}
