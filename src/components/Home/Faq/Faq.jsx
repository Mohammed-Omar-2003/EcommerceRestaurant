import { Col, Container } from "react-bootstrap";
import "./Faq.css";
function Faq() {
  return (
    <div className="faq" id={"faq"}>
      <Container>
        <h1>Frequently Asked Questions</h1>
        <div className="line">
          <Col>
            <h4>
              <span>~</span>Is Foodera Bread really baked fresh each day?
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </Col>
          <Col>
            <h4>
              <span>~</span> Can I order your products online?
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </Col>
        </div>
        <div className="line">
          <Col>
            <h4>
              <span>~</span> Do you bake breads containing animal fats or
              products?
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </Col>
          <Col>
            <h4>
              <span>~</span> When are you opening a shop near me?
            </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Faq;
