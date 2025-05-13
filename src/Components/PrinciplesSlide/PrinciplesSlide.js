import "./PrinciplesSlide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import principlesData from "../../utilities/principlesData";

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
  faNpm,
  faPython,
  faAws,
  faDocker,
  faLinux,
  faSlack,
  faJira,
  faMarkdown,
  // faTerminal,
  // faDatabase,
  // faCode,
  // faRocket,
  // faLeaf,
} from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

export default function PrinciplesSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [deviceType, setDeviceType] = useState("desktop");

  // useEffect(() => {
  //   const updateDeviceType = () => {
  //     const width = window.innerWidth;
  //     setDeviceType(
  //       width >= 1024 ? "desktop" : width >= 464 ? "tablet" : "mobile"
  //     );
  //   };
  //   updateDeviceType();
  //   window.addEventListener("resize", updateDeviceType);
  //   return () => window.removeEventListener("resize", updateDeviceType);
  // }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % principlesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? principlesData.length - 1 : prev - 1
    );
  };

  const { title, description } = principlesData[currentIndex];
  return (
    <section className="principles-page">
      <div className="principle-main-title-container">
        <h2 className="principle-main-title">Principles & Strategies</h2>
      </div>

      <div className="principle-boxes-container">
        <button className="carousel-nav-btn" onClick={prevSlide}>
          ‹
        </button>
        <div className="principle-box">
          <div className="principle-text-container">
            <h3 className="principle-header">{title}</h3>
            <p className="principle-desc">{description}</p>
          </div>
        </div>
        <button className="carousel-nav-btn" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="tools-icons-container">
        <div className="icon-wrapper" data-tooltip="Figma">
          <FontAwesomeIcon icon={faFigma} />
        </div>
        <div className="icon-wrapper" data-tooltip="Webflow">
          <FontAwesomeIcon icon={faWebflow} />
        </div>
        <div className="icon-wrapper" data-tooltip="Git">
          <FontAwesomeIcon icon={faGit} />
        </div>
        <div className="icon-wrapper" data-tooltip="Node.js">
          <FontAwesomeIcon icon={faNode} />
        </div>
        <div className="icon-wrapper" data-tooltip="React">
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className="icon-wrapper" data-tooltip="JavaScript">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="icon-wrapper" data-tooltip="CSS">
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div className="icon-wrapper" data-tooltip="HTML5">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="icon-wrapper" data-tooltip="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icon-wrapper" data-tooltip="NPM">
          <FontAwesomeIcon icon={faNpm} />
        </div>
        <div className="icon-wrapper" data-tooltip="Python">
          <FontAwesomeIcon icon={faPython} />
        </div>
        <div className="icon-wrapper" data-tooltip="AWS">
          <FontAwesomeIcon icon={faAws} />
        </div>
        <div className="icon-wrapper" data-tooltip="Docker">
          <FontAwesomeIcon icon={faDocker} />
        </div>
        <div className="icon-wrapper" data-tooltip="Linux">
          <FontAwesomeIcon icon={faLinux} />
        </div>
        <div className="icon-wrapper" data-tooltip="Slack">
          <FontAwesomeIcon icon={faSlack} />
        </div>
        <div className="icon-wrapper" data-tooltip="Jira">
          <FontAwesomeIcon icon={faJira} />
        </div>
        <div className="icon-wrapper" data-tooltip="Markdown">
          <FontAwesomeIcon icon={faMarkdown} />
        </div>
      </div>
    </section>
  );
}
