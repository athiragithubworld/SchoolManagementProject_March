import { RiArrowDropDownLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

import { useState } from "react";
import "../style/Sidebar.css";

const CustomSelect = ({ image, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="features"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="features-div">
        <img src={image} alt="logo" />
        <div className="custom">{title}</div>
        <RiArrowDropDownLine className="icons" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-option">Option 1</div>
          <div className="dropdown-option">Option 2</div>
          <div className="dropdown-option">Option 3</div>
          <div className="dropdown-options">Add Courses
         <FiPlus className="icon"/></div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
