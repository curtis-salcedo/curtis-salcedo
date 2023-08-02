import React, { useState } from 'react';
import Jobs from '../../components/Jobs/Jobs';
// import Carousel from 'react-bootstrap/Carousel';
import "./Resume.css";
import {
  Button,
  Fade,
} from 'reactstrap';

export default function Resume() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ activeJob, setActiveJob ] = useState(null);

  return (

    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">
    <div className="SectionTitle">Experiences</div>        
    <div id="experience" className="ExperienceContainer">
      <div className="ResumeContainer">
        <Jobs />
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
