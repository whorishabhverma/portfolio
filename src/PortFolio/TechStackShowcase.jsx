import React from 'react';
 const TechStackShowcase = () => {
  const technologies = [
    // Row 1
    {
      name: 'React',
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Next.JS',
      icon: '▲',
      color: 'from-white to-gray-300',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'React Router',
      icon: '🔀',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Vue.JS',
      icon: '🟢',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Nuxt.JS',
      icon: '🗻',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'HTML',
      icon: '🌐',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'CSS',
      icon: '🎨',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    
    // Row 2
    {
      name: 'Javascript',
      icon: 'JS',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Typescript',
      icon: 'TS',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'tRPC',
      icon: '🔄',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Google Cloud',
      icon: '☁️',
      color: 'from-blue-400 via-red-400 to-yellow-400',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'AWS',
      icon: '☁️',
      color: 'from-orange-400 to-yellow-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Node.JS',
      icon: '🟢',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Bun',
      icon: '🥯',
      color: 'from-yellow-600 to-orange-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    
    // Row 3
    {
      name: 'PostgreSQL',
      icon: '🐘',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Cloudflare',
      icon: '☁️',
      color: 'from-orange-400 to-yellow-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Vercel',
      icon: '▲',
      color: 'from-white to-gray-300',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Sass',
      icon: '💅',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'TailwindCSS',
      icon: '🌊',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Git',
      icon: '📝',
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    {
      name: 'Figma',
      icon: '🎯',
      color: 'from-purple-400 via-pink-400 to-red-400',
      bgColor: 'bg-gray-800/50 border-gray-700'
    },
    
    // Row 4
    {
      name: 'Sketch',
      icon: '💎',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gray-800/50 border-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h1>
          <p className="text-lg text-gray-300">
            Technologies I work with to build amazing applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${tech.bgColor} backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-gray-700/70 group cursor-pointer relative overflow-hidden`}
            >
              <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {tech.name}
                </h3>
              </div>
              
              {/* Animated glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300 blur-xl`}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-20"></div>
            <span className="text-sm font-medium">Always learning more</span>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-20"></div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-400 rounded-full opacity-30 animate-pulse delay-3000"></div>
        </div>
      </div>
    </div>
  );
};

export default TechStackShowcase;