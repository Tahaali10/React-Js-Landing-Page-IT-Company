import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import smImg1 from "../assets/img/faika.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webProjects = [
    {
      title: "RoseekaPak",
      description: "IT Startup",
      imgUrl: projImg1,
      url: "https://roseekapak.com"
    },
    {
      title: "BotixAI",
      description: "AI Automation Company",
      imgUrl: projImg2,
      url: "https://botixai.com/"
    },
    {
      title: "Temia Quran",
      description: "Online Quran Learning",
      imgUrl: projImg3,
      url: "https://temiaquran.com/"
    },
    {
      title: "Guru Advance Shop",
      description: "Online Store",
      imgUrl: projImg4,
      url: "https://guruadvanceshop.com/"
    },
    {
      title: "Cybernated Media",
      description: "Youtube Editing Service",
      imgUrl: projImg5,
      url: "https://cybernatedmedia.com/"
    },

  ];
  const videoProjects = [
    {
      title: "RoseekaPak",
      description: "IT Startup",
      imgUrl: projImg1,
    },
    {
      title: "BotixAI",
      description: "AI Automation Company",
      imgUrl: projImg2,
    },
    {
      title: "Temia Quran",
      description: "Online Quran Learning",
      imgUrl: projImg3,
    },
  ];
  const socialMedia = [
    {
      title: "Faika Karim",
      description: "Clothing Brand",
      imgUrl: smImg1,
      url: "https://www.instagram.com/faikacollection?igsh=dGtnY3d6ejlrcGJ0"
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    We craft exceptional digital experiences. From building
                    user-friendly websites and implementing powerful SEO
                    strategies to creating captivating video content and
                    managing engaging social media campaigns, Stockit empowers
                    your brand to thrive online.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Digital Marketing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Video Editing</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((webProjects, index) => {
                            return <ProjectCard key={index} {...webProjects} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {socialMedia.map((videoProjects, index) => {
                            return <ProjectCard key={index} {...videoProjects} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {videoProjects.map((videoProjects, index) => {
                            return <ProjectCard key={index} {...videoProjects} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
