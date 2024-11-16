import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
function Header() {
  return (
    <header id={"home"}>
      <Container>
        <div className="col-md-5 text">
          <h1>Good food choices are good investments.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <button id="one">
            Order Now <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button id="two">
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="col-md-6"></div>
      </Container>
    </header>
  );
}

export default Header;
