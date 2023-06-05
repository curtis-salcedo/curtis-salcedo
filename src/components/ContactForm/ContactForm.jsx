import React from 'react';
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi';
import { BsLinkedin,BsGithub,BsChatText } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import "./ContactForm.css";

export default function ContactForm() {

  function handleEmailClick() {
    const emailAddress = 'curtismsalcedo@gmail.com';
    const emailSubject = 'Hello Curtis!';
    const emailBody = 'Hi Curtis, my name is ________ and I wanted to connect with you.';
    const emailLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = emailLink;
  }

  function handlePhoneClick() {
    const phoneNumber = '7207721689';
    window.location.href = `tel:${phoneNumber}`;
  }

  function handleLocationClick() {
    const location = 'Westminster, CO';
    const locationLink = `https://www.google.com/maps/place/${location}`;
    window.location.href = locationLink;
  }


  return (
    <div className='ContactFormContainer'>
      <div className="ContactFooterContainer">
        <div className="ContactLocation" onClick={handleLocationClick}><BiCurrentLocation /> Westminster, CO</div>
        <div className="ContactEmail" onClick={handleEmailClick}><BiEnvelope /> curtismsalcedo@gmail.com</div>
        <div className="ContactPhone" onClick={handlePhoneClick}><BiPhone />(720) 772-1689</div>
      </div>

      <div className="FooterIconLinks">
        <IconContext.Provider value={{ size: '2em', color: 'blue' }}>
          <a id="linkedin" href="https://www.linkedin.com/in/curtis-salcedo" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '2em', color: 'black' }}>
          <a id="github" href="https://github.com/curtis-salcedo" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        </IconContext.Provider>
      </div>

      <form className='ContactForm' action="https://getform.io/f/1b989789-3008-47a5-95e4-39216774a434" method="POST">
      {/* <div className='ContactFormTitle'>Contact Me</div> */}
        <div className='ContactFormArea'>
          <div className='ContactFormName'>
            <input type="text" name="name" placeholder='Your Name' />
            <input type="email" name="email" placeholder='Your Email' />
          </div>
          <textarea className='ContactMessage' rows='6' style={{resize:'none'}} type="text" name="message" placeholder='Type your message here'/>
        </div>
        <button className='ContactFormButton' type="submit">Submit</button>
      </form>
    </div>

  )
}