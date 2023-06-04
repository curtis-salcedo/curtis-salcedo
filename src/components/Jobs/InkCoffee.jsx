import { useState } from "react";
import "./JobsExpand.css"

export default function InkCoffee() {
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
    <div className="JobContainer">      

      <div onClick={() => handleShowDetails()} className="JobCard">

        <div className="JobCardTop">
          <div className="JobTitle">Director of Operations</div>
        </div>

        <div className="JobCardBottom">
          <div className="JobCompany">ink! Coffee Company</div>
          <div className="JobLocation">Denver, CO</div>
          <div className="JobDate">06/2015 - 10/2022</div>
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