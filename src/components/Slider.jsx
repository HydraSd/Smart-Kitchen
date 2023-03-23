import Carousel from "react-bootstrap/Carousel";
import "../css/slider.css";

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          id="slides"
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "images/pantry/pan4.jpg"}
          alt="First slide"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>The Smart Kitchen</h3>
          <p>Create your dream pantry from the professionals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slides"
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "images/slide1.jpg"}
          alt="Second slide"
          style={{ objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slides"
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "images/jat.jpg"}
          alt="Third slide"
          style={{ objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slides"
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "images/all/008.jpg"}
          alt="Third slide"
          style={{ objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slides"
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "images/pantry/pantry.jpg"}
          alt="Third slide"
          style={{ objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
