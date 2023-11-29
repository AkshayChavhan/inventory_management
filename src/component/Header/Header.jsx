import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNavigation } from "../../utils/Navigation/HeaderNavigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className={`navbar ${isOpen ? "show" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="nav-list">
        {HeaderNavigation.map((item) => {
          return (
            <li key={item.name}>
              <Link to={`/${item.name}`}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
