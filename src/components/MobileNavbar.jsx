import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretUpOutline } from "react-icons/io5";
import { IoCaretDownOutline } from "react-icons/io5";

const productOptions = [
  {
    title: "Blended Spices",
    items: [
      <Link to="/frontend/products/achari-masala">Achari Masala</Link>,
      <Link to="/frontend/products/chole-masala">Chole Masala</Link>,
      <Link to="/frontend/products/garam-masala">Garam Masala</Link>,
      <Link to="/frontend/products/tandoori-masala">Tandoori Masala</Link>,
    ],
  },
  {
    title: "Grounded Spices",
    items: [
      <Link to="/frontend/products/turmeric-powder">Turmeric Powder</Link>,
      <Link to="/frontend/products/red-chili-powder">Red Chili Powder</Link>,
      <Link to="/frontend/products/coriander-powder">Coriander Powder</Link>,
      <Link to="/frontend/products/cumin-powder">Cumin Powder</Link>,
    ],
  },
  {
    title: "Premix",
    items: [
      <Link to="/frontend/products/biryani-mix">Biryani Mix</Link>,
      <Link to="/frontend/products/pav-bhaji-mix">Pav Bhaji Mix</Link>,
      <Link to="/frontend/products/chaat-masala-mix">Chaat Masala Mix</Link>,
    ],
  },
];

const recipeOptions = [
  {
    title: "Indian Dishes",
    items: [
      <Link to="/frontend/recipes/butter-chicken">Butter Chicken</Link>,
      <Link to="/frontend/recipes/palak-paneer">Palak Paneer</Link>,
      <Link to="/frontend/recipes/dal-makhani">Dal Makhani</Link>,
      <Link to="/frontend/recipes/biryani">Biryani</Link>,
    ],
  },
  {
    title: "Global Cuisines",
    items: [
      <Link to="/frontend/recipes/thai-green-curry">Thai Green Curry</Link>,
      <Link to="/frontend/recipes/spaghetti-bolognese">Spaghetti Bolognese</Link>,
      <Link to="/frontend/recipes/sushi-rolls">Sushi Rolls</Link>,
    ],
  },
  {
    title: "Quick Recipes",
    items: [
      <Link to="/frontend/recipes/quick-omelette">5-Minute Omelette</Link>,
      <Link to="/frontend/recipes/instant-noodles-upgrade">Instant Noodles Upgrade</Link>,
      <Link to="/frontend/recipes/microwave-mug-pizza">Microwave Mug Pizza</Link>,
    ],
  },
];

const MobileNavbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isRecipesOpen, setIsRecipesOpen] = useState(false);
  const [isBlendedSpicesOpen, setIsBlendedSpicesOpen] = useState(false);
  const [isGroundedSpicesOpen, setIsGroundedSpicesOpen] = useState(false);
  const [isPremixOpen, setIsPremixOpen] = useState(false);
  const [isIndianDishesOpen, setIsIndianDishesOpen] = useState(false);
  const [isGlobalCuisinesOpen, setIsGlobalCuisinesOpen] = useState(false);
  const [isQuickRecipesOpen, setIsQuickRecipesOpen] = useState(false);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsRecipesOpen(false);
  };

  const toggleRecipes = () => {
    setIsRecipesOpen(!isRecipesOpen);
    setIsProductsOpen(false);
  };

  const toggleBlendedSpices = () => {
    setIsBlendedSpicesOpen(!isBlendedSpicesOpen);
    setIsGroundedSpicesOpen(false);
    setIsPremixOpen(false);
  };

  const toggleGroundedSpices = () => {
    setIsGroundedSpicesOpen(!isGroundedSpicesOpen);
    setIsBlendedSpicesOpen(false);
    setIsPremixOpen(false);
  };

  const togglePremix = () => {
    setIsPremixOpen(!isPremixOpen);
    setIsBlendedSpicesOpen(false);
    setIsGroundedSpicesOpen(false);
  };

  const toggleIndianDishes = () => {
    setIsIndianDishesOpen(!isIndianDishesOpen);
    setIsGlobalCuisinesOpen(false);
    setIsQuickRecipesOpen(false);
  };

  const toggleGlobalCuisines = () => {
    setIsGlobalCuisinesOpen(!isGlobalCuisinesOpen);
    setIsIndianDishesOpen(false);
    setIsQuickRecipesOpen(false);
  };

  const toggleQuickRecipes = () => {
    setIsQuickRecipesOpen(!isQuickRecipesOpen);
    setIsIndianDishesOpen(false);
    setIsGlobalCuisinesOpen(false);
  };

  return (
    <div className="flex flex-col bg-[#ffffff] p-4 pt-2 text-sm space-y-4 lg:hidden">
      <Link to="frontend/about-us">
        <div className="each-link text-black cursor-pointer">About Us</div>
      </Link>

      <div
        className={`each-link flex text-black  cursor-pointer ${
          isProductsOpen ? "text-green-400" : "text-[#292929]"
        }`}
        onClick={toggleProducts}
      >
        <div className="">Products</div>
        <div className="ml-1 pt-[4px]">
          {isProductsOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
        </div>
      </div>
      {isProductsOpen && (
        <div className="ml-4">
          <div
            className={`each-link flex mb-3 text-black  cursor-pointer ${
              isBlendedSpicesOpen ? "text-green-400" : "text-[#292929]"
            }`}
            onClick={toggleBlendedSpices}
          > 
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-black"></div>
            <div className="">
              {productOptions[0].title}
            </div>
            <div className="ml-1 pt-[4px]">
              {isBlendedSpicesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </div>
          </div>
          {isBlendedSpicesOpen && (
            <div className="ml-4">
              {productOptions[0].items.map((option, index) => (
                <div key={index} className="each-link text-black  mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div
            className={`each-link flex mb-3 text-black  cursor-pointer ${
              isGroundedSpicesOpen ? "text-green-400" : "text-[#292929]"
            }`}
            onClick={toggleGroundedSpices}
          >
            <div className="icon rounded-full text-black  px-1 py-1 font-semibold mr-4 bg-green-400"></div>
            <div className="">
              {productOptions[1].title}
            </div>
            <div className="ml-1 pt-[4px]">
              {isGroundedSpicesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </div>
          </div>
          {isGroundedSpicesOpen && (
            <div className="ml-4">
              {productOptions[1].items.map((option, index) => (
                <div key={index} className="each-link mb-3 text-black  cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div
            className={`each-link flex mb-3 text-black  cursor-pointer ${
              isPremixOpen ? "text-green-400" : "text-[#292929]"
            }`}
            onClick={togglePremix}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-black "></div>
            <div className="">
              {productOptions[2].title}
            </div>
            <div className="ml-1 pt-[4px]">
              {isPremixOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </div>
          </div>
          {isPremixOpen && (
            <div className="ml-4">
              {productOptions[2].items.map((option, index) => (
                <div key={index} className="each-link mb-3 text-black  cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div
        className={`each-link flex mb-3 cursor-pointer ${
          isRecipesOpen ? "text-green-400" : "text-[#292929]"
        }`}
        onClick={toggleRecipes}
      >
        Recipes
        <div className="ml-1 pt-[4px]">
          {isRecipesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
        </div>
      </div>
      {isRecipesOpen && (
        <div className="ml-4">
          <div
            className={`each-link flex mb-3 text-black  cursor-pointer ${
              isIndianDishesOpen ? "text-green-400" : "text-[#292929]"
            }`}
            onClick={toggleIndianDishes}
          > 
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-white"></div>
            <div className="">
              {recipeOptions[0].title}
            </div>
            <div className="ml-1 pt-[4px]">
              {isIndianDishesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </div>
          </div>
          {isIndianDishesOpen && (
            <div className="ml-4">
              {recipeOptions[0].items.map((option, index) => (
                <div key={index} className="each-link mb-3 text-black  cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div
            className={`each-link flex mb-3 cursor-pointer ${
              isGlobalCuisinesOpen ? "text-green-400" : "text-[#292929]"
            }`}
            onClick={toggleGlobalCuisines}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-white"></div>
            <div className="">
              {recipeOptions[1].title}
            </div>
            <div className="ml-1 pt-[4px]">
              {isGlobalCuisinesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </div>
          </div>
          {isGlobalCuisinesOpen && (
            <div className="ml-4">
              {recipeOptions[1].items.map((option, index) => (
                <div key={index} className="each-link text-black  mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div
            className={`each-link flex mb-3 cursor-pointer ${
              isQuickRecipesOpen ? "text-green-400" : "text-[#292929]"
            }`}
            onClick={toggleQuickRecipes}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-white"></div>
            <div className="">
              {recipeOptions[2].title}
            </div>
            <div className="ml-1 pt-[4px]">
              {isQuickRecipesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </div>
          </div>
          {isQuickRecipesOpen && (
            <div className="ml-4">
              {recipeOptions[2].items.map((option, index) => (
                <div key={index} className="each-link text-black  mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Link to="frontend/contact-us">
        <div className="each-link mb-3 text-black  cursor-pointer">Contact Us</div>
      </Link>
    </div>
  );
};

export default MobileNavbar;