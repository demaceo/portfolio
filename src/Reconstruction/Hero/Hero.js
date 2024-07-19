import "./Hero.css";
import React, { useState } from "react";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="hero-container">
      <div
        className={`hero-text-container ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
      >
        <h2 id="top-text">Making the invisible</h2>
        <h1 id="bttm-text">VISIBLE</h1>
      </div>
    </section>
  );
}
