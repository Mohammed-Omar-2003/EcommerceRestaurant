import { Row } from "react-bootstrap";
import about from "../../../../assets/about.png";
function One() {
  return (
    <div className="one">
      <Row>
        <div className="col-md-7 image">
          <img src={about} alt="about" />
        </div>
        <div className="col-md-4 text">
          <h2>
            We pride ourselves on making real food from the best ingredients.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <button>
            <a href="#">Learn More </a>
          </button>
        </div>
      </Row>
    </div>
  );
}

export default One;
