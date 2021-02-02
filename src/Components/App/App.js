import "./App.css";
// import { useState, useEffect } from "react";
// import projects from "../../utilities/projectData.js";
import NavBar from "../NavBar/NavBar";
import Bubbles from "../Bubbles/Bubbles";
import Header from "../Header/Header";

// import Socials from "../Socials/Socials";
// import LogIn from "../LogIn/LogIn";
// import Project from "../Project/Project";
// import AboutMe from "../AboutMe/AboutMe";



import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useLocalStorage } from "../../utilities/useLocalStorage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Route path="/login" render={() => <LogIn />} /> */}
        <Route exact path="/" render={() => <Bubbles />} />
        {/* <Socials /> */}
        {/* <Route exact path="/project" render={() => <Project />} /> */}
        {/* <Route exact path="/developer" render={() => <AboutMe />} /> */}

        {/* <Route
          path="/project/:id"
          render={({ match }) => {
            const project = projects.find(
              (project) => project.id === parseInt(match.params.id)
            );

            if (!project) {
              return <div>Sorry.. no project found with that id!</div>;
            }
            return <Project {...project} />;
          }}
        /> */}
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
