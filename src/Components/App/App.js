import "./App.css";
// import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Project from "../Project/Project";
import AboutMe from "../AboutMe/AboutMe";
import Bubbles from "../Bubbles/Bubbles";
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useLocalStorage } from "../../utilities/useLocalStorage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={() => <Bubbles />}
        />
        <Route exact path="/project" render={() => <Project/>} />
        <Route exact path="/developer" render={() => <AboutMe />} />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
