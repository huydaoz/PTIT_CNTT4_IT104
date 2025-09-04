import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Ex3() {
  return (
    <div className="flex m-20 gap-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/tile/Apple-MacBook-Air-hero-250305-lp.jpg.landing-big_2x.jpg"
        />
        <Card.Body>
          <Card.Title>MacBook Air 2018</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power
            for what I need
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="primary">Xem chi tiết</Button>
            <div className="p-2">30.000.000 đ</div>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.mos.cms.futurecdn.net/PnpRuFKu7tKbmft9FoYujN.jpg"
        />
        <Card.Body>
          <Card.Title>MacBook Pro 2019</Card.Title>
          <Card.Text>
            he reason I am selling the machine is because it is too much power
            for what I need.
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="primary">Xem chi tiết</Button>
            <div className="p-2">30.000.000 đ</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
