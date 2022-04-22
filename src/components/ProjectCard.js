import React from "react";
import TechTag from "./TechTag";
import SocialIcon from "./SocialIcon";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ projectData }) {
  const techTagElements = projectData.tech_stack.map((techName) => (
    <TechTag techName={techName} />
  ));
  const githubIconData = {
    href: projectData.github_url,
    ariaLabel: "",
    icon: <GitHubIcon sx={{ color: "black" }} />,
  };
  return (
    <div className="project-card-container">
      {/* <a className="project-card-link" href={projectData.url} target="_blank"> */}
      <div className="project-card">
        <div className="project-card--img-container">
          <a href={projectData.url} target="_blank">
            <img
              className="project-card--img"
              src={`images/${projectData.img}`}
              alt="project image"
            />
          </a>
        </div>
        <div className="project-card--content">
          <SocialIcon iconData={githubIconData} />
          <a
            className="project-card--title-link"
            href={projectData.url}
            target="_blank"
          >
            <h3 className="project-card--title">{projectData.project_name}</h3>
          </a>
          <p className="project-card--description">{projectData.description}</p>
          <div className="project-card--tech-tags">{techTagElements}</div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}

export default ProjectCard;
