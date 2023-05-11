import InkCoffee from '../../components/Jobs/InkCoffee';
import Adt from '../../components/Jobs/Adt';
import "./Resume.css"


export default function Resume() {
  return (
    <>
    <div className="jobContainer">
      <InkCoffee />
    </div>
    <div className="jobContainer">
      <Adt />
    </div>
    </>
  )
}