import GolfBuddy from '../../components/Projectst/GolfBuddy';
import ApplicationTracker from '../../components/Projectst/ApplicationTracker';
import MarketLocale from '../../components/Projectst/MarketLocale';
import "./Portfolio.css"


export default function Resume() {
  return (
    <>
    <div className="portfolioContainer">
      <GolfBuddy />
    </div>
    <div className="portfolioContainer">
      <ApplicationTracker />
    </div>
    <div className="portfolioContainer">
      <MarketLocale />
    </div>
    </>
  )
}