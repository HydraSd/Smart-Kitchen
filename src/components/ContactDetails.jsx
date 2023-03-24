import React from "react";
import { Row, Col } from "react-bootstrap";

function ContactDetails(props) {
  return (
    <Row>
        <Col>
        <div style={{fontWeight:'bold'}}>{props.type}:</div>
        </Col>
        <Col>
        {props.details}
        </Col>
    </Row>
  );
}

export default ContactDetails;
