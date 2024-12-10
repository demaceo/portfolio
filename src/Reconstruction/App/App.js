import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../Reconstruction/NavBar/NavBar.js'
import Hero from '../../Reconstruction/Hero/Hero.js'
import Profile from '../Profile/Profile.js'
import Contact from '../Contact/Contact.js'
import Portfolio from '../Portfolio/Portfolio.js'
// import AvailabilityChecker from "../AvailabilityChecker/AvailabilityChecker.tsx";
import './App.css'
// import CarouselComponent from "../Carousel/Carousel.js";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App () {
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
      {/* created a route with the path * to get all non-configured paths and assign them to the attached component */}
      {/* <Route
        exact
        path='*'
        element={
          <section className='portfolio-container'>
            <NavBar />
            <Contact />
          </section>
        } 
      /> */}
      <Route
        exact
        path='*'
        element={
          <section className='portfolio-container'>
            <NavBar />
            <Hero />
            <Profile />
            <Contact />
          </section>
        }
      />
      <Route
        exact
        path='/projects'
        element={
          <section className='portfolio-container'>
            <NavBar />
            <Portfolio />
            <Contact />
          </section>
        }
      />
    </Routes>
  )
}
