import React from "react";
import Card from "react-bootstrap/Card";
import "../css/element_card.css";

function ElementCard(props) {
  return (
    <div style={{ marginBottom: 15 }}>
      <Card>
        <Card.Img
          
          src={process.env.PUBLIC_URL + `images/${props.image}`}
          className="card-image"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ElementCard;
