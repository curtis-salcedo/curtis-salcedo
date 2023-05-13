import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";

export default function GolfBuddy() {
  return (
    <>
    <div class="card border-dark mb-3">
      <div class="card-header">Golf Buddy</div>
      <div class="card-body">
        <div class="card-text">A web application to track your golf scores</div>
        <div class="card-footer">
        <SiMongodb />
        <SiBootstrap />
        <SiJavascript />
        <SiExpress />
        <SiNodedotjs />
        </div>
        </div>
    </div>
    </>
  )
}