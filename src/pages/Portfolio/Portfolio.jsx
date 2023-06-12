import ProjectTemplate from '../../components/Projects/ProjectTemplate';
import "./Portfolio.css"


export default function Resume() {
  return (
    <>
    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">
    <div className="SectionTitle">Portfolio</div> 
    <div id="portfolio" className="PortfolioContainer">
      <div className="FeaturedProjectContainer">
      </div>

      <div className="ProjectContainer">
        <ProjectTemplate />
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}