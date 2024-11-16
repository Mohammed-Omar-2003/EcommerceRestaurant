import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import imgMan1 from "../../../assets/review.png";
function Slider() {
  return (
    <div className="slider" id="reviews">
      <Carousel data-bs-theme="dark">
        <Carousel.Item id="item">
          <img className="image" src={imgMan1} alt="First slide" />
          <Carousel.Caption id="text">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live far from the countries Vokalia.
            </p>
            <h5>Johnthan Doe - UX Designer</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="item">
          <img className="image" src={imgMan1} alt="Second slide" />
          <Carousel.Caption id="text">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live far from the countries Vokalia.
            </p>
            <h5>Maccy Doe - Front End</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="item">
          <img className="image" src={imgMan1} alt="Third slide" />
          <Carousel.Caption id="text">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live far from the countries Vokalia.
            </p>
            <h5>Johnthan Doe - UX Designer</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
