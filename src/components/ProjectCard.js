import React from "react";
import TechTag from "./TechTag";

function ProjectCard({ projectData }) {
  const techTagElements = projectData.tech_stack.map((techName) => (
    <TechTag techName={techName} />
  ));
  return (
    <div className="project-card-container">
      <a className="project-card-link" href={projectData.url} target="_blank">
        <div className="project-card">
          <div className="project-card--img-container">
            <img
              className="project-card--img"
              src={`images/${projectData.img}`}
              alt="project image"
            />
          </div>
          <div className="project-card--content">
            <h3 className="project-card--title">{projectData.project_name}</h3>
            <p className="project-card--description">{projectData.description}</p>
            <div className="project-card--tech-tags">{techTagElements}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
