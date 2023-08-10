import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

/*const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wdiag">About US</a>
    </p>
    <p>
      <a href="#possibility">Medical Records</a>
    </p>
    <p>
      <a href="#features">Doctors</a>
    </p>
    <p>
      <a href="#blog">Services</a>
    </p>
 </>
);
*/
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="diag__navbar">
      <div className="diag__navbar-links">
        <div className="diag__navbar-links_logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="diag__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About US</Link>
          </p>
          <p>
            <Link to="/blogs">Blogs</Link>
          </p>
          <p>
            <Link to="/docs">Doctors</Link>
          </p>
          <p>
            <Link to="/srvcs">Services</Link>
          </p>
        </div>
      </div>
      <div className="diag__navbar-sign">
        <Link to="/signIN" target="_blank">
          <p>Sign UP</p>
        </Link>

        <Link to="/signUP">
          <button type="button">Sign IN</button>
        </Link>
      </div>
      <div className="diag__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="diag__navbar-menu_container scale-up-center">
            <div className="diag__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wdiag">About US</a>
              </p>
              <p>
                <a href="#possibility">Medical Records</a>
              </p>
              <p>
                <a href="#features">Doctors</a>
              </p>
              <p>
                <a href="#blog">Services</a>
              </p>
            </div>
            <div className="diag__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <Link to="/signIN">
                <button type="button">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
