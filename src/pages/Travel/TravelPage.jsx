import React, { useEffect, useState } from 'react';

import travelData from '../../utilities/travel-data';

import './TravelPage.css';

import {
  Button,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Row,
  Col,
} from 'reactstrap';

export default function TravelPage() {

  console.log('All data objects', travelData);

  function daysUntil(date) {
    const today = new Date();
    const travelDate = new Date(date);
    const timeDiff = travelDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // console.log(daysDiff)
    return daysDiff;
  }

  return (
    <div className="TravelPage">
      <h1>Travel Page</h1>
      <Container>
          <Card>
            <CardText>{daysUntil(travelData[0].date)} days until the trip begins!</CardText>
          </Card>
          <Row>
            { travelData.map((day) =>
              <Col sm="4">
                <Card key={day.name}>
                  <CardBody>
                    <CardTitle tag="h5">{day.name}</CardTitle>

                    <CardSubtitle tag="h6" className="mb-2 text-muted">{day.date}</CardSubtitle>

                    <CardBody>
                      <CardText>
                        {day.travelDepartures ? day.travelDepartures.map((day) => day.type)[0] : null}
                      </CardText>
                      <CardText>
                        {day.locations.map((day) => day.type)}
                      </CardText>
                      <CardText>
                        {day.locations.map((day) => day.details)}
                      </CardText>
                    </CardBody>
                    <CardText>{day.description}</CardText>
                    <CardFooter>
                      <Button>Details</Button>
                      <Button>Map</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            )
            }
          </Row>
      </Container>
    </div>
  );
}