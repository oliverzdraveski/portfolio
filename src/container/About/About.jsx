import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='portfolio__about' id='about'>
       <div className='portfolio__about-content'>
        <h1>About Me</h1>
        <div className='portfolio__about-p'>
          <p className='paragraph1'>Hi, I`m Oliver, nice to meet you.Please take a look around!</p>
          <div className="vl" />
          <p className='paragraph2'>I’m a nice fun and friendly person, I’m honest and puncual, I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills. I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.</p>
        </div>
      </div> 
    </div>
  )
}

export default About