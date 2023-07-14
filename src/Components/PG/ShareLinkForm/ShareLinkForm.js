import React, { useRef } from "react";
import "./ShareLinkForm.css";

function ShareLinkForm(props) {
  const titleInputRef = useRef();
  // const imageInputRef = useRef();
  const fromInputRef = useRef();
  // const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredFrom = fromInputRef.current.value;

    const metaData = await fetch(
      `https://jsonlink.io/api/extract?url=${enteredTitle}`
    ).then((response) => {
      return response.json();
    });

    const linkData = {
      title: metaData.title,
      image:
        metaData.images[0] || `https://picsum.photos/1000? ${+Math.random()}`,
      description: metaData.description,
      link: metaData.url,
      from: enteredFrom,
      date: Date().toLocaleString().slice(0, 10),
    };
    props.onShareLink(linkData);
  }
  return (
    <section className="form-section">
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">URL Link:</label>
          <input type="url" required id="title" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="parents">From:</label>
          <select
            name="select-list"
            id="parents"
            ref={fromInputRef}
            className="dropdown-content"
          >
            <option value=" "> </option>
            <option value="Fasha">Fasha</option>
            <option value="Momar">Momar</option>
          </select>
        </div>
        <div className="actions">
          <button>Share</button>
        </div>
      </form>
    </section>
  );
}

export default ShareLinkForm;
