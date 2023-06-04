import { useState } from "react";
import "./JobsExpand.css"

export default function DHPace() {
  const [show, setShow] = useState(false)

  function handleShowDetails() {
    if (show === true) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
  <>
    <div className="JobCard">      

      <div onClick={() => handleShowDetails()} className="JobContainer">

        <div className="JobCardTop">
          <div className="JobTitle">Dispatch Manager</div>
        </div>

        <div className="JobCardBottom">
          <div className="JobCompany">DH Pace</div>
          <div>Denver, CO</div>
          <div>10/2022 - 03/2023</div>
        </div>
      </div>

      { show ? 

        <div className="JobDescriptions">
          <div>Managed and led a portfolio of 16 retail store locations, ensuring exceptional customer service and achieving business targets</div>
          <div>Implemented modern inventory technologies to enhance efficiency and reduce costs</div>
          <div>Designed and implemented location-specific SOPs, resulting in improved performance metrics and increased profitability</div>
          <div>Led and developed a diverse team of 50+ members, fostering a collaborative and inclusive work culture</div>
        </div>
      : null
      }
    </div>
  </>
  )
}