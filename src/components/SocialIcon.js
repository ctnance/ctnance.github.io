import React from "react";

function SocialIcon({ iconData }) {
  console.log(iconData);
  return (
    <div className="social-icon">
      <a
        className="social-icon--link"
        aria-label={iconData.aria_label}
        href={iconData.href}
        target="_blank"
      >
        {iconData.icon}
      </a>
    </div>
  );
}

export default SocialIcon;
