import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";
import "./Projects.css"

export default function ApplicationTracker() {
  return (
    <>
    <div className="projectCard">
      <div className="projectTitle">Application Tracker</div>
        <div className="projectDescription">A web application to track your job applications</div>
        <div className="projectFooter">
        <SiMongodb />
        <SiBootstrap />
        <SiJavascript />
        <SiExpress />
        <SiNodedotjs />
        </div>
        </div>
    </>
  )
}