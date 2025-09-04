import Spinner from "react-bootstrap/Spinner";

export default function Ex6() {
  return (
    <div className="flex flex-col  ">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  );
}
