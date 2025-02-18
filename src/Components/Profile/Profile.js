import "./Profile.css";
import ServiceSlide from "../ServiceSlide/ServiceSlide";
import PrinciplesSlide from "../PrinciplesSlide/PrinciplesSlide";

export default function Profile() {
  return (
    <section className="profile-slides-container">
      <ServiceSlide />
      <PrinciplesSlide />
    </section>
  );
}
