import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [time, setTime] = useState();
  let date = Date().toLocaleString().slice(0, 10);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString().slice(10));
    }, 1000);
  }, []);

  return (
    <section className="header-container">
      <div className="header">
        <div className="animated-content" id="clouds">
          <div className="cloud c1"></div>
          <div className="cloud c2"></div>
          <div className="cloud c3"></div>
          <div className="cloud c4"></div>
          <div className="cloud c5"></div>
        </div>
        <h2 id="date">{date}</h2>
        <h3 id="time" className="time">
          {time}
        </h3>
      </div>
    </section>
  );
}
