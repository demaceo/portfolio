import React from "react";
import "./timeline.css";
import timelineData from "../../utilities/timelineData.js";

export default function Timeline() {
  const timelineItems = timelineData.map((item) => {
    const { id, location, category, text, date } = item;
    return (
      <section className="timeline-item" key={id} id={id}>
        <div className="timeline-item-content">
          {/* <img className="job-img" alt={job} src={`${image}`} /> */}
          <time>{date}</time>
          <span className="tag" style={{ background: category.color }}>
            {category.tag}
          </span>
          <h1 className="job-location">{location}</h1>
          {/* <h2 className="job-title">{job}</h2> */}
          <p className="job-info">{text}</p>
        </div>
      </section>
    );
  });
  return <div className="timeline-container">{timelineItems}</div>;
}
