import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Star } from 'lucide-react';

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "MNNIT_IGNOU",
      description: "A distance learning platform allowing students to manage assignments, track enrollment, and access resources, with administrative features for managing students and notifications",
      image: "/images/mnnit.png",  // Path to image in the public folder
      tags: ["React", "Node.js", "PostGreSQL", "ExpressJs", "TailwindCSS"],
      github: "https://github.com/whorishabhverma/mnnit-project",
      demo: "https://mnnit-ignou-study-center-client.vercel.app/",
      stats: {
        stars: 128,
        views: 1.2,
        forks: 34
      }
    },
    {
      title: "Bookish Baazar",
      description: "A MERN stack-based bookstore where admins upload books, customers can read them, and users can leave reviews, with secure authentication and PDF viewing capabilities.",
      image: "/images/book.png",  // Path to image in the public folder
      tags: ["Nodejs", "ExpressJs", "TailwindCSS", "React", "MongoDB"],
      github: "https://github.com/whorishabhverma/BookStore",
      demo: "#",
      stats: {
        stars: 89,
        views: 856,
        forks: 23
      }
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      image: "/images/task.png",  // Path to image in the public folder
      tags: ["NodeJs", "TailwindCSS", "React", "JavaScript", "localStorage"],
      github: "https://github.com/whorishabhverma/Task_Manager_App",
      demo: "https://taskmate-ib46.onrender.com/",
      stats: {
        stars: 245,
        views: 2.3,
        forks: 67
      }
    }
  ];
  

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Exploring the intersection of design and functionality through modern web applications
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg
                       transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 
                           group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Project Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full 
                              group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold tracking-wide">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 h-12">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm px-3 py-1 rounded-full 
                               bg-gradient-to-r from-blue-100 to-purple-100 
                               dark:from-blue-900 dark:to-purple-900
                               text-blue-800 dark:text-blue-100
                               transform transition-transform duration-300
                               hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center group/stat">
                    <Star className="w-4 h-4 mr-1 group-hover/stat:text-yellow-500 transition-colors duration-300" />
                    <span className="group-hover/stat:text-yellow-500 transition-colors duration-300">
                      {project.stats.stars}
                    </span>
                  </div>
                  <div className="flex items-center group/stat">
                    <Eye className="w-4 h-4 mr-1 group-hover/stat:text-blue-500 transition-colors duration-300" />
                    <span className="group-hover/stat:text-blue-500 transition-colors duration-300">
                      {project.stats.views}
                    </span>
                  </div>
                  <div className="flex items-center group/stat">
                    <Code className="w-4 h-4 mr-1 group-hover/stat:text-purple-500 transition-colors duration-300" />
                    <span className="group-hover/stat:text-purple-500 transition-colors duration-300">
                      {project.stats.forks}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                             bg-gray-100 dark:bg-gray-700 rounded-lg
                             hover:bg-gray-200 dark:hover:bg-gray-600 
                             transform transition-all duration-300
                             hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                             bg-blue-500 text-white rounded-lg
                             hover:bg-blue-600 
                             transform transition-all duration-300
                             hover:scale-105
                             shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 
                             transition-opacity duration-300
                             pointer-events-none
                             ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;