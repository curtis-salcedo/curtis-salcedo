import { BsDatabaseCheck } from "react-icons/bs"

import "./Services.css"

export default function DataEngineering() {
  return (
    <>
        <div className="serviceCard">
      <div className="icon">
        <BsDatabaseCheck size={40} />
      </div>
      <div className="serviceTitle">Data Engineering</div>
      <div className="serviceDescription">Experienced in building scalable data pipelines, I design and implement efficient data infrastructure, integration, and transformation processes to maximize the value of data assets</div>
    </div>
    </>
  )
}