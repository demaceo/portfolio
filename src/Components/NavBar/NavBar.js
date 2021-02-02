import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <ul className="nav-bar">
        <Link to="/" className="option">
          <i className="fas fa-campground" aria-hidden="true"></i>
          <span className="option-text">Home</span>
        </Link>
        <Link to="/projects" className="option">
          <i className="fas fa-fingerprint" aria-hidden="true"></i>
          <span className="option-text">Projects</span>
        </Link>
        <Link to="/aboutme" className="option">
          <i className="fas fa-male" aria-hidden="true"></i>
          <span className="option-text">About Me</span>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
