import { CgWebsite } from "react-icons/cg"

import "./Services.css"

export default function WebDevelopment() {
  return (
    <>
    <div className="serviceCard">
      <div className="icon">
        <CgWebsite size={40} />
      </div>
      <div className="serviceTitle">Web Development</div>
      <div className="serviceDescription">Skilled in creating visually appealing and user-friendly websites, I design and develop modern, responsive web applications that provide exceptional user experiences</div>
    </div>
    </>
  )
}