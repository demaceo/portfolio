import React, { useState, useEffect } from "react";
import "./AllLinksPage.css";
import AllLinks from "../AllLinks/AllLinks.js";
import ShareLinkPage from "../ShareLinkPage/ShareLinkPage";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLinks, setLoadedLinks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-c2bb9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.unshift(meetup);
        }
        setIsLoading(false);
        setLoadedLinks(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="loading-section">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="pg-container">
      <h1 className="meetup-header">All Shared Links</h1>
      <ShareLinkPage />
      <AllLinks meetups={loadedLinks} />
    </section>
  );
}

export default AllMeetupsPage;
