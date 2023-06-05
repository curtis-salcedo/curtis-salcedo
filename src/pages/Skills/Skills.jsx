import DataAnalysis from "../../components/Services/DataAnalysis"
import FullStack from "../../components/Services/FullStack"
import WebDevelopment from "../../components/Services/WebDevelopment"
import DataEngineering from "../../components/Services/DataEngineering"

import "./Skills.css"

export default function Skills() {
  return (
    <>
    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">
    <div className="SectionTitle">Services</div> 
    <div id="services" className="servicesContainer">
      <FullStack />
      <WebDevelopment />
      <DataEngineering />
      <DataAnalysis />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}