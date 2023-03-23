import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content1() {
  return (
    <div style={{ marginTop: 10 }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Welcome</h1>
            <p>
              The smart kitchen on the belief that integrity engineering talent
              and dedication to our customers would make us the very best in the
              industry. For more than three decades, our success and reputation
              in the market place have been testaments to the client’s wisdom.
              We are trying and have been successful in fulfilling our
              commitment to our self and our customers providing and maintaining
              high standards. We make sure that the product and the services
              which we deal were of good quality and reliability. Our activities
              are certified for the quality and performance and our customer’s
              peace of mind. Our main asset is our credibility and excellent
              reputation that we gained over the years in the market. Since the
              start we have been continuously working hard to stand firmly and
              have attained a unique identity for our self in this field. Our
              carpentry work undertaken manufacturing pantry cupboards, office
              furniture, Bed room sets, doors, windows with sashes and wooden
              parquet flooring. In addition to that we are providing interior
              designing and architectural drawing for every project we
              undertake, free of charge.
            </p>
            <figure class="figure">
              <img
                style={{ height: "200px" }}
                src={process.env.PUBLIC_URL + "images/page1_img3.jpg"}
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-end"></figcaption>
            </figure>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ marginBottom: 20, marginTop: 10 }}>
              <h3>Call Now: 071 718 7870</h3>
            </div>
            <figure class="figure">
              <img
                style={{ height: "200px" }}
                src={process.env.PUBLIC_URL + "images/page1_img1.jpg"}
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-end"></figcaption>
            </figure>
            <p>
              Skillful workmanship, new designs, quality materials &
              international Collaboration are our specialty. While practicing
              our own carpentry traditions and tactics we always trying to adopt
              internationally recognized carpentry and design concepts to
              improve customer experience of cliental. We do have participated
              several knowledge exchange programs with foreign countries like
              the Netherlands, China etc. As a part of such programs we have
              participated programs in the Netherlands. We do have programs in
              our factory which conducted by foreign trainers.
            </p>
            <h6>CLIENTS’ QUOTES</h6>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "1rem" }}>
            <img
              src={process.env.PUBLIC_URL + "images/page1_img2.jpg"}
              alt=""
            />

          </div>
          <p>
            "I am very glade to recommend "the smart kitchen" to anyone who
            wants to have high quality set of kitchen cabin at very competitive
            price without compromising modern features."<br /> <div style={{color:"#f3aa29"}}>
            MR. KUMARA SUBHASINHA
            </div>
          </p>
        </div>
          </Col>
        </Row>


        <div className={{ marginTop: 10, marginBottom: 30 }}>
          <br />
          <h1>Our Products</h1>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <h6 style={{color:"#f3aa29"}}>KITCHEN CABINET</h6>
            
              <p>International designs, world class quality, quality materials, best buy</p>
             
            </Col>
            <Col xs={12} md={6}>
            <h6 style={{color:"#f3aa29"}}>OFFICE FURNITURE</h6>
          
          <p>

            Complete range of office furniture with modern touch, highest quality affordable price range
          </p>
            
            </Col>
            <Col xs={12} md={6}>
              <h6 style={{color:"#f3aa29"}}>ALL OTHER WOOD WORKS</h6>
              <p>
              All wood works including Bed room sets & mini bar sets , timber flooring etc.
              </p>
            </Col>
          </Row>
          <br />
        </div>
        <div style={{fontSize:'16px', fontWeight:'lighter', fontFamily:'monospace'}}>THE SMART KITCHEN ON THE BELIEF THAT INTEGRITY ENGINEERING TALENT AND AS DEDICATION TO OUR CUSTOMERS MAKE US THE VERY BEST IN THE INDUSTRY</div>
        <br />
      </Container>
    </div>
  );
}

export default Content1;
