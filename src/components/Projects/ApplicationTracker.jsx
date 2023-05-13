import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";

export default function ApplicationTracker() {
  return (
    <>
    <div class="card border-dark mb-3">
      <div class="card-header">Application Tracker</div>
      <div class="card-body">
        <div class="card-text">A web application to track your job applications</div>
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