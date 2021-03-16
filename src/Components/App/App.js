import "./App.css";
import React, { useState, useReducer, useContext } from "react";
import ThemeProvider, {
  useTheme,
  useThemeUpdate,
} from "../../utilities/ThemeContext";
// import { useLocalStorage } from "../../utilities/useLocalStorage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Bubbles from "../Bubbles/Bubbles";
import Waves from "../Waves/Waves";
import Header from "../Header/Header";
import Timeline from "../Timeline/Timeline";
import LogIn from "../LogIn/LogIn";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Recommendations from "../Recommendations/Recommendations";
// import MapContainer from "../MapView/MapView";
import NavMenu from "../NavMenu/NavMenu";
import WebGazer from "../WebGazer/WebGazer";

export const ThemeContext = React.createContext();
function App() {
  const darkTheme = useTheme();
  const idTheme = darkTheme ? "dark" : "light";


  return (
    <ThemeProvider>
      <Router>
        <div className="App" id={idTheme}>
          <Header />
          <NavMenu />
          <Route exact path="/login" render={() => <LogIn />} />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Bubbles />
                <Waves />
              </>
            )}
          />
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
          <Route exact path="/playlist" render={() => <Recommendations />} />
          {/* <Route exact path="/map" render={() => <MapContainer />} /> */}
          <Route exact path="/gazer" render={() => <WebGazer />} />

          <Route exact path="/projects" render={() => <Projects />} />
          <NavBar />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
