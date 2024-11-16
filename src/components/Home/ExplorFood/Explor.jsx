import { Container, Card, Row, Col } from "react-bootstrap";
import "./Explor.css";
import food1 from "../../../assets/food1.jpg";
import food2 from "../../../assets/food2.jpg";
import food3 from "../../../assets/food3.jpg";
import { useState } from "react";
import Modal from "./Modal";
function Explor() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container id="explore">
      <Row className="mt-5 mb-5">
        <Col className="">
          <Card style={{ width: "22rem", border: "none" }}>
            <Card.Img
              style={{ borderRadius: "10px", marginBottom: "10px" }}
              variant="top"
              src={food1}
              alt="food"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                Rainbow Vegetable Sandwich
              </Card.Title>
              <Card.Text>Time: 15 - 20 Minutes | Serves: 1</Card.Text>
              <div className="price">
                <span>$10.50</span> $12.50
              </div>
              <button onClick={() => setShowModal(true)}>Order Now</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "22rem", border: "none", margin: "50px 0px" }}>
            <Card.Img
              style={{ borderRadius: "10px", marginBottom: "10px" }}
              variant="top"
              src={food2}
              alt="food"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                Vegetarian Burger
              </Card.Title>
              <Card.Text>Time: 30 - 45 Minutes | Serves: 1</Card.Text>
              <div className="price">
                <span>$8.50</span> $10.50
              </div>
              <button onClick={() => setShowModal(true)}>Order Now</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "22rem", border: "none" }}>
            <Card.Img
              style={{ borderRadius: "10px", marginBottom: "10px" }}
              variant="top"
              src={food3}
              alt="food"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                Raspberry Stuffed French Toast
              </Card.Title>
              <Card.Text>Time: 15 - 10 Minutes | Serves: 1</Card.Text>
              <div className="price">
                <span>$10.00</span> $12.00
              </div>
              <button onClick={() => setShowModal(true)}>Order Now</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal open={showModal} onclase={() => setShowModal(false)} />
    </Container>
  );
}

export default Explor;
