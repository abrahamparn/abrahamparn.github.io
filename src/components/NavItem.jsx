// Inside your App component file (e.g., App.jsx)

import React from "react";
import { useGSAP } from "@gsap/react";

// Define the NavItem component
const NavItem = ({ text, href, onHover, handleMenuOnClick }) => {
  const letters = text.split("");

  return (
    <div className="navContentText relative" onMouseEnter={onHover} onClick={handleMenuOnClick}>
      <a className="navItemBottom" href={href} rel="noopener noreferrer">
        {letters.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </a>
      <a className="navItemUpper absolute top-[-40%] left-0" href={href} rel="noopener noreferrer">
        {letters.map((char, index) => (
          <span key={index} className="opacity-0">
            {char}
          </span>
        ))}
      </a>
    </div>
  );
};

export default NavItem;
