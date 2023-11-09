import React, { useEffect, useState } from "react";
import icons from "../../utilities/icons-services";
import projects from "../../utilities/projects-services";
import "./Projects.css"

import { 
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Button,
  CardFooter,
  CardBody,
  CardHeader
  } from "reactstrap";


export default function ProjectTemplate({ activeIcon }) {
  const [stackIcons, setStackIcons] = useState([])
  const [ activeProjects, setActiveProjects ] = useState(projects)
  // Function to search "icons" array for a specific icon matching the string of the project programs

  useEffect(() => {
    const getStackIcons = () => {
      const projectStacks = projects.map( project => project.stack );
      const projectIcons = projectStacks.map( stack => {
        const stackIcons = stack.map( program => {
          const icon = icons.find( icon => icon.name === program );
          return icon;
        });
        return stackIcons;
      });
      setStackIcons(projectIcons);
    };
    getStackIcons();
    setActiveProjects(filterProjects(activeIcon))
  }, [activeIcon]);

  function handleGithubClick(link) {
    console.log(link)
    window.open(link, "_blank")
  }
  
  function handleLinkClick(link) {
    console.log(link)
    window.open(link, "_blank")
  }

  function filterProjects(activeIcon) {
    let active = activeIcon
    if (active === "ALL") {
      return projects
    } else {
      return projects.filter( project => project.stack.includes(active) )
    }
  }
  
  console.log(activeProjects)
  filterProjects(activeIcon)


  return (
    // <>
    // { activeProjects.map( (project, index) => (
    //   <div className="ProjectCard">
    //     <div className="ProjectContent">

    //       <div className="ProjectName">{project.name}</div>

    //       <div className="ProjectDescription">{project.description}</div>

    //       {/* { project.image && (
    //         <div className="ProjectImage"><img src={project.image} alt="" /></div>
    //         )} */}
          
    //       <div className="ProjectButtons">
    //         { project.github && ( 
    //           <div className="ProjectGithub"> 
    //             <button onClick={() => handleGithubClick(project.github)}>GitHub</button>
    //           </div>
    //         )}
    //         { project.link && ( 
    //           <div className="ProjectLink"> 
    //             <button onClick={() => handleLinkClick(project.link)}>Deployed Link</button>
    //           </div>
    //         )}
    //       </div>

    //       <div className="ProjectStack">
    //         {stackIcons[index] && stackIcons[index].map( (icon) => (
    //           <div key={icon.name} className="ProjectStackIcon">
    //             <img src={icon.src} alt="" />
    //           </div>
    //         ))}
    //       </div>

    //     </div>
    //   </div>
    //   ) ) }
    // </>
      <Container fluid>
        <Row className="overflow-auto flex-nowrap">
          {activeProjects.map((project, index) => (
            <Col key={index} className="">
              <Card className="project-card" >
                
                {/* {project.image && (
                  <img src={project.image} alt="" className="ProjectImage" />
                )} */}

                  <CardHeader className="bg-transparent" style={{ border: 'none' }}>

                  <CardTitle tag="h5" className="project-name">
                    {project.name}
                  </CardTitle>
                  </CardHeader>

                <CardBody  style={{ borderTop: 'var(--color-1) 1px solid'}}>
                  <CardText className="project-description">
                    {project.description}
                  </CardText>
                </CardBody>

                <CardFooter className="project-footer bg-transparent" style={{ borderTop: 'var(--color-1) 1px solid'}}>
                  <div className="project-buttons">
                    {project.github && (
                      <Button
                        color="primary"
                        onClick={() => handleGithubClick(project.github)}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        color="success"
                        onClick={() => handleLinkClick(project.link)}
                      >
                        Link
                      </Button>
                    )}
                  </div>
                  <div className="project-stack">
                    {/* <div className="ProjectStack"> */}
                      {stackIcons[index] &&
                        stackIcons[index].map((icon) => (
                          <div key={icon.name}>
                            <img src={icon.src} alt={icon.name} />
                          </div>
                        ))}
                    {/* </div> */}
                  </div>
                </CardFooter>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  )
}