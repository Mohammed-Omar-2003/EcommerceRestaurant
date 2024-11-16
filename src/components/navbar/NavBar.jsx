import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
function NavBar() {
  return (
    <Navbar expand="lg" style={{ position: "fixed", zIndex: "1000" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="React-Bootstrap" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "40%" }}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#explore">Explore Foods</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#link" id="bottom">
              +201157433656
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
