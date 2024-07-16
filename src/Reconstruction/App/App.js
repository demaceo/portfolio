import React from "react";
import { Routes, Route } from "react-router-dom";
// import Layout from "../Layout/Layout.js";

// import Projects from "../Projects/Projects.js";
import NavBar from "../../Reconstruction/NavBar/NavBar.js";
// import Hero from "../../Reconstruction/Hero/Hero.js"



function App() {
  return (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
            <NavBar />
            {/* <Hero/> */}
            {/* <Profile/> */}
              {/* <Bubbles /> <Waves /> */}
            </>
          }
        />
        {/* <Route exact path="/projects" element={<Projects />} /> */}
        <Route
          exact
          path="/experience"
          element={
            <>
              {/* <AboutMe /> */}
              {/* <Timeline /> */}
            </>
          }
        />
        {/* <Route exact path="/pg" element={<AllLinksPage />} /> */}
      </Routes>
  )
}

export default App;
