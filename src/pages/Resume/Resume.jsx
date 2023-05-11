import InkCoffee from '../../components/Job/InkCoffee';
import Adt from '../../components/Job/Adt';
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