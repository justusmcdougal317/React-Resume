import React from 'react';

const Project = ({ title, description, imageUrl, liveLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={`${title} Project`} />
      <p>{description}</p>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;