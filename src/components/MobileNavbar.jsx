import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretUpOutline } from "react-icons/io5";
import { IoCaretDownOutline } from "react-icons/io5";

const productOptions = [
  {
    title: "Blended Spices",
    items: [
      <Link to="/products/achari-masala">Achari Masala</Link>,
      <Link to="/products/chole-masala">Chole Masala</Link>,
      <Link to="/products/garam-masala">Garam Masala</Link>,
      <Link to="/products/tandoori-masala">Tandoori Masala</Link>,
    ],
  },
  {
    title: "Grounded Spices",
    items: [
      <Link to="/products/turmeric-powder">Turmeric Powder</Link>,
      <Link to="/products/red-chili-powder">Red Chili Powder</Link>,
      <Link to="/products/coriander-powder">Coriander Powder</Link>,
      <Link to="/products/cumin-powder">Cumin Powder</Link>,
    ],
  },
  {
    title: "Premix",
    items: [
      <Link to="/products/biryani-mix">Biryani Mix</Link>,
      <Link to="/products/pav-bhaji-mix">Pav Bhaji Mix</Link>,
      <Link to="/products/chaat-masala-mix">Chaat Masala Mix</Link>,
    ],
  },
];

const recipeOptions = [
  {
    title: "Indian Dishes",
    items: [
      <Link to="/recipes/butter-chicken">Butter Chicken</Link>,
      <Link to="/recipes/palak-paneer">Palak Paneer</Link>,
      <Link to="/recipes/dal-makhani">Dal Makhani</Link>,
      <Link to="/recipes/biryani">Biryani</Link>,
    ],
  },
  {
    title: "Global Cuisines",
    items: [
      <Link to="/recipes/thai-green-curry">Thai Green Curry</Link>,
      <Link to="/recipes/spaghetti-bolognese">Spaghetti Bolognese</Link>,
      <Link to="/recipes/sushi-rolls">Sushi Rolls</Link>,
    ],
  },
  {
    title: "Quick Recipes",
    items: [
      <Link to="/recipes/quick-omelette">5-Minute Omelette</Link>,
      <Link to="/recipes/instant-noodles-upgrade">Instant Noodles Upgrade</Link>,
      <Link to="/recipes/microwave-mug-pizza">Microwave Mug Pizza</Link>,
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
      <Link to="/about-us">
        <div className="each-link text-black cursor-pointer text-left">About Us</div>
      </Link>

      <div
        className={`each-link flex text-black cursor-pointer ${
          isProductsOpen ? "text-green-400" : "text-[#292929]"
        }`}
        onClick={toggleProducts}
      >
        <div className="flex-grow text-left">Products</div>
        <div className="ml-1 pt-[4px]">
          {isProductsOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
        </div>
      </div>
      {isProductsOpen && (
        <div className="ml-4">
          {productOptions.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div
                className={`each-link flex mb-3 text-black cursor-pointer ${
                  [isBlendedSpicesOpen, isGroundedSpicesOpen, isPremixOpen][categoryIndex] ? "text-green-400" : "text-[#292929]"
                }`}
                onClick={[toggleBlendedSpices, toggleGroundedSpices, togglePremix][categoryIndex]}
              > 
                <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-black"></div>
                <div className="flex-grow text-left">{category.title}</div>
                <div className="ml-1 pt-[4px]">
                  {[isBlendedSpicesOpen, isGroundedSpicesOpen, isPremixOpen][categoryIndex] ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
                </div>
              </div>
              {[isBlendedSpicesOpen, isGroundedSpicesOpen, isPremixOpen][categoryIndex] && (
                <div className="ml-4">
                  {category.items.map((option, index) => (
                    <div key={index} className="each-link text-black mb-3 cursor-pointer text-left">
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div
        className={`each-link flex mb-3 cursor-pointer ${
          isRecipesOpen ? "text-green-400" : "text-[#292929]"
        }`}
        onClick={toggleRecipes}
      >
        <div className="flex-grow text-left">Recipes</div>
        <div className="ml-1 pt-[4px]">
          {isRecipesOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
        </div>
      </div>
      {isRecipesOpen && (
        <div className="ml-4">
          {recipeOptions.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div
                className={`each-link flex mb-3 text-black cursor-pointer ${
                  [isIndianDishesOpen, isGlobalCuisinesOpen, isQuickRecipesOpen][categoryIndex] ? "text-green-400" : "text-[#292929]"
                }`}
                onClick={[toggleIndianDishes, toggleGlobalCuisines, toggleQuickRecipes][categoryIndex]}
              > 
                <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-green-400 text-white"></div>
                <div className="flex-grow text-left">{category.title}</div>
                <div className="ml-1 pt-[4px]">
                  {[isIndianDishesOpen, isGlobalCuisinesOpen, isQuickRecipesOpen][categoryIndex] ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
                </div>
              </div>
              {[isIndianDishesOpen, isGlobalCuisinesOpen, isQuickRecipesOpen][categoryIndex] && (
                <div className="ml-4">
                  {category.items.map((option, index) => (
                    <div key={index} className="each-link text-black mb-3 cursor-pointer text-left">
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <Link to="/contact-us">
        <div className="each-link mb-3 text-black cursor-pointer text-left">Contact Us</div>
      </Link>
    </div>
  );
};

export default MobileNavbar;