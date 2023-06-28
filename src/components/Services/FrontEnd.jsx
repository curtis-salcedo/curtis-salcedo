import { BsPersonWorkspace } from "react-icons/bs"

import "./Services.css"

export default function FrontEnd() {
  return (
    <>
    <div className="serviceCard">
      <div className="icon">
        <BsPersonWorkspace size={40} />
      </div>
      <div className="serviceTitle">Front End</div>
      <div className="serviceDescription">Experienced in front-end and back-end technologies, I create seamless web solutions that unite user interfaces with robust server-side functionality.</div>
    </div>
    </>
  )
}