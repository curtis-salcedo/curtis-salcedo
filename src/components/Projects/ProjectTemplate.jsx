import React, { useEffect, useState } from "react";
import icons from "../../utilities/icons-services";
import projects from "../../utilities/projects-services";
import "./Projects.css"

export default function ProjectTemplate() {
  const [stackIcons, setStackIcons] = useState([])
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
  }, []);

  function handleGithubClick(link) {
    console.log(link)
    window.open(link, "_blank")
  }
  
  function handleLinkClick(link) {
    console.log(link)
    window.open(link, "_blank")
  }


  return (
    <>
    { projects.map( (project, index) => (
      <div className="ProjectCard">

        {/* { project.image && (
          <div className="ProjectImage"><img src={project.image} alt="" /></div>
        )} */}

        <div className="ProjectName">{project.name}</div>

        <div className="ProjectDescription">{project.description}</div>

        <div className="ProjectButtons">
          { project.github && ( 
            <div className="ProjectGithub"> 
              <button onClick={() => handleGithubClick(project.github)}>GitHub</button>
            </div>
          )}
          { project.link && ( 
            <div className="ProjectLink"> 
              <button onClick={() => handleLinkClick(project.link)}>Deployed Link</button>
            </div>
          )}
        </div>

        <div className="ProjectStack">
          {stackIcons[index] && stackIcons[index].map( (icon) => (
            <div key={icon.name} className="ProjectStackIcon">
              <img src={icon.src} alt="" />
            </div>
          ))}
        </div>

      </div>
      ) ) }
    </>
  )
}