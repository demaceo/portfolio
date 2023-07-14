import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.js";
import Bubbles from "../Bubbles/Bubbles.js";
import Waves from "../Waves/Waves.js";
import Projects from "../Projects/Projects.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Timeline from "../Timeline/Timeline.js";
import AllLinksPage from "../PG/AllLinksPage/AllLinksPage.js";


function App() {
  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Bubbles /> <Waves />
            </>
          }
        />
        <Route exact path="/projects" element={<Projects />} />
        <Route
          exact
          path="/experience"
          element={
            <>
              <AboutMe />
              <Timeline />
            </>
          }
        />
        <Route exact path="/pg" element={<AllLinksPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
