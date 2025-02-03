import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);

  const toggleNavbar = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 lg:px-6 lg:py-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="/images/dosink-logo-light.png"
            alt="dosink-logo"
            className="max-h-8 object-scale-down"
          />
        </NavLink>

        <div className="hidden gap-12 md:flex">
          <NavLink
            to="/services"
            className="font-semibold hover:text-burntorange"
          >
            Services
          </NavLink>
          <NavLink
            to="/process"
            className="font-semibold hover:text-burntorange"
          >
            Process
          </NavLink>
          <NavLink to="/team" className="font-semibold hover:text-burntorange">
            Team
          </NavLink>
          <NavLink
            to="/our-work"
            className="font-semibold hover:text-burntorange"
          >
            Our Work
          </NavLink>
          <NavLink
            to="/contact"
            className="font-semibold hover:text-burntorange"
          >
            Contact Us
          </NavLink>
        </div>

        <NavLink
          to="/login"
          className="cursor-pointer rounded-lg bg-blue-950 px-3 py-2 text-amber-50 hover:bg-gray-500 hidden md:block font-semibold"
        >
          Login
        </NavLink>

        <button className="flex items-center md:hidden" onClick={toggleNavbar}>
          <RxHamburgerMenu size={25} />
        </button>

        <div
          className={`fixed inset-0 flex flex-col justify-between bg-white md:hidden z-50 ${
            hamburger ? "hidden" : ""
          }`}
        >
          <div>
            <div className="flex items-center justify-between p-3">
              <NavLink
                to="/"
                className="flex items-center"
                onClick={toggleNavbar}
              >
                <img
                  src="/images/dosink-logo-light.png"
                  alt="dosink-logo"
                  className="max-h-8 object-scale-down"
                />
              </NavLink>

              <button
                className="flex items-center md:hidden"
                onClick={toggleNavbar}
              >
                <IoClose size={25} />
              </button>
            </div>

            <div className="mt-6">
              <NavLink
                to="/services"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-gray-200"
                onClick={toggleNavbar}
              >
                Services
              </NavLink>
              <NavLink
                to="/process"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-gray-200"
                onClick={toggleNavbar}
              >
                Process
              </NavLink>
              <NavLink
                to="/team"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-gray-200"
                onClick={toggleNavbar}
              >
                Team
              </NavLink>
              <NavLink
                to="/our-work"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-gray-200"
                onClick={toggleNavbar}
              >
                Our Work
              </NavLink>
              <NavLink
                to="/contact"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-gray-200"
                onClick={toggleNavbar}
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="p-3">
            <div className="h-[1px] bg-gray-400"></div>

            <div className="mt-6 flex">
              <NavLink
                to="/login"
                className="cursor-pointer rounded-lg bg-blue-950 px-10 py-3 text-amber-50 hover:bg-gray-500"
                onClick={toggleNavbar}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
