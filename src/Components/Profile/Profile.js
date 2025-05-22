import "./Profile.css";
import ServiceSlide from "../ServiceSlide/ServiceSlide";
import AccordionPrinciples from "../PrinciplesSlide/AccordionPrinciples";
export default function Profile() {
  return (
    <section className="profile-slides-container">
      <ServiceSlide />
      <AccordionPrinciples />
    </section>
  );
}
