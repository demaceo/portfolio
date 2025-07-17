import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
import logo from "../../assets/logo/logo(light).png";

import "./MacintoshLanding.css";

const MacintoshLanding = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleAppClick = (path) => {
    if (path === "/contact") {
      setShowContactForm(true);
    } else {
      navigate(path);
    }
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  const desktopApps = [
    { name: "About Me", icon: "👤", path: "/mindset" },
    { name: "Toolkit", icon: "🧰", path: "/skillset" },
    { name: "Projects", icon: "💼", path: "/projects" },
    { name: "Resume", icon: "📄", path: "/resume" },
    { name: "Contact", icon: "📧", path: "/contact" },
  ];

  const mobileApps = [
    { name: "About", icon: "👤", path: "/mindset" },
    { name: "Projects", icon: "💼", path: "/projects" },
    { name: "Resume", icon: "📄", path: "/resume" },
    { name: "Toolkit", icon: "🧰", path: "/skillset" },
    { name: "Contact", icon: "📧", path: "/contact" },
    { name: "Photos", icon: "📷", path: "/projects" },
    { name: "Settings", icon: "⚙️", path: "/mindset" },
    { name: "Messages", icon: "💬", path: "/mindset" },
    { name: "Calendar", icon: "📅", path: "/resume" },
  ];

  if (isMobile) {
    return (
      <div className="iphone-container">
        <div className="iphone-screen">
          <div className="status-bar">
            <span className="carrier">Demaceo</span>
            <span className="time">{formatTime(currentTime)}</span>
            <span className="battery">🔋</span>
          </div>

          <div className="wallpaper">
            <div className="home-apps">
              {mobileApps.map((app, index) => (
                <div
                  key={index}
                  className="app-icon"
                  onClick={() => handleAppClick(app.path)}
                >
                  <div className="icon">{app.icon}</div>
                  <span className="app-name">{app.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dock-mobile">
            <div
              className="dock-app"
              onClick={() => handleAppClick("/projects")}
            >
              💼
            </div>
            <div
              className="dock-app"
              onClick={() => handleAppClick("/mindset")}
            >
              👤
            </div>
            <div className="dock-app" onClick={() => handleAppClick("/resume")}>
              📄
            </div>
          </div>
        </div>

        {showContactForm && (
          <div className="contact-overlay">
            <div className="contact-window">
              <div className="contact-header">
                {/* <span>Contact Me</span> */}
                <button className="close-contact" onClick={handleCloseContact}>
                  ✕
                </button>
              </div>
              <div className="contact-content">
                <ContactForm />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="macintosh-container">
      <div className="mac-screen">
        <div className="menu-bar">
          <div className="menu-left">
            <img className="apple-logo" alt="portfolio-logo" src={logo} />
            <span className="menu-item">File</span>
            <span className="menu-item">Edit</span>
            <span className="menu-item">View</span>
            <span className="menu-item">Special</span>
          </div>
          <div className="menu-right">
            <span className="time">{formatTime(currentTime)}</span>
            <span className="date">{formatDate(currentTime)}</span>
          </div>
        </div>

        <div className="desktop">
          <div className="desktop-items">
            {desktopApps.map((app, index) => (
              <div
                key={index}
                className="desktop-icon"
                onClick={() => handleAppClick(app.path)}
              >
                <div className="icon-image">{app.icon}</div>
                <span className="icon-label">{app.name}</span>
              </div>
            ))}
          </div>

          <div className="welcome-window">
            <div className="window-title-bar">
              <div className="window-controls">
                <div className="close-btn"></div>
              </div>
              <span className="window-title">
                Welcome to Demaceo's Portfolio
              </span>
            </div>
            <div className="window-content">
              <h2>Hello, I'm Demaceo Vincent</h2>
              <p>
                Welcome to my digital workspace. Click on the icons to explore
                my work, learn about me, and/or how to contact me.
              </p>
              <div className="quick-links">
                <button onClick={() => handleAppClick("/about")}>
                  About Me
                </button>
                <button onClick={() => handleAppClick("/projects")}>
                  View Projects
                </button>
                <button onClick={() => handleAppClick("/contact")}>
                  Contact Me
                </button>
                <button onClick={() => handleAppClick("/resume")}>
                  My Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="taskbar">
          <div className="start-menu">Demaceo's Mac</div>
          <div className="running-apps">
            <div className="app-tab active">Finder</div>
            <div className="app-tab">Portfolio</div>
          </div>
        </div>
      </div>

      {showContactForm && (
        <div className="contact-overlay">
          <div className="contact-window">
            <div className="contact-header">
              <span>Contact Me</span>
              <button className="close-contact" onClick={handleCloseContact}>
                ✕
              </button>
            </div>
            <div className="contact-content">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MacintoshLanding;
