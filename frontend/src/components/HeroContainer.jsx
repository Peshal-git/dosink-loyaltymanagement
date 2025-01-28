import { NavLink } from "react-router-dom";
import "./HeroContainer.css"
export const HeroContainer = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Transforming ideas into
            <span className="hero-color"> Digital Reality </span>
             with our expertise
          </h1>

          <p className="hero-paragraph">
            Bringing your vision to life with fresh, forward-thinking ideas and
            services designed to meet your needs. Dedicated to understanding and
            meeting the unique needs of each client, ensuring that the
            technological transformation is tailored to their specific
            requirements.
          </p>

          <div className="hero-button-container">
            <NavLink to="/our-work" className="learn-button">
              Learn More
            </NavLink>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/images/hero-image.png" alt="hero-image" className="hero-image"/>
        </div>
      </div>
    </>
  );
};