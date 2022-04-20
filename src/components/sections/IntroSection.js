import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function IntroSection() {
  return (
    <section id="intro">
      <h1 className="intro--title">Christopher Nance</h1>
      <h2 className="intro--sub-title">Web Developer</h2>
      <div className="intro--get-in-touch">
        <p>Get in touch</p>
        <div className="intro--social-icons">
          <div className="intro--social-icon">
            <a aria-label="Email" href="mailto:ctnance0@gmail.com">
              <MailOutlineIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
          <div className="intro--social-icon">
            <a aria-label="Github" href="https://github.com/ctnance" target="__blank">
              <GitHubIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
          <div className="intro--social-icon">
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/christopher-nance/"
              target="__blank"
            >
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
