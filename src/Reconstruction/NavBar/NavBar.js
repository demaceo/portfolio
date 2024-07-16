import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        
      </div>
      <div className="nav-links">
        <Link to="/" className="option">
          <i className="fa fa-campground" aria-hidden="true"></i>
          <span className="option-text">Profile</span>
        </Link>
        <Link to="/projects" className="option">
          <i className="fa fa-stream" aria-hidden="true"></i>
          <span className="option-text">Portfolio</span>
        </Link>
        <Link to="/experience" className="option">
          <i className="fas fa-fingerprint fa" aria-hidden="true"></i>
          <span className="option-text">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
