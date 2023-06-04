import React from 'react';
import ContactForm from '../ContactForm/ContactForm'
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi'
import { BsLinkedin,BsGithub,BsChatText } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <div className="footerContainer">
      <div className="contactContainer">

        <div className="contactInfo">

          <ContactForm />

          <div className='FooterMainInfo'>
            <div className='FooterName'>Curtis Salcedo</div>
            <div className="linkContainer">
              <div className="footerIconLinks">
              <IconContext.Provider value={{ size: '2em', color: 'blue', margin: '.25vmin' }}>
                <a href="https://www.linkedin.com/in/curtis-salcedo" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '2em', color: 'black' }}>
                <a href="https://github.com/curtis-salcedo" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
              </IconContext.Provider>
              </div>
            </div>
            <div className="contactLocation"><BiCurrentLocation /> Westminster, CO</div>
            <div className="contactEmail"><BiEnvelope /> curtismsalcedo@gmail.com</div>
            <div className="contactPhone" ><BiPhone /> | <BsChatText />  (720) 772-1689</div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}