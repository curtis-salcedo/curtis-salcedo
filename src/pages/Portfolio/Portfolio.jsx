import GolfBuddy from '../../components/Projects/GolfBuddy';
import ApplicationTracker from '../../components/Projects/ApplicationTracker';
import MarketLocale from '../../components/Projects/MarketLocale';
import "./Portfolio.css"


export default function Resume() {
  return (
    <>
    <div class="container">
      <GolfBuddy />
      <ApplicationTracker />
      <MarketLocale />
    </div>
    </>
  )
}