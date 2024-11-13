import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EducationTimeline from './EducationTimeline';
import ProjectsShowcase from './Projects';
import SkillsShowcase from './Skills';
import HeroSection from './HeroSection';
import Footer from './Footer';

const App2 = () => {
  
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/education" element={<EducationTimeline />} />
        <Route path="/skills" element={<SkillsShowcase />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
      </Routes>
      <EducationTimeline/>
      <SkillsShowcase/>
      <ProjectsShowcase/>
      <Footer/>
      


    </Router>


  );
}

export default App2;
