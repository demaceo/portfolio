import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const targetDate = new Date("June 6, 2027");
      const currentDate = new Date();

      // Calculate the difference in milliseconds
      const difference = targetDate - currentDate;

      // Convert to days
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

      setDaysLeft(days);
    };

    calculateDaysLeft();

    // Update the countdown every day
    const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <h1 className="countdown-title">Countdown to the Decision</h1>
        <div className="countdown-value">{daysLeft}</div>
        <div className="countdown-text">
          days left of{" "}
          <span
            className="bet-text"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
          >
            the bet
            {showTooltip && (
              <span className="tooltip">
                if we're single at 35 then we'll give in
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
