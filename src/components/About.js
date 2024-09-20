import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css/animate.min.css";
import teamMember1 from "../assets/img/luqman.jpg";
import teamMember2 from "../assets/img/seema.jpg";
import teamMember3 from "../assets/img/abdullah.jpg";
import teamMember4 from "../assets/img/shahzad.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <h2>About</h2>
            <p>
              At Stockit, we're passionate about helping businesses flourish
              online. We leverage cutting-edge strategies and proven techniques
              to achieve your goals. Our dedicated team brings a wealth of
              experience and creativity to every project, ensuring exceptional
              results. Let's discuss how Stockit can elevate your brand's
              presence.
            </p>
          </Col>
        </Row>
        <Row className="team-container">
        <h2>Our Experts</h2>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="team-member animate__animated animate__fadeInUp"
          >
            <div className="team-member-box">
              <img src={teamMember1} alt="Team Member 1" />
              <h3>Luqman Pervez</h3>
              <p>CEO TheStockit</p>
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="team-member animate__animated animate__fadeInUp"
          >
            <div className="team-member-box">
              <img src={teamMember2} alt="Team Member 2" />
              <h3>Seema Batool</h3>
              <p>Content Writer</p>
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="team-member animate__animated animate__fadeInUp"
          >
            <div className="team-member-box">
              <img src={teamMember4} alt="Team Member 4" />
              <h3>M Shehzad</h3>
              <p>Affiliate Marketer</p>
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="team-member animate__animated animate__fadeInUp"
          >
            <div className="team-member-box">
              <img src={teamMember3} alt="Team Member 3" />
              <h3>Abdullah Khan </h3>
              <p>Web Developer</p>
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
