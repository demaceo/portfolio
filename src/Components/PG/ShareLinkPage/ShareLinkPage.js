import React from "react";
import ShareLinkForm from "../ShareLinkForm/ShareLinkForm.js";
// import { useNavigate } from "react-router-dom";
import "./ShareLinkPage.css";

function ShareLinkPage() {
  // const navigateTo = useNavigate();

  function addLinkHandler(linkData) {
    //Google Firebase requires '.json' at the end of fetch URLs
    fetch(
      "https://react-getting-started-c2bb9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(linkData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // navigateTo("/pg");
      window.location.reload();
    });
  }
  return (
    <section className="form-page-container">
      {/* <h1 className="link-header">Share A New Link</h1> */}
      <ShareLinkForm onShareLink={addLinkHandler} />
    </section>
  );
}

export default ShareLinkPage;
