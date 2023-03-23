import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ElementCard from "../components/ElementCard";

function Pantry() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <ElementCard image="pantry/pan4.jpg" />
          </Col>
          <Col xs={12} md={6}>
            <ElementCard image="pantry/pantry2.jpg" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <ElementCard image="pantry/page3_img1.jpg" />
          </Col>
          <Col xs={12} md={6}>
            <ElementCard image="pantry/pan7.jpg" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <ElementCard image="pantry/pantry3.jpg" />
          </Col>
          <Col xs={12} md={6}>
            <ElementCard image="pantry/pang.jpg" />
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Pantry;
