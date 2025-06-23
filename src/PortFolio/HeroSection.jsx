import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialLink } from './SocialLinks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss } from 'react-icons/si';

const HeroSection = () => {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroSection = heroSectionRef.current;

    gsap.fromTo(
      heroSection.querySelector('.hero-content'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroSection.querySelectorAll('.bg-circle'),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.5,
        scrollTrigger: {
          trigger: heroSection,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    const nameElement = heroSection.querySelector('.name');
    const nameLetters = Array.from(nameElement.textContent).map((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.className = 'name-letter';
      return span;
    });

    nameElement.innerHTML = '';
    nameLetters.forEach((letter) => {
      nameElement.appendChild(letter);
    });

    gsap.fromTo(
      nameElement.querySelectorAll('.name-letter'),
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: heroSection,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      ref={heroSectionRef}
    >
      {/* Background Animation Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse bg-circle" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 bg-circle" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-bounce text-cyan-500 text-4xl">
          <SiReact />
        </div>
        <div className="absolute top-32 right-20 animate-spin text-green-600 text-4xl">
          <SiNodedotjs />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse text-emerald-500 text-4xl">
          <SiMongodb />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce text-yellow-400 text-4xl">
          <SiJavascript />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce text-blue-400 text-4xl">
          <SiTailwindcss />
        </div>
      </div>

      <div className="max-w-4xl px-4 py-20 sm:py-32 text-center relative hero-content z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">
              <span className="block text-gray-800 dark:text-white">Hi, I'm</span>
              <span className="name block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Rishabh Verma
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="https://wa.me/916388556612"
              target="_blank"
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
          <div className="flex justify-center gap-6">
            <a
              href={socialLink.github}
              className="text-[#4078c0] hover:text-[#0055ff] transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={socialLink.linkedin}
              className="text-[#0a66c2] hover:text-[#004182] transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={socialLink.twitter}
              className="text-[#1da1f2] hover:text-[#0d8ddb] transform hover:scale-110 transition-all duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
