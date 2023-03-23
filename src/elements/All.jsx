import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ElementCard from "../components/ElementCard";

function All() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <ElementCard image="all/with.jpg" />
          </Col>
          <Col xs={12} md={6}>
            <ElementCard image="all/008.jpg" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <ElementCard image="all/page4_img3.jpg" />
          </Col>
          <Col xs={12} md={6}>
            <ElementCard image="all/page4_img5.jpg" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <ElementCard image="all/work1.jpg" />
          </Col>
          <Col xs={12} md={6}>
            <ElementCard image="all/009.jpg" />
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default All