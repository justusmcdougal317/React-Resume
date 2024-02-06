import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="./src/components/Resume.pdf" download>Download Resume</a> {/* Fixed */}
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>Handlebars</li>
        <li>CSS</li>
        <li>JSON</li>
        <li>Express</li>
        <li>Node</li>
        <li>Inquirer</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Mysql</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

export default Resume;