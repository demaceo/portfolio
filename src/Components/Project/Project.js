import React from 'react'
// import projects from "../../utilities/projectData.js";\
import { Link } from "react-router-dom";

export default function Project({ data, name }) {
  const projectImg = data.map((project) => {
    const { id, image } = project;
    return (
      <Link to={`/${name}/${id}`}>
        <img src={image} key={id} id={id} className="app-img" />
      </Link>
    );
  });
  return (
    <>
      <h1>{name}!</h1>
      {projectImg}
    </>
  );
}
