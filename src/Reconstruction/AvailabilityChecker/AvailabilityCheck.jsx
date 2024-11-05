import React, { useState, useEffect } from "react";
import { initClient, getEvents } from "../../api/googleCalendar.ts";
import "./AvailabilityChecker.css";

const AvailabilityChecker = () => {
  const EMAIL = process.env.REACT_APP_EMAIL_ADDRESS; // Use 'REACT_APP_' prefix for environment variables in React
  const [mutualFreeTimes, setMutualFreeTimes] = useState([]); 
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  useEffect(() => {
    initClient().catch((error) => {
      console.error("Error initializing Google API client:", error);
    });
  }, []);

  const handleFetchEvents = async () => {
    try {
      const events = await getEvents(EMAIL, dateRange.start, dateRange.end);
      const freeTimes = findFreeTimes(events);
      setMutualFreeTimes(freeTimes);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const findFreeTimes = (events) => {
    const busyTimes = events.map((event) => ({
      start: new Date(event.start.dateTime),
      end: new Date(event.end.dateTime),
    }));

    const freeTimes = [];
    const startOfDay = new Date(dateRange.start);
    startOfDay.setHours(9, 0, 0); // Set start to 9 a.m. MT
    const endOfDay = new Date(dateRange.end);
    endOfDay.setHours(18, 0, 0); // Set end to 6 p.m. MT

    let currentStart = new Date(startOfDay);
    busyTimes.forEach((busyTime) => {
      if (currentStart < busyTime.start) {
        freeTimes.push({ start: currentStart, end: busyTime.start });
      }
      currentStart = new Date(busyTime.end);
    });

    if (currentStart < endOfDay) {
      freeTimes.push({ start: currentStart, end: endOfDay });
    }

    return freeTimes;
  };

  return (
    <section className="availability-container">
      <h2>Find My Availability</h2>
      <div className="dates-container">
        <label>
          Start Date:
          <input
            type="datetime-local"
            onChange={(e) =>
              setDateRange({ ...dateRange, start: e.target.value })
            }
          />
        </label>
        <label>
          End Date:
          <input
            type="datetime-local"
            onChange={(e) =>
              setDateRange({ ...dateRange, end: e.target.value })
            }
          />
        </label>
      </div>
      <button className="availability-button" onClick={handleFetchEvents}>
        Check Availability
      </button>
      <div className="free-time-container">
        <h3>Free Times:</h3>
        {mutualFreeTimes.length > 0 ? (
          mutualFreeTimes.map((time, index) => (
            <div key={index}>
              {time.start.toLocaleString()} - {time.end.toLocaleString()}
            </div>
          ))
        ) : (
          <p>No free times available.</p>
        )}
      </div>
    </section>
  );
};

export default AvailabilityChecker;
