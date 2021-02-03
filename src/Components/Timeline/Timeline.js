import React from "react";
import "./timeline.css";
import timelineData from "../../utilities/timelineData.js";

export default function Timeline() {
  const timelineItems = timelineData.map((item) => {
    const { id, job, location, category, text, date, image } = item;
    return (
      <section className="timeline-item" key={id} id={id}>
        <div className="timeline-item-content">
          <time>{date}</time>
          <span className="tag" style={{ background: category.color }}>
            {category.tag}
          </span>
          <h1 className="job-title">{job}</h1>
          <h2 className="job-location">{location}</h2>
          <p className="job-info">{text}</p>
          <img className="job-img" src={image} />
        </div>
      </section>
    );
  });
  return <div className="timeline-container">{timelineItems}</div>;
}
