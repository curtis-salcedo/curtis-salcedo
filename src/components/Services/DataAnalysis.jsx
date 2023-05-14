import { ImStatsDots } from "react-icons/im"

import "./Services.css"

export default function DataAnalysis() {
  return (
    <>
      <div className="serviceCard">
        <div className="icon">
          <ImStatsDots size={40} />
        </div>
        <div className="serviceTitle">Data Analysis</div>
        <div className="serviceDescription">Equipped with strong analytical skills, I uncover valuable insights from complex datasets, enabling data-driven decision-making and process optimization</div>
    </div>
    </>
  )
}