import { useState } from "react";
import "./JobsExpand.css"

export default function Adt() {
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
            <div className="JobTitle">Sales Rep</div>
          </div>
  
          <div className="JobCardBottom">
            <div className="JobCompany">ADT Security</div>
            <div className="JobLocation">Aurora, CO</div>
            <div className="JobDate">06/2014 - 06/2015</div>
          </div>
        </div>
  
        { show ? 
  
          <div className="JobDescriptions">
            <div>Conducted comprehensive residential and business safety reviews to identify security needs and provide tailored solutions</div>
            <div>Utilized a specific model sales presentation and technology to effectively communicate the benefits and features of product mix</div>
            <div>Consistently achieved assigned sales quotas by implementing creative lead generation techniques</div>
            <div>Collaborated with team members and sales managers to optimize sales strategies and improve overall performance</div>
          </div>
        : null
        }
      </div>
    </>
  )
}