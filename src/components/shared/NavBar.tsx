import { Link, useLocation } from "react-router-dom"; // Import the necessary hooks

import { navLinks } from "@/constants/navLinks";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import Button from "./Button";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setMenu(!menu);

    if (menu) {
      // Enable scrolling when the menu is closed
      document.body.style.overflow = "auto";
    } else {
      // Disable scrolling when the menu is open
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <nav className="container mx-auto rounded-lg max-md:left-0 max-md:rounded-none max-md:top-0 max-md:w-full shadow-light100_darknone z-50 w-full sm:px-12 max-md:border-none relative ">
      <div className="  flex flex-between items-center mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24">
        <Link to="/" className="flex-between gap-1">
          {" "}
          {/* Use Link for the home page */}
          <img
            className="w-[12rem] max-sm:w-[8rem]"
            src="/assets/images/Logo.png"
            alt="Logic Loops"
          />
        </Link>

        <div className="flex items-center gap-8 max-lg:hidden">
          {navLinks.map((item) => (
            <Link
              to={item.route}
              className={`hover:text-red-600 whitespace-nowrap truncate font-semibold text-primary-500 ${
                location.pathname === item.route ? "text-black" : "" // Apply 'text-black' class to the active link
              }`}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="lg:hidden mr-8">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className="h-30 text-orange-500" />
          </button>
        </div>

        {menu && (
          <div className="lg:hidden fixed w-[20rem] justify-between flex flex-col gap-4 right-0 top-0 z-50 h-screen bg-slate-300 py-2 px-4 transition-transform ease-in-out duration-300 transform translate-x-0">
            <div className="flex justify-between overflow-x-hidden items-center gap-16">
              <div className="flex items-center gap-1">
                <img
                  className="w-20"
                  src="/assets/images/Logo.png"
                  alt="Logic Loops"
                />
              </div>
              <button onClick={toggleMenu}>X</button>
            </div>
            <div className="flex flex-col gap-4 pr-4 items-center">
              {navLinks.map((item) => (
                <Link
                  to={item.route} // Use Link for navigation links
                  className="hover:text-primary-500 text-lg text-left"
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="items-center flex flex-col gap-4">
                <div className="flex gap-1 items-center">
                  <GrMail />
                  <p>waamoreliefdevelopment.org</p>
                </div>
                <div className="flex gap-1 items-center">
                  <BsFillTelephoneFill />
                  <p>(612) 644 - 7979 / (214) 929 - 2796</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button label="Register now" />
                <Button secondary label="Donate now" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
