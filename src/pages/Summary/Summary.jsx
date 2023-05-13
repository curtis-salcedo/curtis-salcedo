import "./Summary.css"

export default function Summary() {
  return (
    <>
    <section className="summaryContainer">
      <div className="summaryName">
        <h1>I'm Curtis</h1>
        <div className="summaryTitle">
          <h4>Full Stack Developer</h4>
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