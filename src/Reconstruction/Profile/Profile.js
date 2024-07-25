import "./Profile.css";
import ServiceSlide from "../ServiceSlide/ServiceSlide";
import PrinciplesSlide from "../PrinciplesSlide/PrinciplesSlide";
// import CarouselComponent from "../Carousel/Carousel";

export default function Profile() {
  return (
    <section className="profile-slides-container">
      <ServiceSlide />
      <PrinciplesSlide />
      {/* <CarouselComponent/> */}
    </section>
  );
}
