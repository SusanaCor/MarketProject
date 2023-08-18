import Carousel from "react-bootstrap/Carousel";
import "./style.css";

function Carou() {
  return (
    <div className="conteniner">
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="container-image">
          <img
            className="d-block w-100"
            src="img\images.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>New flavors</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="container-image">
          <img
            className="d-block w-100"
            src="img\Captura de pantalla (105).png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Happy ice cream dayl</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="container-image">
          <img
            className="d-block w-100"
            src="img\Captura de pantalla (106).png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Anís ice creams are unmatched</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carou;
