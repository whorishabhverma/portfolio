import React from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Shapes,
  GitBranch,
  Terminal,
  Globe,
  Palette,
  Box
} from 'lucide-react';
import {skillCategories} from './SocialLinks'
const SkillsShowcase = () => {
  

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A showcase of my technical expertise and professional skillset
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg
                       transform hover:-translate-y-2 transition-all duration-300
                       hover:shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} 
                              transform hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} 
                                  transform origin-left transition-transform duration-1000
                                  group-hover:scale-x-105`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1.5s ease-out ${skillIndex * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "VSCode", "Postman", "ThunderClient", "NodeJs", "REST API",
              "Material UI", "CI/CD"
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative px-6 py-2 bg-white dark:bg-gray-800 rounded-full
                         shadow-md hover:shadow-xl transition-all duration-300
                         transform hover:-translate-y-1 hover:scale-105
                         cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              transform scale-x-0 group-hover:scale-x-100
                              transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default SkillsShowcase;