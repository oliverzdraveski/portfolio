import React, { useState } from 'react'
import './Navbar.css';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className="portfolio__navbar">
      <div className="logo">
        <a href="#home"><h1>OZ</h1></a>
      </div>
      <ul className="portfolio__navbar-links">
        <li ><a href="#home">Home</a></li>
        <li ><a href="#about">About</a></li>
        <li ><a href="#skills">Skills</a></li>
        <li ><a href="#projects">Projects</a></li>
        <li ><a href="#contact">Contact</a></li>
      </ul>
      <div className="portfolio__navbar-smallscreen">
        <AiOutlineMenuFold color="fff" fontSize={27} onClick={() => {setToggleMenu(true)}} />
        
        {toggleMenu && (
        <div className="portfolio__navbar-smallscreen_overlay flex__center slide-bottom">
          <AiOutlineMenuUnfold fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}} />
          <ul className="portfolio__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
        </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar