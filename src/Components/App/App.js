import "./App.css";
// import { useState, useEffect } from "react";
// import projects from "../../utilities/projectData.js";
import NavBar from "../NavBar/NavBar";
import Bubbles from "../Bubbles/Bubbles";
import Header from "../Header/Header";
import Timeline from "../Timeline/Timeline";
// import LogIn from "../LogIn/LogIn";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useLocalStorage } from "../../utilities/useLocalStorage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Route path="/login" render={() => <LogIn />} /> */}
        <Route exact path="/" render={() => <Bubbles />} />
        <Route
          exact
          path="/aboutme"
          render={() => (
            <>
              <AboutMe />
              <Timeline />
            </>
          )}
        />
        <Route exact path="/projects" render={() => <Projects />} />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
