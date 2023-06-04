import React from 'react';
import EmbeddedResume from '../../components/EmbeddedResume/EmbeddedResume'
import "./AboutMe.css"

export default function AboutMe() {

  function handleViewWorks() {
    return (
      window.location.href = '#portfolio'
    )
  }

  function handleOpenResume() {
    return (
      window.open('https://docs.google.com/document/d/e/2PACX-1vQwPz2WhfZZtt1aIYfi15XMCuz0FU8SBxjeeJKhVD_IrAugGskyylvyo9tq_Jcvv-VPDbZAJ16F1fhQ/pub')
    )
  }

  return (
    <div id="aboutme" className="AboutMe">
      <div className="AboutMeTitle">About Me</div>
      <div className="AboutMeContent">
        <div className="AboutMeDescription">
          <p>I'm a skilled professional specializing in full stack development. With a strong background and experience in creating impactful solutions using a wide range of technologies, I am passionate about delivering user-centric and scalable applications. I am currently seeking a full-time position where I can contribute my expertise and collaborate on exciting projects. Let's discuss how I can add value to your team.</p>
        </div>
        <div className="AboutMeButtons">
          <button className="PortfolioButton" onClick={handleViewWorks}>View Works</button>
          <button className="ResumeButton" onClick={handleOpenResume}>View Resume</button>
        </div>
      </div>
    </div>
  )
}