import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCaretDownOutline } from "react-icons/io5";
import SubNavbar from "./SubNavbar";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";
import royalSpiceLogo from "../assets/logo_royal_spices.jpg";

const Navbar = ({ isHomePage }) => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showRecipesDropdown, setShowRecipesDropdown] = useState(false);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isMobileNavbarOpen) {
        setIsMobileNavbarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileNavbarOpen]);

  const toggleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  const handleProductsMouseEnter = () => {
    setShowProductsDropdown(true);
    setShowRecipesDropdown(false);
  };

  const handleProductsMouseLeave = () => {
    setShowProductsDropdown(false);
  };

  const handleRecipesMouseEnter = () => {
    setShowRecipesDropdown(true);
    setShowProductsDropdown(false);
  };

  const handleRecipesMouseLeave = () => {
    setShowRecipesDropdown(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navbarClass = isHomePage
    ? isScrolled
      ? "bg-white text-black shadow-sm"
      : "bg-transparent text-white"
    : "bg-white text-black shadow-sm";

  return (
    <nav className={`font-playfairDisplay top-0 w-full fixed z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="relative z-50">
        <div className="max-w-full sm:px-2 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="brand mr-40">
              <Link to="/" onClick={scrollToTop}>
                <div className="flex justify-center items-center">
                  <p className="ml-2 font-playfairDisplay font-extrabold text-2xl">Royal Spice</p> 
                </div>
              </Link>
            </div>
            <div className="nav-items flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-5 lg:space-x-[57px]">
                  <div className="each-item pt-3">
                    <Link
                      to="/about-us"
                      onClick={scrollToTop}
                      className="hover:text-green-400 no-underline hover:no-underline cursor-pointer text-md font-normal"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="each-item">
                    <Link
                      to="/products/achari-masala"
                      className="flex relative py-3 hover:text-green-400 no-underline hover:no-underline cursor-pointer text-md font-normal"
                      onMouseEnter={handleProductsMouseEnter}
                      onMouseLeave={handleProductsMouseLeave}
                    >
                      <div className="mr-1">Products</div>
                      <div className="pt-[6px]">
                        <IoCaretDownOutline
                          className={`${showProductsDropdown ? "rotate-[180deg]" : ""}`}
                        />
                      </div>
                      {showProductsDropdown && (
                        <SubNavbar isProducts={true} />
                      )}
                    </Link>
                  </div>
                  <div className="each-item">
                    <Link
                      to="#"
                      className="flex relative py-3 hover:text-green-400 no-underline hover:no-underline cursor-pointer text-md font-normal"
                      onMouseEnter={handleRecipesMouseEnter}
                      onMouseLeave={handleRecipesMouseLeave}
                    >
                      <div className="mr-1">Recipes</div>
                      <div className="pt-[6px]">
                        <IoCaretDownOutline
                          className={`${showRecipesDropdown ? "rotate-[180deg]" : ""}`}
                        />
                      </div>
                      {showRecipesDropdown && (
                        <SubNavbar isProducts={false} />
                      )}
                    </Link>
                  </div>
                  <div className="each-item pt-3">
                    <Link
                      to="/contact-us"
                      className="hover:text-green-400 no-underline hover:no-underline cursor-pointer text-md font-normal"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hamburger-button text-xl md:hidden flex justify-end">
              <button
                className="block md:hidden"
                onClick={toggleMobileNavbar}
              >
                {isMobileNavbarOpen ? (
                  <IoClose className={isHomePage && !isScrolled ? "text-white" : "text-black"} />
                ) : (
                  <RiMenu4Fill className={`text-2xl ${isHomePage && !isScrolled ? "text-white" : "text-green-400"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="">{isMobileNavbarOpen && <MobileNavbar />}</div>
      </div>
    </nav>
  );
};

export default Navbar;