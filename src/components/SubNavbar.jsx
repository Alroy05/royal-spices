import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretDownOutline } from "react-icons/io5";
import DropdownPanel from "./DropdownPanel";

const SubNavbar = (props) => {
  const [showDropdown, setShowDropdown] = useState({
    blendedSpices: false,
    groundedSpices: false,
    premix: false,
    indianDishes: false,
    globalCuisines: false,
    quickRecipes: false
  });

  const handleMouseEnter = (key) => {
    setShowDropdown({ ...showDropdown, [key]: true });
  };

  const handleMouseLeave = (key) => {
    setShowDropdown({ ...showDropdown, [key]: false });
  };

  const productOptions = [
    { 
      id: "blendedSpices",
      title: "Blended Spices",
      items: [
        ["Achari Masala", "/frontend/products/achari-masala"],
        ["Chole Masala", "/frontend/products/chole-masala"],
        ["Garam Masala", "/frontend/products/garam-masala"],
        ["Tandoori Masala", "/frontend/products/tandoori-masala"],
      ],
      onMouseEnter: () => handleMouseEnter("blendedSpices"),
      onMouseLeave: () => handleMouseLeave("blendedSpices"),
    },
    {
      id: "groundedSpices",
      title: "Grounded Spices",
      items: [
        ["Turmeric Powder", "/frontend/products/turmeric-powder"],
        ["Red Chili Powder", "/frontend/products/red-chili-powder"],
        ["Coriander Powder", "/frontend/products/coriander-powder"],
        ["Cumin Powder", "/frontend/products/cumin-powder"],
      ],
      onMouseEnter: () => handleMouseEnter("groundedSpices"),
      onMouseLeave: () => handleMouseLeave("groundedSpices"),
    },
    { 
      id: "premix",
      title: "Premix",
      items: [
        ["Biryani Mix", "/frontend/products/biryani-mix"],
        ["Pav Bhaji Mix", "/frontend/products/pav-bhaji-mix"],
        ["Chaat Masala Mix", "/frontend/products/chaat-masala-mix"],
      ],
      onMouseEnter: () => handleMouseEnter("premix"),
      onMouseLeave: () => handleMouseLeave("premix"),
    }
  ];
  
  const recipeOptions = [
    { 
      id: "indianDishes",
      title: "Indian Dishes",
      items: [
        ["Butter Chicken", "/frontend/recipes/butter-chicken"],
        ["Palak Paneer", "/frontend/recipes/palak-paneer"],
        ["Dal Makhani", "/frontend/recipes/dal-makhani"],
        ["Biryani", "/frontend/recipes/biryani"],
      ],
      onMouseEnter: () => handleMouseEnter("indianDishes"),
      onMouseLeave: () => handleMouseLeave("indianDishes")
    },
    { 
      id: "globalCuisines",
      title: "Global Cuisines",
      items: [
        ["Thai Green Curry", "/frontend/recipes/thai-green-curry"],
        ["Spaghetti Bolognese", "/frontend/recipes/spaghetti-bolognese"],
        ["Sushi Rolls", "/frontend/recipes/sushi-rolls"],
      ],
      onMouseEnter: () => handleMouseEnter("globalCuisines"),
      onMouseLeave: () => handleMouseLeave("globalCuisines")
    },
    {
      id: "quickRecipes",
      title: "Quick Recipes",
      items: [
        ["5-Minute Omelette", "/frontend/recipes/quick-omelette"],
        ["Instant Noodles Upgrade", "/frontend/recipes/instant-noodles-upgrade"],
        ["Microwave Mug Pizza", "/frontend/recipes/microwave-mug-pizza"],
      ],
      onMouseEnter: () => handleMouseEnter("quickRecipes"),
      onMouseLeave: () => handleMouseLeave("quickRecipes")
    }
  ];

  const subnavbarOptions = props.isProducts ? productOptions : recipeOptions;

  return (
    <div className="absolute flex rounded-xl bg-white mt-9 min-w-40 px-4 py-4">
      <div className="links-container flex-col space-y-7 z-40">
        {subnavbarOptions.map((option, index) => (
          <div key={index} className="each-link">
            <Link
              className="flex pr-4 hover:no-underline text-[#252525] hover:text-black space-x-6 text-sm font-normal"
              onMouseEnter={option.onMouseEnter}
              onMouseLeave={option.onMouseLeave}
            >
              <div className="text flex items-start hover:no-underline hover:text-black">
                <div className="flex-shrink-0 mr-1">{option.title}</div>
                {option.items.length > 0 && (
                  <div className="icon pt-[4px]">
                    <IoCaretDownOutline className={`${showDropdown[option.id] ? "rotate-[270deg]" : ""}`} />
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {subnavbarOptions.map((option) => (
        showDropdown[option.id] && (
          <DropdownPanel 
            key={option.id}
            options={option} 
            id={option.id} 
            showDropdown={showDropdown} 
            setShowDropdown={setShowDropdown}
          />
        )
      ))}
    </div>
  );
};

export default SubNavbar;