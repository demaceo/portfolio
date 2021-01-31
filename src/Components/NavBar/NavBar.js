import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <ul className="nav-bar">
        <Link to="/" className="option">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span className="option-text">Home</span>
        </Link>
        <Link to="/projects" className="option">
          <i className="fa fa-plus" aria-hidden="true"></i>
          <span className="option-text">Projects</span>
        </Link>
        <Link to="/socials" className="option">
          <i className="fa fa-th-large" aria-hidden="true"></i>
          <span className="option-text">Socials</span>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
