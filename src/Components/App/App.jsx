import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import AboutMe from "../AboutMe/AboutMe";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InteractiveResume from "../WorkXP/InteractiveResume";

function Layout({ children }) {
  return (
    <section className="portfolio-container">
      <NavBar />
      {children}
      <Contact />
    </section>
  );
}


export default function App() {
  return (
    <Routes>
      {/* created a route with the path * to get all non-configured paths and assign them to the attached component */}
      <Route
        path="*"
        element={
          <Layout>
            <Hero />
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Portfolio />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutMe />
          </Layout>
        }
      />
      <Route
        path="/resume"
        element={
          <Layout>
            <InteractiveResume />
          </Layout>
        }
      />
    </Routes>
  );
}
