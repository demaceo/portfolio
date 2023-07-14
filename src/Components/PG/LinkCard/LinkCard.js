import React from "react";
import "./LinkCard.css";

function LinkCard(props) {
  return <div className="link-card">{props.children}</div>;
}

export default LinkCard;
