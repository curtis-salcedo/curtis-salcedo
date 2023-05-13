import { SiMongodb, SiBootstrap, SiJavascript, SiExpress, SiNodedotjs  } from "react-icons/si";

export default function MarketLocale() {
  return (
    <>
    <div class="card border-dark mb-3">
      <div class="card-header">Market Locale</div>
      <div class="card-body">
        <div class="card-text">A web application to buy and sell locally made products.</div>
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