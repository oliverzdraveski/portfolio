import React from 'react'
import './Skills.css';

import HTML from '../../Assets/html.png';
import CSS from '../../Assets/css.png';
import JavaScript from '../../Assets/javascript.png';
import ReactImg from '../../Assets/react.png';
import Node from '../../Assets/node.png';
import GitHub from '../../Assets/github.png';

const Skills = () => {
  return (
    <div className='portfolio__skills' id='skills'>
      <div className='portfolio__skills-content'>
        <h2>Skills</h2>
        <p>Technologies I have worked with</p>
      </div>
      <div className='portfolio__skills-grid'>
        <div className='Icons'>
          <img src={HTML} alt="HTML icon" />
          <p>HTML</p>
        </div>
        <div className='Icons'>
          <img src={CSS} alt="CSS icon" />
          <p>CSS</p>
        </div>
        <div className='Icons'>
          <img src={JavaScript} alt="JavaScript icon" />
          <p>JAVASCRIPT</p>
        </div>
        <div className='Icons'>
          <img src={ReactImg} alt="ReactImg icon" />
          <p>REACT</p>
        </div>
        <div className='Icons'>
          <img src={Node} alt="Node icon" />
          <p>NODE</p>
        </div>
        <div className='Icons'>
          <img src={GitHub} alt="GitHub icon" />
          <p>GITHUB</p>
        </div>


      </div>
    </div>
  )
}

export default Skills