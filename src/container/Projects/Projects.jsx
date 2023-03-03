import React from 'react'
import './Projects.css';
import gpt3 from '../../Assets/gpt3.png'
import restaurant from '../../Assets/restaurant.png'
const Projects = () => {
  return (
    <div className='portfolio__projects' id='projects'>
      <div className='portfolio__projects-content'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className='portfolio__projects-container'>
        <article className='portfolio__item'>
          <img src={restaurant} alt="CSS logo" />
          <h3>Restaurant Sypher</h3>
          <div className='portfolio__links'>
            <a href="https://github.com/oliverzdraveski/sypher-restaurant" target='_blank'>Github</a>
            <a href="https://sypher-restaurant.netlify.app/" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <img src={gpt3} alt="HTML logo" />
          <h3>AI Template</h3>
          <div className='portfolio__links'>
            <a href="https://github.com/oliverzdraveski/gpt3tem" target='_blank'>Github</a>
            <a href="https://gpt3tem.netlify.app/" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>

      </div>
   
  )
}

export default Projects