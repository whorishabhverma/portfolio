import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EducationTimeline from './EducationTimeline';
import ProjectsShowcase from './Projects';
import HeroSection from './HeroSection';
import Footer from './Footer';
import TechStackShowcase from './TechStackShowcase';

const App2 = () => {
  
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/education" element={<EducationTimeline />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
      </Routes>
      <EducationTimeline/>
      
      <TechStackShowcase/>
      <ProjectsShowcase/>
      <Footer/>
      


    </Router>


  );
}

export default App2;
