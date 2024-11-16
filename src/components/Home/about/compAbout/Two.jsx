import "../About.css";
import about from "../../../../assets/about2.png";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Two() {
  return (
    <div className="two">
      <Row>
        <div className="col-md-5 text">
          <h2>
            We make everything by hand with the best possible ingredients.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <h5>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Etiam sed dolor ac diam volutpat.
          </h5>
          <h5>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Erat volutpat aliquet imperdiet.
          </h5>
          <h5>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            purus a odio finibus bibendum.
          </h5>
          <button>
            <a href="#">Learn More</a>
          </button>
        </div>
        <div className="col-md-7 image">
          <img src={about} alt="about" />
        </div>
      </Row>
    </div>
  );
}

export default Two;
