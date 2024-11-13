import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram,
  Facebook,
  Heart 
} from 'lucide-react';
import {socialLink} from './SocialLinks';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-8">
            <a 
              href={socialLink.github} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                        transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={socialLink.linkedin}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                        transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={socialLink.instagram}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                        transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={socialLink.facebook} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
                        transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-300 text-center flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Rishabh Verma. Made with</span>
            <Heart className="w-4 h-4 inline-block text-red-500 animate-pulse mx-1" />
            <span>by Me</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;