import React from 'react'
import { Link } from "react-router-dom";

const DropdownPanel = (props) => {
  const handleMouseEnter = () => {
    props.setShowDropdown({ ...props.showDropdown, [props.id]: true });
  };

  const handleMouseLeave = () => {
    props.setShowDropdown({ ...props.showDropdown, [props.id]: false });
  };

  const handleItemClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className='bg-white border-gray-100 p flex -ml-20 pl-28' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="container w-[230px] flex-col space-y-3 border border-gray-100 rounded-lg p-4">
          {props.options.items.map((item, index) => (
            <div key={index}  className="each-link z-40 text-[#656565] hover:text-green-950 text-sm flex">
              <Link onClick={() => handleItemClick(item[1])} className='z-50' to={item[1]}>{item[0]}</Link>
            </div>
          ))}
        </div>
    </div>
  );
}

export default DropdownPanel;
