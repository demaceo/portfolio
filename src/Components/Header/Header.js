import { useState, useRef, useEffect } from "react";
// import "./Header.css";
import './clouds.css';
// import "./clouds2.css";


function Header() {
  const [time, setTime] = useState();
  let date = Date().toLocaleString().slice(0, 10);
  const renderCounter = useRef(0);
  const timeRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString().slice(11));
    }, 1000);
    renderCounter.current = 0;
  }, []);

  return (
    <div id="date" className="header-container">
      <div id="clouds">
        <div className="cloud c1"></div>
        <div className="cloud c2"></div>
        <div className="cloud c3"></div>
        <div className="cloud c4"></div>
        <div className="cloud c5"></div>
      </div>
      <h2 className="date" ref={dateRef}>
        {date}
      </h2>
      <h3 id="time" className="time" ref={timeRef}>
        {time}
      </h3>
    </div>
  );
}

export default Header;
