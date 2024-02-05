import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'National Weather App',
      description: 'Search a city and get the weather specifics to be informed for planning your day.',
      imageUrl: require('./screencapture-127-0-0-1-5501-2024-02-04-11_37_38 (1).png'),
      liveLink: 'http://127.0.0.1:5502/index.html',
      githubLink: 'https://github.com/justusmcdougal317/Climate-Recognizance',
    },
    {
      title: 'Note Taking App',
      description: 'Enter desired note title and text inside, save the note to help remember important info as it is displayed on the side of the page.',
      imageUrl: require('./screencapture-localhost-3000-2024-02-04-11_46_03 (1) (1).png'), // Corrected path
      liveLink: 'http://127.0.0.1:5502/index.html',
      githubLink: 'https://github.com/justusmcdougal317/Climate-Recognizance',
    },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;