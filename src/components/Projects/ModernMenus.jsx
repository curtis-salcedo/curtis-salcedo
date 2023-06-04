import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";
import "./Projects.css"

export default function ModernMenus() {
  return (
    <>
    <div className="projectCard">
      <div className="projectTitle">Modern Menus</div>
        <div className="projectDescription">A web application to create customizable digital menu boards</div>
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