import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({onSelectPage}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
  
      <nav className="navbar">
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>
      
      </nav>

    
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="menu-links">
          <li><a href="#venues" onClick= {(e)=>{e.preventDefault() ;toggleMenu() ;onSelectPage('venues');}}>Venues</a></li>
          <li><a href="#hairdressers" onClick={toggleMenu}>Hairdressers</a></li>
          <li><a href="#makeup" onClick={toggleMenu}>Makeup</a></li>
          <li><a href="#dresses" onClick={toggleMenu}>Dresses</a></li>
        </ul>
      </div>

   
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;