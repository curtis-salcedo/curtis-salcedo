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
        <Link to="#home" className="navLink">Home</Link>
        <Link to="#aboutme" className="navLink">About Me</Link>
        <Link to="#resume" className="navLink">Services</Link>
        <Link to="#portfolio" className="navLink">Portfolio</Link>
        <Link to="#resume" className="navLink">Experience</Link>
      </div>
    </nav>
  )
}