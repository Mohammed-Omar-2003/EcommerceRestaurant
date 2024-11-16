import { Col, Container, Row } from "react-bootstrap";
import "./layout.css"
function Layout() {
  return (
    <div className="layout" >
      <Container className="m-auto">
        <Row className="m-auto">
          <Col>
            <h1>3652+</h1>
            <h5>Savings</h5>
          </Col>
          <Col>
            <h1>2365+</h1>
            <h5>Photos</h5>
          </Col>
          <Col>
            <h1>1205+</h1>
            <h5>Rockets</h5>
          </Col>
          <Col>
            <h1>6584+</h1>
            <h5>Globes</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
