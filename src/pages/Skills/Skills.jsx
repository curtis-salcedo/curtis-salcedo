import DataAnalysis from "../../components/Services/DataAnalysis"
import FullStack from "../../components/Services/FullStack"
import WebDevelopment from "../../components/Services/WebDevelopment"
import DataEngineering from "../../components/Services/DataEngineering"

import "./Skills.css"

export default function Skills() {
  return (
    <>
      <div className="carousel-container">
        <div className="skill-carousel">
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
          <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        </div>
      </div>
    <h3>Services</h3>
    <div className="servicesContainer">
      <FullStack />
      <WebDevelopment />
      <DataEngineering />
      <DataAnalysis />
    </div>

    </>
  )
}