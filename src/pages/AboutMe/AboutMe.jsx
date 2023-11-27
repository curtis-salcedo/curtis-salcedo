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
          <p>I am passionate about technology, innovation, and teamwork. With a background in operations management and expertise in both web and software development, I bring a versatile skill set to every project. My strengths include identifying improvement opportunities, implementing creative solutions, and utilizing cutting-edge technologies to enhance efficiency and performance. I am dedicated to delivering transformative solutions across various areas. I thrive on collaboration and enjoy leveraging technology to drive positive change and contribute meaningfully to others' needs..</p>
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