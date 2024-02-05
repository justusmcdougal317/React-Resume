import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'project1-image.jpg',
      githubLink: 'https://github.com/your-username/project1',
      liveLink: 'https://your-username.github.io/project1',
    },
    // Repeat for other projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;