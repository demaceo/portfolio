import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <Link to="/" className="option">
          <i className="fa fa-campground" aria-hidden="true"></i>
          <span className="option-text">Home</span>
        </Link>
        <Link to="/projects" className="option">
          <i className="fa fa-stream" aria-hidden="true"></i>
          <span className="option-text">Projects</span>
        </Link>
        <Link to="/experience" className="option">
          <i className="fas fa-fingerprint fa" aria-hidden="true"></i>
          <span className="option-text">Experience</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
