import React from "react";
import SocialIcon from "../SocialIcon";
import socialData from "../../data/socialData";

function IntroSection() {
  const SOCIAL_ICON_ELEMENTS = socialData.map((iconData) => (
    <SocialIcon iconData={iconData} />
  ));

  return (
    <section id="intro">
      <h1 className="intro--title">Christopher Nance</h1>
      <h2 className="intro--sub-title">Web Developer</h2>
      <div className="intro--get-in-touch">
        <p className="intro--get-in-touch-text">Get in touch</p>
        <div className="intro--social-icons">{SOCIAL_ICON_ELEMENTS}</div>
      </div>
    </section>
  );
}

export default IntroSection;
