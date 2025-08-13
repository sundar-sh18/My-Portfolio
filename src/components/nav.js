import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars} from "@fortawesome/free-solid-svg-icons";
import "./components.css";

export default function Nav() {

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <FontAwesomeIcon icon={faCode} />
      </a>
      
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="navi desktop">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
     
    </nav>
  );
}
