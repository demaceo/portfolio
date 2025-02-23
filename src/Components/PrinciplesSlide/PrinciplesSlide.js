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
        <FontAwesomeIcon icon={faFigma} />
        <FontAwesomeIcon icon={faWebflow} />
        <FontAwesomeIcon icon={faGit} />
        <FontAwesomeIcon icon={faNode} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </section>
  );
}
