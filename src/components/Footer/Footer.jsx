import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="portfolio__footer">
    <ul className="portfolio__footer-links">
        <li ><a href="#home">Home</a></li>
        <li ><a href="#about">About</a></li>
        <li ><a href="#skills">Skills</a></li>
        <li ><a href="#projects">Projects</a></li>
        <li ><a href="#contact">Contact</a></li>
    </ul>>
    <div className="portfolio__footer-copyright">
      <p>© Oliver Zdraveski . All rights reserved. </p>
    </div>  
    </div>
)
}

export default Footer