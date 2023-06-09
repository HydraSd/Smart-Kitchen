import React from "react";
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="sm" className="mb-3" variant="light">
        <Container fluid>
          <Navbar.Brand href="#">The Smart Kitchen</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                The Smart Kitchen
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>

                {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
              </Nav>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
