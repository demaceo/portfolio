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
        <Link to="/socials" className="option">
          <i className="fas fa-praying-hands" aria-hidden="true"></i>
          <span className="option-text">Connect</span>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
