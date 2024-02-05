import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume: <a href="your-resume-url.pdf" target="_blank" rel="noopener noreferrer">Resume.pdf</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;