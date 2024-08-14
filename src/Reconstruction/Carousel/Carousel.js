// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import principlesData from "../../utilities/principlesData";
import { nanoid } from "nanoid";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import "./Carousel.css";

export default function CarouselComponent() {
  const carouselContainerStyle = {
    width: "100%",
    height: "fit-content",
    padding: "0px",
    margin: "30px 0px 30px 0px",
  };

  const principles = principlesData.map((principle) => {
    const { id, title, description } = principle;
    return (
      <CarouselItem
        style={{}}
        className="principle-item"
        key={nanoid()}
        id={id}
      >
        <CarouselCaption className="principle-text-box" key={id}>
          <h3 className="principle-header">{title}</h3>
          <p className="principle-desc">{description}</p>
        </CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      style={carouselContainerStyle}
      interval={13000}
      keyboard={true}
      touch={true}
      pause={"hover"}
    >
      {principles}
    </Carousel>
  );
}
