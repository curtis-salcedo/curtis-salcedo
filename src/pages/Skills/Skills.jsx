import React from 'react';
import "./Skills.css";

import SkillTemplate from "../../components/Services/SkillTemplate"
import skills from "../../utilities/skills-service"

import {
  Container,
} from "reactstrap"

export default function Skills() {

  console.log(skills)
  return (
    <>
    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">

    <div className="SectionTitle">Talents</div> 
    <Container className="services-container">
      { skills ? 
      skills.map((service) => {
        return <SkillTemplate service={service} />
      }) : null }
    </Container>

    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}