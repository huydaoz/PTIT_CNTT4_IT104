import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Ex8() {
  return (
    <div className="flex justify-center">
      <Form>
        <h1 className="text-center">Đăng ký tài khoản</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control placeholder="Ví dụ: Đào Quang Huy" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Thành phố</Form.Label>

            <Form.Select>
              <option>Hà Nội</option>
              <option>Hưng Yên</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Quận</Form.Label>
            <Form.Select>
              <option>Thanh Xuân</option>
              <option>Hà Đông</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Mã bưu điện</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="w-70 mx-auto d-block"
        >
          <span>Submit</span>
        </Button>
      </Form>
    </div>
  );
}
