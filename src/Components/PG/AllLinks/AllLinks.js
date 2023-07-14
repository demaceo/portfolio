import "./AllLinks.css";
import React from "react";
import LinkItem from "../LinkItem/LinkItem";

function MeetupList(props) {
  return (
    <section className="list">
      {props.meetups.map((meetup) => (
        <LinkItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          link={meetup.link}
          date={meetup.date}
          description={meetup.description}
          from={meetup.from}
          title={meetup.title}
        />
      ))}
    </section>
  );
}

export default MeetupList;
