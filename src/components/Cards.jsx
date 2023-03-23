import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import '../css/card.css'

function Cards() {
  const [fullscreen, serFullScreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    serFullScreen(breakpoint);
    setShow(true);
  }

  return (
    <div style={{marginTop:22}}>
      <Container>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col
            xs={{ order: "first" }}
            style={{ marginBottom: 10 }}
            onClick={() => handleShow(true)}
            
          >
            <Card className="bg-dark text-white h-100" id="cards">
              <Card.Img
                src={process.env.PUBLIC_URL + "/images/jat.jpg"}
                alt="Card image"
                style={{objectFit:"cover"}}
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>

          <Col xs style={{ marginBottom: 10 }}>
            <Card className="bg-dark text-white h-100" id="cards">
              <Card.Img
                src={process.env.PUBLIC_URL + "/images/all/008.jpg"}
                alt="Card image"
                style={{objectFit:"cover"}}
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={{ order: "last" }} style={{ marginBottom: 10 }}>
            <Card className="bg-dark text-white h-100" id="cards">
              <Card.Img
                src={process.env.PUBLIC_URL + "/images/all/008.jpg"}
                alt="Card image"
                style={{objectFit:"cover"}}
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
