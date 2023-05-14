import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";
import "./Projects.css"

export default function MarketLocale() {
  return (
    <>
    <div className="projectCard">
      <div className="projectTitle">Market Locale</div>
      <div className="projectDescription">A web application to buy and sell locally made products.</div>
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