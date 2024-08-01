import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../Reconstruction/NavBar/NavBar.js";
import Hero from "../../Reconstruction/Hero/Hero.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import Portfolio from "../Portfolio/Portfolio.js";
// import CarouselComponent from "../Carousel/Carousel.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // const getDeviceType = () => {
  //   const width = window.innerWidth;

  //   if (width >= 1024) {
  //     return "desktop";
  //   } else if (width >= 464 && width < 1024) {
  //     return "tablet";
  //   } else {
  //     return "mobile";
  //   }
  // };

  // const deviceType = getDeviceType();
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
            {/* <CarouselComponent deviceType={deviceType} /> */}

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
