// ProjectList.js
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          name={project.name}
          about={project.about}
          technologies={project.technologies} // Make sure to pass the technologies prop
        />
      ))}
    </div>
  );
}

export default ProjectList;

