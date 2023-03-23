import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container } from "react-bootstrap";
import "../css/footer.css";

function Footer() {
  return (
    <div style={{ textAlign: "center" }} className="bg-light">
      <Container>
        <div className="container1">
          <div style={{ marginRight: "1rem", marginTop: 10 }}>
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href="https://www.facebook.com/thesmartkitchenlk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon fontSize="large" id="icons"/>

              <p style={{ paddingTop: 5 }}>
                Find us on facebook The Smart Kitchen
              </p>
            </a>
          </div>

          <div style={{ marginTop: 10 }}>
            <YouTubeIcon fontSize="large" id="icons" />

            <p style={{ paddingTop: 5 }}>
              Find us on facebook The Smart Kitchen
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
