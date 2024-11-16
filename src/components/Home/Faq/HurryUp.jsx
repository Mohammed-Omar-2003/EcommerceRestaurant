import { Container } from "react-bootstrap";
import "./HurryUp.css";
function HurryUp() {
  return (
    <div className="hurryUp">
      <Container className="m-auto text-center">
        <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
        <p>Limited time offer for this month. No credit card required.</p>
        <form>
          <input
            type="email"
            placeholder="enter the email"
            className="col-md-7"
          />
          <button type="submit" className="col-md-2">
            Subscribe
          </button>
        </form>
      </Container>
    </div>
  );
}

export default HurryUp;
