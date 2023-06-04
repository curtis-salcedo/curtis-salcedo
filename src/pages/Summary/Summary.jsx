import "./Summary.css"

export default function Summary() {

  return (
    <>
    <div className="SummaryContainer">
      <div className="SummaryName">
        <div className="SummaryIntro">I'm Curtis</div>
        <div className="SummaryTitle">
          <div>Full Stack Developer</div>
          <button className="HireMeButton">Hire Me</button>
        </div>
      </div>
      <div className="SummaryImageContainer">
        <img src="https://i.imgur.com/cMijoSw.png" />
      </div>
    </div>

    </>
  )
}