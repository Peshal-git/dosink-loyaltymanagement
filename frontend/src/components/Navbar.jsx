import { NavLink } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <>
      <nav className="navigation-menu">
        <div className="navigation-wrapper">
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
        </div>

        <NavLink to="/contact" className="contact-button">
          <img
            src="/images/call-icon.png"
            alt="contact-icon"
            className="contact-icon"
          />
          <p>Contact Us</p>
        </NavLink>
        <NavLink to="/login" className="login-button">
          <img
            src="/images/user-logo.png"
            alt="user-logo"
            className="user-logo"
          />
          <p> Login </p>
        </NavLink>
      </nav>
    </>
  );
};
