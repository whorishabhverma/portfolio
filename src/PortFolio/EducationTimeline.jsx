import React from 'react';
import { BookOpen, Award, Building, Calendar } from 'lucide-react';

const EducationTimeline = () => {
  const education = [
    {
      period: "2022 - 2025",
      degree: "Master of Computer Applications",
      school: "NIT Allahabad",
      location: "Prayagraj",
      description: "Core focus on advanced software development, algorithms, data structures, and computational theory with practical application",
      achievements: ["4.0 GPA", "Research Assistant", "Teaching Assistant for AI courses"],
      icon: BookOpen
    },
    {
      period: "2017 - 2020",
      degree: "Bachelor of Computer Applications",
      school: "Dayanand Academy of Management Studies",
      location: "Kanpur",
      description: "Core focus on software development, algorithms, and data structures. Minor in Mathematics.",
      achievements: ["Hackathon Winner"],
      icon: Award
    },
    {
      period: "2015 - 2017",
      degree: "Intermediate",
      school: "MNJIC",
      location: "Kannauj, Uttar Pradesh",
      description: "Core focus on general education with a specialization in science, commerce, or arts, preparing for higher studies.",
      achievements: ["Perfect Attendance", "Programming Competition Winner"],
      icon: Building
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Education Journey
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`mb-12 group ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 
                            group-hover:scale-150 transition-transform duration-300"></div>

              {/* Content card */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
                              transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {item.degree}
                  </h3>

                  <div className="flex items-center mb-4">
                    <item.icon className="w-5 h-5 text-blue-500 mr-2" />
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-200">{item.school}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievementIndex}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;