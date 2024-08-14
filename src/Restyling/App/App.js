import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../Reconstruction/NavBar/NavBar.js";
import Hero from "../../Reconstruction/Hero/Hero.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import Portfolio from "../Portfolio/Portfolio.js";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <NavBar />
            <Hero />
            <Profile />
            <Contact />
          </>
        }
      />
      <Route
        exact
        path="/portfolio"
        element={
          <>
            <NavBar />
            <Portfolio />
            <Contact />
          </>
        }
      />
    </Routes>
  );
}
