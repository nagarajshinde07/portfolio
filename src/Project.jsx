import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Project = ({ title, img, description, github, live }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={img} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer">
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

