import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css'; // Import your global CSS file for application-wide styles
import './styles.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render the Navbar component */}
        <div className="app-container"> {/* Apply CSS Grid or Flexbox styling */}
          <Header />
          <div className="content"> {/* Apply CSS Grid or Flexbox styling */}
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/" element={<AboutMe />} />
            </Routes>
            <Footer /> {/* Render the Footer component */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;