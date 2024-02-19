import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import React, { useState, useEffect } from 'react';

export const Projects = () => {

  const designprojects = [
    {
      title: "Tvíund - Logo",
      description: "student association in Computer Science RU",
      imgUrl: "./Artstuff/tviund.png",
    },
    {
      title: "Sys/tur/ - Logo",
      description: "women's association in computer science RU",
      imgUrl: "./Artstuff/systur.png",
    },
    {
      title: "Hoodler - Logo",
      description: "Personal Project - Business startup",
      imgUrl: "./Artstuff/hoodler-logo.png",
    },
    {
        title: "Ad for science trip",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/CCP.png",
      },
      {
        title: "Ad for linux course",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/Instagram Post 1080x1080 px (5).png",
      },
      {
        title: "Ad for Minecraft server",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/MINECRAFT AD.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker1.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker2.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker3.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker4.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker5.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker6.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker7.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker8.png",
      },
      {
        title: "Sticker design for committee",
        description: "Made using photoshop",
        imgUrl: "./Artstuff/sticker9.png",
      },
  ];

  const artprojects = [
    {
      title: "Warhammer commision",
      description: "Made using photoshop",
      imgUrl: "./Artstuff/bjarki commision - warhammer 40k.png",
    },
    {
      title: "3D character - Violet",
      description: "Made using Blender and Photoshop",
      imgUrl: "./Artstuff/animation violet magic.gif",
    },
    {
      title: "Weapon Design",
      description: "Made using Photoshop",
      imgUrl: "./Artstuff/untitled design (8).png",
    },
    {
    title: "Pixel armor",
    description: "Made using Asesprite",
    imgUrl: "./Artstuff/armor.png",
    },
    {
    title: "Weapon Design",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/axe ref (1).png",
    },
    {
    title: "D&D character - Norm Goldbeard",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/dvergur d&d png.png",
    },
    {
    title: "Character illustration",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/short hair me.png",
    },
    {
    title: "3D Weapon Design",
    description: "Made using Blender and Photoshop",
    imgUrl: "./Artstuff/untitled design.gif",
    },
    {
    title: "Self portrait 2021",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/self portrait 2021.png",
    },
    {
    title: "Head illustration",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/green woman.png",
    },

    {
    title: "3D head",
    description: "Made using Blender",
    imgUrl: "./Artstuff/2022-11-30-14-23-41.gif",
    },
    // {
    // title: "Oil painting Flowers",
    // description: "2021",
    // imgUrl: "Artstuff/oil paint 1.png",
    // },
    {
    title: "Oil painting Flowers",
    description: "2021",
    imgUrl: "./Artstuff/oil paint 2.png",
    },
    {
    title: "Oil painting Flowers",
    description: "2022",
    imgUrl: "./Artstuff/oil paint 3.png",
    },
    {
    title: "Oil painting Head",
    description: "2022",
    imgUrl: "./Artstuff/oil paint 4.png",
    },
    {
    title: "3D adventure backpack",
    description: "Made using Blender and Photoshop",
    imgUrl: "./Artstuff/untitled design (2).gif",
    },
    {
    title: "Weapon Design",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/tree sword design.png",
    },
    {
    title: "Character illustration",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/violet outfit.png",
    },
    {
    title: "Character Design",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/violet character design.png",
    },
    {
    title: "Character Design",
    description: "Made using Photoshop",
    imgUrl: "./Artstuff/zelena sketch.png",
    },
    {
    title: "Weapon Design",
    description: "Made using Asesprite",
    imgUrl: "./Artstuff/sword design tree.png",
    },
    // {
    // title: "Katara illustration",
    // description: "Made using Photoshop",
    // imgUrl: "Artstuff/katara.png",
    // },
    // {
    // title: "Friends portrait",
    // description: "Made using Photoshop",
    // imgUrl: "Artstuff/IMG_0219.png",
    // },
    {
    title: "3D illustration",
    description: "Made using Blender",
    imgUrl: "./Artstuff/0001-0040.gif",
    },  
  ];

  const gameprojects = [
    {
      title: "Swords & Sparks",
      description: "Personal Project - Platformer Unity",
      imgUrl: "./Artstuff/Swordsandsparks.png",
      link: "https://minininjaswag.itch.io/swords-sparks"
    },
    {
      title: "Ribbit Runner",
      description: "Group School Project - Endless Runner Unity",
      imgUrl: "./Artstuff/froggame.png",
      link: "https://raggiolafs00.itch.io/ribbitrunner"
    },
    {
      title: "Dreamy Platformer",
      description: "Solo School project - Platformer Unity",
      imgUrl: "./Artstuff/dreamygame.png",
      link: "https://minininjaswag.itch.io/dreamy-game"
    },
  ];

    // Function to shuffle array elements
    const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
    };

 
    const [randomProjects, setRandomProjects] = useState([]);

    // Shuffle the artprojects array when the component mounts
    useEffect(() => {
        const shuffledProjects = shuffleArray(artprojects);
        setRandomProjects(shuffledProjects);
    }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out my collection! From cool 2D/3D art to fun games I've made and designs like logos and branding. Each project is a mix of passion, skills, and creativity i've honed over the years.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">2D/3D Art</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Game Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                        <p>Here are Illustrations, Digital Paintings, and 3D renders I created</p>
                      <Row className="art-projects">
                        {
                          randomProjects.map((project, index) => {
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
                    <p>Here are all my game projects, click on them to play at itch.io!</p>
                    <Row>
                        {
                          gameprojects.map((project, index) => {
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
                    <p>Here are some logo designs I did for my personal projects and for school committees</p>
                    <Row>
                        {
                          designprojects.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}