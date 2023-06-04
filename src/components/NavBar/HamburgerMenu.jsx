import React from 'react';
import "./NavBar.css"

export default function HamburgerMenu() {

  return (
    <>
      <div className="MobileNavMenu">
        <a className="MobileLink" href="#aboutme">About Me</a>
        <a className="MobileLink" href="#services">Services</a>
        <a className="MobileLink" href="#portfolio">Portfolio</a>
        <a className="MobileLink" href="#experience">Experience</a>
        <a className="MobileLink" href="#home">Contact</a>
      </div>
    </>
  )
}