import React, { useState, useEffect } from "react";
import { initClient, getEvents } from "../../api/googleCalendar.ts";
import "./AvailabilityChecker.css";

interface Event {
  start: { dateTime: string };
  end: { dateTime: string };
}

interface FreeTime {
  start: Date;
  end: Date;
}

const AvailabilityChecker: React.FC = () => {
  const [events, setEvents] = useState<Event[][]>([]);
  const [mutualFreeTimes, setMutualFreeTimes] = useState<FreeTime[]>([]);
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: "",
    end: "",
  });

  useEffect(() => {
    initClient().catch((error) => {
      console.error("Error initializing Google API client:", error);
    });
  }, []);

  const handleFetchEvents = async () => {
    try {
      const participants = [
        "hdemaceo@gmail.com",
        "dhoward@uprightedu.com",
        "deusexdoodlebob@gmail.com",
      ];
      const allEvents = await Promise.all(
        participants.map((email) =>
          getEvents(email, dateRange.start, dateRange.end)
        )
      );
      setEvents(allEvents);
      findMutualAvailability(allEvents);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const findMutualAvailability = (allEvents: Event[][]) => {
    const freeTimes = allEvents.map((userEvents) => findFreeTimes(userEvents));
    const mutualFree = getMutualFreeTimes(freeTimes);
    setMutualFreeTimes(mutualFree);
  };

  const findFreeTimes = (events: Event[]): FreeTime[] => {
    const busyTimes = events.map((event) => ({
      start: new Date(event.start.dateTime),
      end: new Date(event.end.dateTime),
    }));

    const freeTimes: FreeTime[] = [];
    let startOfDay = new Date(dateRange.start);
    let endOfDay = new Date(dateRange.end);

    busyTimes.forEach((busyTime) => {
      if (startOfDay < busyTime.start) {
        freeTimes.push({ start: startOfDay, end: busyTime.start });
      }
      startOfDay = busyTime.end;
    });

    if (startOfDay < endOfDay) {
      freeTimes.push({ start: startOfDay, end: endOfDay });
    }
    return freeTimes;
  };

  const getMutualFreeTimes = (freeTimes: FreeTime[][]): FreeTime[] => {
    if (freeTimes.length === 0) return [];

    let mutualFreeTimes = freeTimes[0];

    for (let i = 1; i < freeTimes.length; i++) {
      const nextUserFreeTimes = freeTimes[i];
      mutualFreeTimes = mutualFreeTimes.flatMap((mutual) => {
        return nextUserFreeTimes.flatMap((time) => {
          const start = new Date(
            Math.max(mutual.start.getTime(), time.start.getTime())
          );
          const end = new Date(
            Math.min(mutual.end.getTime(), time.end.getTime())
          );
          return start < end ? [{ start, end }] : [];
        });
      });
    }

    return mutualFreeTimes;
  };

  return (
    <div className="availability-container">
      <h2>Find Mutual Availability</h2>
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
      <button className="availability-button" onClick={handleFetchEvents}>Check Availability</button>
      <div>
        <h3>Mutual Free Times:</h3>
        {mutualFreeTimes.map((time, index) => (
          <div key={index}>
            {time.start.toLocaleString()} - {time.end.toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityChecker;
