import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";

function NavBar() {
  return (
    <div className="nav-container syne-font">
      <div className="logo-container">
        <img id="logo" src={logo} />
        <div className="descriptor-container">
          <div id="name">Demaceo Vincent</div>
          <div id="occupation">Designer and Developer</div>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/" className="link">
          <i className="fa fa-id-badge" aria-hidden="true"></i>
          <span className="option-text">Profile</span>
        </Link>
        <Link to="/portfolio" className="link">
          <i className="fa fa-layer-group" aria-hidden="true"></i>
          <span className="option-text">Portfolio</span>
        </Link>
        <Link to="/contact" className="link">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
          <span className="option-text">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
