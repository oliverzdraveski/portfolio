import React, { useRef } from 'react'
import './Contact.css';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = () => {

  const notify = () => {
    toast('Email Sent!');
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_albwvw6', 'template_ra1lb4h', form.current, 'OM2Plw68aG1Cc2cQB')
      .then((result) => {
          console.log(result.text);
          notify()
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  } 
  return (
    <div className='portfolio__contact' id='contact'>
      <div className='portfolio__contact-content'>
        <h2>Contact</h2>
        <p>Questions? Send me an email!</p>
      </div>
      <form className='portfolio__contact-input' ref={form} onSubmit={sendEmail} >
              <input required type='text' name='name' placeholder='Your Name' />
              <input required type='email' name='email' placeholder='Your Email Adress'/>
              <textarea required type='text' name='message' placeholder='Your Message'/>
              <button className="portfolio__contact-button" type='submit' > Let's Collaborate </button>
      </form>
        
    </div>
    
  )
}

export default Contact