import "./Hero.css";
import React, { memo } from "react";
import PurpleHaze from "../PurpleHaze/PurpleHaze.tsx";
const Hero = memo(() => {
  // const [hovered, setHovered] = useState(false);

  return (
    <section className="hero-container">
      <PurpleHaze />
      {/* <div className={`hero-text-container`}>
        <h2 id="top-text">Making the invisible</h2>
        <div
          className={`bttm-text-container ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
        >
          <h1 id="bttm-text">VISIBLE</h1>
        </div>
      </div> */}
      <a href="#services-slide" className="">
        <div className="scroll-down"></div>
      </a>
    </section>
  );
});

export default Hero;
