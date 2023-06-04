import { Link } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { ViewportContext } from '../ViewportContext/ViewportContext';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

import "./NavBar.css"

export default function NavBar() {
  const { width, height } = useContext(ViewportContext);
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);
  
  useEffect(() => {
    function checkWidth() {
      if (width <= 940) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);

  function toggleMenu(menu) {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <div className="NavBarContainer">
      { mobile ? (
      <nav className="NavBar">
        <div className={`Logo ${menu ? 'menu' : ''}`}>
          <div>CS</div>
        </div>

          <div className={`HamburgerMenu ${menu ? 'menu' : ''}`}>
            { menu ? (
            <>
              <div onClick={() => toggleMenu(menu)}>
                <GiCancel style={{ height: '9vmin', width: '9vmin', color: 'white' }} />
              </div>
            </>
            ) : (
              <div  onClick={() => toggleMenu(menu)}>
                <GiHamburgerMenu style={{ height: '9vmin', width: '9vmin', color: 'white' }} />
              </div>
            )}
          </div>
        </nav>

        ) : (

        <nav className="NavBar">

          <div className="Logo">
            <div>CS</div>
          </div>

          <div className="NavLinks">
            <a className="NavLink" href="#home">Home</a>
            <a className="NavLink" href="#aboutme">About Me</a>
            <a className="NavLink" href="#services">Services</a>
            <a className="NavLink" href="#portfolio">Portfolio</a>
            <a className="NavLink" href="#experience">Experience</a>
          </div>

        </nav>

      )}
      
        { mobile && menu && 
        <div>
          <HamburgerMenu />
        </div>
        }

    </div>
  )
}