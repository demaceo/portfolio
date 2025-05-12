import "./PrinciplesSlide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faWebflow,
  faGit,
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faGithub,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import CarouselComponent from "../Carousel/Carousel";
import { useEffect, useState } from "react";

export default function PrinciplesSlide() {

   const [deviceType, setDeviceType] = useState("desktop");

   useEffect(() => {
     const updateDeviceType = () => {
       const width = window.innerWidth;
       setDeviceType(
         width >= 1024 ? "desktop" : width >= 464 ? "tablet" : "mobile"
       );
     };
     updateDeviceType();
     window.addEventListener("resize", updateDeviceType);
     return () => window.removeEventListener("resize", updateDeviceType);
   }, []);
  return (
    <section className="principles-page">
      <div className="principle-main-title-container">
        <h2 className="principle-main-title">Principles & Strategies</h2>
      </div>
      <div className="principle-boxes-container">
        <CarouselComponent deviceType={deviceType} />
      </div>
      <div className="tools-icons-container">
        <FontAwesomeIcon icon={faFigma} title="Figma" />
        <FontAwesomeIcon icon={faWebflow} title="Webflow" />
        <FontAwesomeIcon icon={faGit} title="Git" />
        <FontAwesomeIcon icon={faNode} title="Node.js" />
        <FontAwesomeIcon icon={faReact} title="React" />
        <FontAwesomeIcon icon={faJs} title="JavaScript" />
        <FontAwesomeIcon icon={faCss3} title="CSS3" />
        <FontAwesomeIcon icon={faHtml5} title="HTML5" />
        <FontAwesomeIcon icon={faGithub} title="GitHub" />
      </div>
    </section>
  );
}
