import { Link } from 'react-router-dom';
import React from 'react';
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>CS</h1>
      </div>
      <div className="navLinks">
        <a className="navLink" href="#home">Home</a>
        <a className="navLink" href="#aboutme">About Me</a>
        <a className="navLink" href="#services">Services</a>
        <a className="navLink" href="#portfolio">Portfolio</a>
        <a className="navLink" href="#experience">Experience</a>
      </div>
    </nav>
  )
}