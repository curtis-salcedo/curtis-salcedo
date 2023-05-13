import React from 'react';
import InkCoffee from '../../components/Jobs/InkCoffee';
import Adt from '../../components/Jobs/Adt';
import Carousel from 'react-bootstrap/Carousel';
import "./Resume.css";

export default function Resume() {
  return (
    <>
      <h3>Professional Experience</h3>
      <Carousel>
        <Carousel.Item>
        <div className="jobContainer">
          <InkCoffee />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="jobContainer">
          <Adt />
        </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
