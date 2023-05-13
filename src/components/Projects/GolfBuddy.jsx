import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";
import "./Projects.css"

export default function GolfBuddy() {
  return (
    <>
    <div className="projectCard">
      <div className="projectTitle">Golf Buddy</div>
        <div className="projectDescription">A web application to track your golf scores</div>
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