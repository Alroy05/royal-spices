import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md"; // Email and Location icons from Material Icons

import spiceLogo from "../assets/logo_royal_spices.jpg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const address = "Lokmanya Tilak Rd, Dhobi Talao, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400 001";
const encodedAddress = encodeURIComponent(address);

const ContactInfo = () => {
  return (
    <div className="flex flex-col w-[26%] max-lg:ml-0 max-lg:w-full">
      <div className="flex flex-col grow text-base text-neutral-100 max-lg:mt-10 items-start">
        <Link to="/" onClick={scrollToTop}>
          <p className="text-3xl font-playfairDisplay font-extrabold">Royal Spice</p>
        </Link>
        <h2 className="mt-10 text-xl font-medium text-green-400 font-playfairDisplay max-lg:mt-10">
          Contact Us
        </h2>
        <div className="flex gap-2.5 mt-6 tracking-wide items-start">
          <FaPhoneAlt />
          <div>+91 98745 63215</div>
        </div>
        <div className="flex gap-2.5 mt-6 tracking-wide items-start">
          <MdEmail className="shrink-0 w-5 aspect-square" />
          <div>
            <a href="mailto:info@spiceco.com" className="text-neutral-100">info@royalspices.com</a>
          </div>
        </div>
        <div className="flex gap-2.5 mt-6 tracking-wide items-start">
          <MdLocationOn className="shrink-0 w-[22px] aspect-square" />
          <div className="text-start">
            <a href={`https://www.google.com/maps/place/${encodedAddress}`} className="text-neutral-100">
              {address}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterSection = ({ title, items }) => {
  return (
    <div className="flex flex-col text-base items-start text-neutral-100 max-lg:mt-10">
      <h3 className="text-xl font-medium text-green-400 font-playfairDisplay">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className={`mt-${index === 0 ? 6 : 5} text-start`}>
          {item}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const sections = [
    {
      title: "Our Spices",
      items: [
        <Link to="/product-category/whole-spices" onClick={scrollToTop} className="text-neutral-100">Whole Spices</Link>,
        <Link to="/product-category/ground-spices" onClick={scrollToTop} className="text-neutral-100">Ground Spices</Link>,
        <Link to="/product-category/blends" onClick={scrollToTop} className="text-neutral-100">Spice Blends</Link>,
      ],
    },
    {
      title: "Recipes",
      items: [
        <Link to="/recipes/indian" onClick={scrollToTop} className="text-neutral-100">Indian Cuisine</Link>,
        <Link to="/recipes/mediterranean" onClick={scrollToTop} className="text-neutral-100">Mediterranean Dishes</Link>,
        <Link to="/recipes/mexican" onClick={scrollToTop} className="text-neutral-100">Mexican Favorites</Link>,
        <Link to="/recipes/seasonal" onClick={scrollToTop} className="text-neutral-100">Seasonal Specials</Link>,
      ],
    },
    {
      title: "Learn",
      items: [
        <Link to="/blog" onClick={scrollToTop} className="text-neutral-100">Spice Blog</Link>,
        <Link to="/spice-guide" onClick={scrollToTop} className="text-neutral-100">Spice Guide</Link>,
        <Link to="/cooking-tips" onClick={scrollToTop} className="text-neutral-100">Cooking Tips</Link>,
        <Link to="/health-benefits" onClick={scrollToTop} className="text-neutral-100">Health Benefits</Link>,
        <Link to="/faq" onClick={scrollToTop} className="text-neutral-100">FAQ</Link>,
      ],
    },
    {
      title: "Company",
      items: [
        <Link to="/about" onClick={scrollToTop} className="text-neutral-100">About Us</Link>,
        <Link to="/contact" onClick={scrollToTop} className="text-neutral-100">Contact Us</Link>,
        <Link to="/careers" onClick={scrollToTop} className="text-neutral-100">Careers</Link>,
        <Link to="/terms" onClick={scrollToTop} className="text-neutral-100">Terms of Service</Link>,
        <Link to="/privacy" onClick={scrollToTop} className="text-neutral-100">Privacy Policy</Link>,
        <Link to="/shipping" onClick={scrollToTop} className="text-neutral-100">Shipping Information</Link>,
      ],
    },
  ];

  return (
    <footer className="flex flex-col items-start mx-auto px-20 pt-10 pb-5 bg-green-950 max-lg:px-5 w-full">
  <div className="w-full max-lg:max-w-full">
    <div className="flex gap-10 max-lg:flex-col items-start justify-between">
      <ContactInfo />
      <div className="flex flex-grow gap-5 max-lg:flex-col items-start justify-between">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col w-full max-lg:w-full items-start">
            <FooterSection title={section.title} items={section.items} />
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="shrink-0 mt-14 max-w-full h-0.5 bg-green-500 bg-opacity-60 w-full max-lg:mt-10" />
  <div className="flex gap-5 justify-between mt-5 w-full max-lg:flex-wrap max-lg:max-w-full">
    <div className="self-start text-base font-medium leading-7 text-neutral-100">
      Made with 💖 by Alroy Pereira.
    </div>
    <div className="flex gap-5 justify-start items-center text-white">
      <a href="https://www.facebook.com/spiceco" target="_blank" rel="noreferrer">
        <FaFacebookF className="shrink-0 w-[30px]" />
      </a>
      <a href="https://www.twitter.com/spiceco" target="_blank" rel="noreferrer">
        <FaTwitter className="shrink-0 w-9" />
      </a>
      <a href="https://www.instagram.com/spiceco" target="_blank" rel="noreferrer">
        <FaInstagram className="shrink-0 w-8" />
      </a>
      <a href="https://www.youtube.com/spiceco" target="_blank" rel="noreferrer">
        <FaYoutube className="shrink-0 w-8" />
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
