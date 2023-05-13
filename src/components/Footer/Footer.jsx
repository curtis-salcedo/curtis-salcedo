import React from 'react';
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <div className="footerContainer">

      <div className="contactContainer">
        <div className="contactInfo">
          <label htmlFor="">Contact Info</label>
          <div className="footerIconLinks">
          <IconContext.Provider value={{ size: '2em', color: 'blue' }}>
            <a href="https://www.linkedin.com/your-profile-url" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', color: 'black' }}>
            <a href="https://www.linkedin.com/your-profile-url" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          </IconContext.Provider>
          </div>
          <div className="contactLocation"><BiCurrentLocation /> Westminster, CO</div>
          <div className="contactEmail"><BiEnvelope /> curtismsalcedo@gmail.com</div>
          <div className="contactPhone"><BiPhone /> Phone</div>
        <div className="linkContainer">
        </div>
        </div>
      </div>
    </div>
    </>
  )
}