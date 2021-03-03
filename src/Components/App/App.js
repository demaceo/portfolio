import "./App.css";
import React, { useState, useReducer, useContext } from "react";
import ThemeProvider from '../../utilities/ThemeContext';
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

// const initalState = {
//   theme: "light",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_THEME":
//       const newTheme = state.theme === "light" ? "dark" : "light";
//       return { ...state, theme: newTheme };
//     default:
//       return state;
//   }
// };

export const ThemeContext = React.createContext();
function App() {
  // const [state, dispatch] = useReducer(reducer, initalState);
  // let [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   const action = { type: "TOGGLE_THEME" };
  //   dispatch(action);
  // };

  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <Header />
        <NavMenu
        // onClick={toggleTheme}
        />
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
