import React from 'react'
import { Card } from 'react-bootstrap'

function AboutCard(props) {

  const textArray = props.text.split('\n')
  const textWithLineBreaks = textArray.map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ))


  return (

    <div style={{marginTop: 20, marginBottom:20}}>
      <Card>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + `images/${props.image}`}
          style={{ objectFit: "cover", height: "100%" }}
        />
        <Card.Body>
          {/* <Card.Title>Card title</Card.Title> */}
          <Card.Text>
            {textWithLineBreaks}
          </Card.Text>
        </Card.Body>
      </Card>
    
    </div>
  )
}

export default AboutCard