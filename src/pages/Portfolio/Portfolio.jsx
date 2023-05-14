import GolfBuddy from '../../components/Projects/GolfBuddy';
import ApplicationTracker from '../../components/Projects/ApplicationTracker';
import MarketLocale from '../../components/Projects/MarketLocale';
import "./Portfolio.css"


export default function Resume() {
  return (
    <>
    <div id="portfolio" className="portfolioContainer">

      <div className="featureProjectContainer">
      </div>

      <div className="projectContainer">
        <GolfBuddy />
        <ApplicationTracker />
        <MarketLocale />
      </div>

    </div>
    </>
  )
}