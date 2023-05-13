import React from 'react';
import InkCoffee from '../../components/Jobs/InkCoffee';
import Adt from '../../components/Jobs/Adt';
import Carousel from 'react-bootstrap/Carousel';
import "./Resume.css";

export default function Resume() {
  return (
    <>
    <div id="experience" className="experienceContainer">
      <h3>Experiences</h3>
      <Carousel variant="dark">
        <Carousel.Item>
        <div className="resumeContainer">
          <InkCoffee />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="resumeContainer">
          <Adt />
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}
