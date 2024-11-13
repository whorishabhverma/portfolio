import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import socialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Animation Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold">
                <span className="block text-gray-800 dark:text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Your Name
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Full Stack Developer specializing in building exceptional digital experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 
                     bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 transform hover:scale-105
                     transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3
                         bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg
                         hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105
                         transition-all duration-300"
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href={socialLinks.github} 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                          transform hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                          transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.twitter}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                          transform hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative group w-full max-w-md mx-auto">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl 
                          blur group-hover:blur-xl transition-all duration-500 animate-pulse" />
            
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 
                          transform group-hover:scale-[0.98] transition-transform duration-500
                          hover:shadow-xl">
              <img
                src='./images/myimage.jpg'
                alt="Your Name"
                className="w-full h-auto object-cover rounded-2xl
                         transform scale-[1.02] group-hover:scale-105 
                         transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;