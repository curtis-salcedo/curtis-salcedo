import { BsPersonWorkspace } from "react-icons/bs"

import "./Services.css"

export default function FullStack() {
  return (
    <>
    <div className="serviceCard">
      <div className="icon">
        <BsPersonWorkspace size={40} />
      </div>
      <div className="serviceTitle">Full Stack Development</div>
      <div className="serviceDescription">Proficient in front-end and back-end technologies, I deliver end-to-end web solutions that seamlessly integrate user interfaces with robust server-side functionality</div>
    </div>
    </>
  )
}