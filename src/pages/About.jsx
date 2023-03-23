import React from "react";
import { Container } from "react-bootstrap";
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <Container>
      <h3>THE SMART KITCHEN</h3>
      Experts in modern design custom kitchen cabinets & vanities
      <AboutCard
        image="jat.jpg"
        text={`The smart kitchen is a family owned and operated business based in Gampaha district, Sri Lanka. Established in 1985 on the mission of delivering quality design home décor products from around the world at the competitive price.
         \n The smart kitchen has now developed into a custom cabinetry business that still continues to maintain the goal of distributing high quality products at an affordable price. 
         \n The smart kitchen specializes in modern design custom kitchen cabinets & vanities.
         \n The smart kitchen prides themselves on excellent customer service, leading & cutting edge designs & affordable products. In addition to custom kitchen cabin the smart kitchen provides Bed room sets, Office furniture, mini bar units & other wood works.
         \n The smart kitchen is currently operating 5000 square feet factory located in Colombo- Kandy main road at Yakkala. Our goal is to create a luxury kitchen for you that suits your lifestyle at a price that gives you peace of mind.
         `}
      />
      <br />
      <h3>INTERNATIONAL COLLABORATION</h3>
      Training, Coaching, Consulting with foreign institutes
      <AboutCard
        image="all/with.jpg"
        text="We have been conducting training, coaching and consulting sessions for our management and staff with the coordination of The Netherlands embassy and with the assistance of PUM Office, Netherlands Senior Experts, Noorderstraat 26, 6953 CE DIEREN, The Netherlands. Mr. Hans Hartjes (Senior Expert- PUM Office) sent one month period in our workshop in January-February 2017."
      />
    </Container>
  );
}

export default About;
