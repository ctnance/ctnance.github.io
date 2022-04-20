import React from "react";
import ProjectCard from "../ProjectCard";

import projectData from "../../projectData";

function ProjectsSection() {
  const projectCardElements = projectData.map((project) => (
    <ProjectCard projectData={project} />
  ));

  console.log(projectCardElements);

  return (
    <section id="projects">
      <h2 className="section-title projects--title">Projects</h2>
      <div className="projects--cards">{projectCardElements}</div>
    </section>
  );
}

export default ProjectsSection;
