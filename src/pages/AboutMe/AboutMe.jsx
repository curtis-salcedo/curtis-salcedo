import { Link } from 'react-router-dom';
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div id="aboutme" className="aboutMe">
      <div className="aboutMeTitle">
        <h1>About Me</h1>
      </div>
      <div className="aboutMeContent">
        <div className="aboutMeDescription">
          <p>I'm a skilled professional specializing in full stack development. With a strong background and experience in creating impactful solutions using a wide range of technologies, I am passionate about delivering user-centric and scalable applications. I am currently seeking a full-time position where I can contribute my expertise and collaborate on exciting projects. Let's discuss how I can add value to your team.</p>
        </div>
        <div className="aboutMeButtons">
          <button className="portfolioButton" onClick="">View Works</button>
          <button className="resumeButton">Download Resume</button>
        </div>
      </div>
    </div>
  )
}