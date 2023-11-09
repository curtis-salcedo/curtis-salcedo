import React from "react"
import "./Services.css"

import {
  Container,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap"

      // <div className="serviceCard">
      //   <div className="icon">
      //     {service.icon}
      //   </div>
      //   <div className="serviceTitle">{service.title}</div>
      //   <div className="serviceDescription">{service.description}</div>
      // </div>

export default function SkillTemplate({ service }) {
  return (
    <>
      <Card className="serviceCard">

        <CardBody>
        <CardTitle tag="h5" style={{ width: '100%', height: '25%' }}>
          <Row className="m-2">
            <Col style={{ textAlign: 'left' }}>
              <div>{service.icon}</div>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <div>{service.title}</div>
            </Col>
          </Row>
        </CardTitle>

          <CardText className="serviceDescription">{service.description}</CardText>
        </CardBody>
          {/* <Button>Examples</Button> */}
      </Card>
    </>
  )
}