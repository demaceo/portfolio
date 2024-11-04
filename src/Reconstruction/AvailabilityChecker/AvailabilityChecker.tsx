import React, { useState, useEffect } from "react";
// import { initClient, getEvents } from "../api/googleCalendar";
import { initClient, getEvents } from "../../api/googleCalendar.ts";
import "./AvailabilityChecker.css";
// interface Event {
//   start: { dateTime: string };
//   end: { dateTime: string };
// }

// interface FreeTime {
//   start: Date;
//   end: Date;
// }

// const EMAIL = "hdemaceo@gmail.com";

// const AvailabilityChecker: React.FC = () => {
//   const [mutualFreeTimes, setMutualFreeTimes] = useState<FreeTime[]>([]);
//   const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
//     start: "",
//     end: "",
//   });

//   useEffect(() => {
//     initClient().catch((error) => {
//       console.error("Error initializing Google API client:", error);
//     });
//   }, []);

//   const handleFetchEvents = async () => {
//     try {
//       const events = await getEvents(EMAIL, dateRange.start, dateRange.end);
//       const freeTimes = findFreeTimes(events);
//       setMutualFreeTimes(freeTimes);
//     } catch (error) {
//       console.error("Failed to fetch events:", error);
//     }
//   };

//   const findFreeTimes = (events: Event[]): FreeTime[] => {
//     const busyTimes = events.map((event) => ({
//       start: new Date(event.start.dateTime),
//       end: new Date(event.end.dateTime),
//     }));

//     const freeTimes: FreeTime[] = [];
//     const startOfDay = new Date(dateRange.start);
//     startOfDay.setHours(9, 0, 0); // Set start to 9 a.m. MT
//     const endOfDay = new Date(dateRange.end);
//     endOfDay.setHours(18, 0, 0); // Set end to 6 p.m. MT

//     let currentStart = new Date(startOfDay);
//     busyTimes.forEach((busyTime) => {
//       if (currentStart < busyTime.start) {
//         freeTimes.push({ start: currentStart, end: busyTime.start });
//       }
//       currentStart = new Date(busyTime.end);
//     });

//     // If there's remaining free time until the end of the working day
//     if (currentStart < endOfDay) {
//       freeTimes.push({ start: currentStart, end: endOfDay });
//     }

//     return freeTimes;
//   };

//   return (
//     <div className="availability-container">
//       <h2>Find My Availability</h2>
//       <div className="dates-container">
//         <label>
//           Start Date:
//           <input
//             type="datetime-local"
//             onChange={(e) =>
//               setDateRange({ ...dateRange, start: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           End Date:
//           <input
//             type="datetime-local"
//             onChange={(e) =>
//               setDateRange({ ...dateRange, end: e.target.value })
//             }
//           />
//         </label>
//       </div>
//       <button className="availability-button" onClick={handleFetchEvents}>
//         Check Availability
//       </button>
//       <div>
//         <h3>Mutual Free Times</h3>
//         {mutualFreeTimes.map((time, index) => (
//           <div key={index}>
//             {time.start.toLocaleString()} - {time.end.toLocaleString()}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailabilityChecker;

// src/components/AvailabilityChecker.tsx

interface Event {
  start: { dateTime: string };
  end: { dateTime: string };
}

interface FreeTime {
  start: Date;
  end: Date;
}

const EMAIL = "hdemaceo@gmail.com";

const AvailabilityChecker: React.FC = () => {
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
      const events = await getEvents(EMAIL, dateRange.start, dateRange.end);
      const freeTimes = findFreeTimes(events);
      setMutualFreeTimes(freeTimes);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const findFreeTimes = (events: Event[]): FreeTime[] => {
    const busyTimes = events.map((event) => ({
      start: new Date(event.start.dateTime),
      end: new Date(event.end.dateTime),
    }));

    const freeTimes: FreeTime[] = [];
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

    // If there's remaining free time until the end of the working day
    if (currentStart < endOfDay) {
      freeTimes.push({ start: currentStart, end: endOfDay });
    }

    return freeTimes;
  };

  return (
    <div className="availability-container">
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
      <div>
        <h3>Mutual Free Times</h3>
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
