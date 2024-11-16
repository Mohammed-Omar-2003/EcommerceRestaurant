import { Row } from "react-bootstrap";
import "./BakedFrish.css";
function BakedFrish() {
  return (
    <div className="bigBox">
      <div className="bakedfrish">
        <Row>
          <div className="col-md-8">
            <h1>Baked fresh daily by bakers with passion.</h1>
          </div>
          <div className="col-md-4">
            <button>
              <a href="#">Learn More</a>
            </button>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default BakedFrish;
