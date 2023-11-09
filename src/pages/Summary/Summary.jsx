import "./Summary.css"

import React from "react";

import {
  Container,
  Row,
  Button,
} from 'reactstrap';

export default function Summary() {
  function handleHireMeClick() {
    // const emailAddress = 'curtismsalcedo@gmail.com';
    // const emailSubject = 'Hello Curtis!';
    // const emailBody = 'Hi Curtis, my name is ________ and I wanted to connect with you.';
    // const emailLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    // window.location.href = emailLink;
    const contactElement = document.getElementById('contact');
    contactElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return (
    <>
    <div className="SummaryContainer">
      <div className="SummaryName">
        <div className="SummaryIntro">I'm Curtis</div>
        <div className="SummaryTitle">
          <div>Full Stack Developer</div>
          <button className="HireMeButton" onClick={handleHireMeClick}>Hire Me</button>
        </div>
      </div>
      {/* <div className="SummaryImageContainer">
        <img src="https://i.imgur.com/cMijoSw.png" />
      </div> */}
      <Button color={`--image-opaque`} className="SummaryImageContainer">
        <img src="https://i.imgur.com/cMijoSw.png" />
      </Button>
    </div>

    </>
  )
}