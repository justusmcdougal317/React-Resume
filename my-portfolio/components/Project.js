import React from 'react';

const Project = ({ title, description, image, githubLink, liveLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
};

export default Project;