import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Survival Shooter",
      description: "Develop a 3D game using Unity",
      imgUrl: projImg1,
    },
    {
      title: "KOL Database Management",
      description: "Deevelop a web application using ReactJS and NodeJS",
      imgUrl: projImg2,
    },
    {
      title: "Spotify Clone",
      description: "Develop binotify app using JavaScript and Spotify API",
      imgUrl: projImg3,
    },
    {
      title: "Ganesha IOTech Website",
      description: "Develop website for Ganesha IOTech using TypeScript and ReactJS",
      imgUrl: projImg4,
    },
    {
      title: "Image Compression",
      description: "Develop website for image compression using Html, CSS, and JavaScript",
      imgUrl: projImg5,
    },
    {
      title: "3D Web Articulated Model",
      description: "Develop a 3D web articulated model using WebGL",
      imgUrl: projImg6,
    },
  ];

  const projectstwo = [
        {
      title: "To Do List App",
      description: "Develop a to do list app using ReactJS and Firebase",
      imgUrl: projImg7,
    },
    {
      title: "landing Page Kodingna.com",
      description: "Design & Develop a landing page for Kodingna.com using ReactJS and TailwindCSS",
      imgUrl: projImg8,
    },
    {
      title: "Why Not Search",
      description: "Develop search file app using C# and Windows Form",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects I have worked on in the fields of web development, mobile, and game development. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectstwo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
