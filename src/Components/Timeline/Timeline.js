import React from "react";
import "./Timeline.css";
import timelineData from "../../utilities/timelineData.js";
import { nanoid } from "nanoid";

export default function Timeline() {
  const timelineItems = timelineData.map((item) => {
    const { id, location, category, description, date } = item;
    return (
      <section className="timeline-item" key={id} id={id}>
        <div className="timeline-item-content">
          <time>{date}</time>
          <span className="tag" style={{ background: category.color }}>
            {category.tag}
          </span>
          <h1 className="job-location">{location}</h1>
          <ul className="job-info">
            {description.map((descriptor) => {
              return (
                <li className="info-text" key={nanoid()}>
                  {descriptor.point}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  });
  return <div className="timeline-container">{timelineItems}</div>;
}
