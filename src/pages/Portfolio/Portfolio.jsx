import GolfBuddy from '../../components/Projects/GolfBuddy';
import ModernMenus from '../../components/Projects/ModernMenus';
import ApplicationTracker from '../../components/Projects/ApplicationTracker';
import MarketLocale from '../../components/Projects/MarketLocale';
import "./Portfolio.css"


export default function Resume() {
  return (
    <>
    <div className="SectionTitle">Portfolio</div> 
    <div id="portfolio" className="portfolioContainer">
      <div className="featureProjectContainer">
      </div>

      <div className="projectContainer">
        <GolfBuddy />
        <ModernMenus />
        <ApplicationTracker />
        <MarketLocale />
      </div>

    </div>
    </>
  )
}