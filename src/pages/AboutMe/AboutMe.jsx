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

  function handleOpenGithub() {
    return (
      window.open('https://github.com/curtis-salcedo')
    )
  }


  return (
    <div id="aboutme" >
    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">
      <div className="AboutMeContainer">

      <div className="AboutMeTitle">About Me</div>
      <div className="AboutMeContent">
        <div className="AboutMeDescription">
          <p>I am a skilled professional with a background in operations management and a focus on web development. Leveraging my experience in process improvement, I bring a strong foundation in creating impactful solutions using various methods and technologies. I am passionate about delivering results and am currently seeking a full-time position where I can contribute my expertise and collaborate with a dynamic team. Let's explore how I can add value to your organization.</p>
        </div>
        <div className="AboutMeButtons">
          <button className="PortfolioButton" onClick={handleViewWorks}>Works</button>
          <button className="ResumeButton" onClick={handleOpenResume}>Resume</button>
          <button className="GithubButton" onClick={handleOpenGithub}>Github</button>
        </div>
      </div>
      </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}