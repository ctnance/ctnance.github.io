import React from "react";

function TechTag({ techName }) {
  return (
    <div className={`tech-tag-container ${techName}`}>
      <p className="tech-tag-name">{techName}</p>
    </div>
  );
}

export default TechTag;
