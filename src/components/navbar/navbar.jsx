import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fl-c-c-r">
      <div className="navleft">
        <b><span className="first-letter">J</span>ay</b>
      </div>
      <div className="navright">
        <Link to="/" className="home-link">Home</Link>
        <Link to="/about" className="home-link">About</Link>
        <Link to="/projects" className="home-link">Projects</Link>
        <Link to="/certificates" className="home-link">Certificates</Link>
      </div>
    </nav>
  );
}

export default Navbar;
