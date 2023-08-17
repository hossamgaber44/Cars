import "./Navbar.css";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="header">
          <div className="nav-icon">
            <img src="img/logo2.png" ></img>
          </div>
          <nav style={{ right: toggle && "0" }} className="navbar">
            <div className="navbar-close-icon">
              <i className="fa-solid fa-x" onClick={() => setToggle(false)}></i>
            </div>
            <ul className="navbar-links">
              <Link to="#home" smooth onClick={() => setToggle(false)} className="navbar-link">
                Home
              </Link>
              <Link to="#cars" smooth onClick={() => setToggle(false)} className="navbar-link">
                Cars
              </Link>
              <Link to="#about" smooth onClick={() => setToggle(false)} className="navbar-link">
                About
              </Link>
              <Link to="#parts" smooth onClick={() => setToggle(false)} className="navbar-link">
                Parts
              </Link>
              <Link to="#blog" smooth onClick={() => setToggle(false)} className="navbar-link">
                Blog
              </Link>
              <Link to="#featured-Cars" smooth onClick={() => setToggle(false)} className="navbar-link">
                Featured Cars
              </Link>
            </ul>
          </nav>
          <div onClick={() => setToggle(true)} className="top-header-menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar
