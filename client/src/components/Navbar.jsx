import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import "./Navbar.css"

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(true)

  const toggleNavbar = () => {
    setHamburger(!hamburger)
  }

  return (
    <>
      <nav className="navigation-menu">
          <NavLink to="/">
            <div className="nav-logo">
              <img
                src="/images/dosink-logo-light.png"
                className="nav-logo-img"
                alt="dosink logo"
              />
            </div>
          </NavLink>

          <ul className="menu-list">
            <li className="menu-item">
              <NavLink to="/services" className="link">
                Services
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/process" className="link">
                Process
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink to="/team" className="link">
                Team
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink to="/our-work" className="link">
                Our Work
              </NavLink>
            </li>
          </ul>
        

        <NavLink to="/contact" className="contact-button">
          <IoCall size={20}/>
          <p>Contact Us</p>
        </NavLink>

        <NavLink to="/login" className="login-button">
          <FaUser size={20}/>
          <p> Login </p>
        </NavLink>
      </nav>


      <nav className="navigation-menu-mobile">

          <NavLink to="/" onClick={toggleNavbar}>
            <div className="nav-logo">
              <img
                src="/images/dosink-logo-light.png"
                className="nav-logo-img"
                alt="dosink logo"
              />
            </div>
          </NavLink>

          <div className={`toggle-bar ${hamburger ? "hide" : ""}`}>
            <ul className= "menu-list">
              <li className="menu-item">
                <NavLink to="/services" className="link" onClick={toggleNavbar}>
                  Services
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/process" className="link" onClick={toggleNavbar}>
                  Process
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="/team" className="link" onClick={toggleNavbar}>
                  Team
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="/our-work" className="link" onClick={toggleNavbar}>
                  Our Work
                </NavLink>
              </li>
            </ul>

            <div className="toggle-bottom">
              <NavLink to="/contact" className="contact-button" onClick={toggleNavbar}>
                <IoCall size={20}/>
                <p>Contact Us</p>
              </NavLink>

              <NavLink to="/login" className="login-button" onClick={toggleNavbar}>
                <FaUser size={20}/>
                <p> Login </p>
              </NavLink>
            </div>

          </div>



          <button className="ham-button" onClick={toggleNavbar}>
          <RxHamburgerMenu size={25}/>
          </button>
          
      </nav>



    </>
  );
};
