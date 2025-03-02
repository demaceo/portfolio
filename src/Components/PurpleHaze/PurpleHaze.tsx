import React, { useEffect, useState } from "react";
import "./PurpleHaze.css";

const PurpleHaze: React.FC = () => {
  const heroText = "Demaceo Vincent Developer Designer";
  const [cipherText, setCipherText] = useState(
    "Demaceo Vincent Developer Designer"
  );
  const [isRevealed, setIsRevealed] = useState(false);
  const words = cipherText.split(" "); 

  useEffect(() => {
    const randomChar = () => {
      let rand = Math.floor(Math.random() * (122 - 33 + 1) + 33);
      if (
        (rand > 38 && rand < 48) ||
        (rand > 57 && rand < 63) ||
        (rand > 90 && rand < 97)
      ) {
        rand += 10;
      }
      return String.fromCharCode(rand);
    };

    if (!isRevealed) {
      let i = 0;
      const interval = setInterval(() => {
        setCipherText((prev) => {
          return (
            heroText.substring(0, i) +
            heroText.substring(i).replace(/[^\s]/g, randomChar)
          );
        });

        i++;
        if (i > heroText.length) {
          clearInterval(interval);
          setIsRevealed(true);
        }
      }, 110);

      return () => clearInterval(interval);
    }
  }, [isRevealed]);

  return (
    <section className="haze-wrapper">
      <div className="purple-haze-container">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <filter id="blur">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </svg>

        <div className="h">
          <h1 className={`haze-title ${isRevealed ? "revealed" : ""}`}>
            {words[0]}
          </h1>
          <h1 className={`haze-title title-2 ${isRevealed ? "revealed" : ""}`}>
            {words[1]}
          </h1>
          <h2 className={`haze-subtitle  ${isRevealed ? "revealed" : ""}`}>
            {words[2]} | {words[3]}
          </h2>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="c"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurpleHaze;
