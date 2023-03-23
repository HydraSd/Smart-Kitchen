import { Tab } from "react-bootstrap";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Pantry from "../elements/Pantry";
import All from "../elements/All";

function Tabs() {
  const [activeKey, setActiveKey] = useState("all");

  const handleSelect = (key) => {
    setActiveKey(key);
    console.log(activeKey);
  };

  return (
    <>
      <Tab.Container defaultActiveKey="all">
        <Nav
          variant="tabs"
          defaultActiveKey={activeKey}
          onSelect={handleSelect}
        >
          <Nav.Item>
            <Nav.Link eventKey="all" active>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pantry">Pantry</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Cupboards</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Flooring</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Tables</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Cupboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">Cupboard</Nav.Link>
          </Nav.Item>
        </Nav>

        <div style={{paddingTop:15}}>

        <Tab.Content>
          <Tab.Pane eventKey="all">
            <All />
          </Tab.Pane>

          <Tab.Pane eventKey="pantry">
            <center>

            <Pantry />
            </center>
          </Tab.Pane>
        </Tab.Content>
        </div>
      </Tab.Container>

    </>
  );
}

export default Tabs;
