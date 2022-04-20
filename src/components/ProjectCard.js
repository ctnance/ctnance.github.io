import React from "react";

function ProjectCard({ projectData }) {
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
            <p>{projectData.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
