import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Hero from "../Hero/Hero.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import Projects from "./Projects/Projects.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Projects />
          </Layout>
        }
      />
    </Routes>
  );
}
