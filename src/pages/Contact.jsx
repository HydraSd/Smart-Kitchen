import React from "react";
import { Container } from "react-bootstrap";
import ContactDetails from "../components/ContactDetails";
import Brands from "../components/Brands";
import "../css/contact.css";
import ContactForm from "../components/Form";

function Contact() {
  return (
    <Container>
      {/* <div style={{ fontSize: "30px" }}>Contact Us</div> */}
      <div style={{ fontSize: "30px" }}>Get in touch</div>
      <div style={{ fontWeight: "lighter" }}>
        If you have any question or comments, or if you would like to contact
        us, please use the form below and we will get back to you as soon as
        possible
      </div>
      <ContactForm />
      <br />
      <img
        src={process.env.PUBLIC_URL + "images/all/logo2.png"}
        style={{ width: "250px" }}
        alt=""
      />

      <center>
        <div>SUBSIDIARY OF</div>
        <div style={{ color: "orange", fontSize: "20px" }}>
          PUBUDU SAW MILL'S
        </div>
        <br />

        <div style={{ width: "250px" }}>
          <ContactDetails type="Mobile" details="071 718 7870" />
          <ContactDetails type="General Line" details="033 567 7131" />
          <ContactDetails type="Mobile" details="071 718 7870" />
          <ContactDetails type="Mobile" details="071 718 7870" />
        </div>
      </center>
      <br />
      <div style={{ fontSize: "18px" }}>Our Partners</div>
      
      <Brands />
      <br />
    </Container>
  );
}

export default Contact;
