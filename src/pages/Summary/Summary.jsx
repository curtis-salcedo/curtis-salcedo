import "./Summary.css"

export default function Summary() {
  return (
    <>
    <section className="summaryContainer">
      <div className="summaryName">
        <div className="summaryIntro">I'm Curtis</div>
        <div className="summaryTitle">
          <div>Full Stack Developer</div>
          <button className="hireMeButton">Hire Me</button>
        </div>
      </div>
      <div className="summaryImageContainer">
        <img src="https://i.imgur.com/cMijoSw.png" alt=""/>
      </div>
    </section>

    </>
  )
}