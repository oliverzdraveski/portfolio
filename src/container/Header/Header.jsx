import React from 'react'
import './Header.css';
import headerimg from '../../Assets/headerimg.png'
import { AiOutlineGithub } from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='portfolio__header' id='home'> 
      <div style={{flex:1}}>
        <div className='portfolio__header-socials'>
          <a href="https://github.com/oliverzdraveski" target='_blank'><AiOutlineGithub size={50} /></a>
          <a href="https://linkedin.com/in/oliver-zdraveski/" target='_blank'><AiOutlineLinkedin size={50}/></a>
        </div>
      </div>
      <div className='portfolio__header-content'>
        <p>Hello, I am</p>
        <h1>Oliver Zdraveski</h1>
        <h2>Front-End Developer</h2>
        <div className='portfolio__header-content-buttons'>
          <a href="https://www.dropbox.com/s/cp7k9scj8oze6w8/Oliver%20Zdraveski%20CV.pdf?dl=0" target='_blank'><button>Download CV</button></a>
          <a href="#contact"><button>Lets Talk</button></a>
        </div>
      </div>
      
      <div className='portfolio__header-image'>
        <img src={headerimg} alt="header-logo" />
      </div>
    </div>
  )
}

export default Header