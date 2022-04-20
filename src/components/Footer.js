import React from "react";
import SocialIcon from "./SocialIcon";
import socialData from "../data/socialData";

function Footer() {
  const SOCIAL_ICON_ELEMENTS = socialData.map((iconData) => (
    <SocialIcon iconData={iconData} />
  ));

  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer--social-icons">{SOCIAL_ICON_ELEMENTS}</div>
      <p className="footer-copyright-notice">© {CURRENT_YEAR} Christopher Nance</p>
    </footer>
  );
}

export default Footer;
