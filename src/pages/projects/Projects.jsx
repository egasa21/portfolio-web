import React from 'react';
import { ExternalLink, Github, Code, FlaskConical } from 'lucide-react';
import { projectsData } from '../../data/projectsData'

export default function Projects() {
    const projects = projectsData;
    
    // Function to generate sketch path for border
    const generateSketchPath = (width, height, roughness = 2) => {
      // Simple sketch effect for rectangles
      const variance = roughness;
      const topLine = `M0,0 Q${width/4},${0-Math.random()*variance} ${width/2},${0+Math.random()*variance} T${width},0`;
      const rightLine = `M${width},0 Q${width+Math.random()*variance},${height/4} ${width-Math.random()*variance},${height/2} T${width},${height}`;
      const bottomLine = `M${width},${height} Q${3*width/4},${height+Math.random()*variance} ${width/2},${height-Math.random()*variance} T0,${height}`;
      const leftLine = `M0,${height} Q${0-Math.random()*variance},${3*height/4} ${0+Math.random()*variance},${height/2} T0,0`;
      
      return `${topLine} ${rightLine} ${bottomLine} ${leftLine}`;
    };
  
    // Function to generate a random sketch for tech badges
    const generateSketchyPill = (width, height) => {
      const r = height / 2;
      const variance = 1;
      
      // Create a sketchy rounded rectangle path
      const leftArc = `M${r},0 Q${0+Math.random()*variance},${0+Math.random()*variance} ${0+Math.random()*variance},${r} Q${0+Math.random()*variance},${height-Math.random()*variance} ${r},${height}`;
      const bottomLine = `L${width-r},${height} Q${width-Math.random()*variance},${height-Math.random()*variance} ${width-Math.random()*variance},${r}`;
      const rightArc = `Q${width-Math.random()*variance},${0+Math.random()*variance} ${width-r},${0}`;
      const topLine = `L${r},0`;
      
      return `${leftArc} ${bottomLine} ${rightArc} ${topLine}`;
    };
  
    return (
      <section id="projects" className="mx-auto max-w-7xl py-20 p-6 lg:px-8 relative">
        {/* Sketchy background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <svg width="100%" height="100%" className="absolute opacity-5">
            <defs>
              <pattern id="graph-paper" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="#aaa" strokeWidth="0.5" />
                <path d="M0 10 L40 10 M0 20 L40 20 M0 30 L40 30" stroke="#aaa" strokeWidth="0.25" />
                <path d="M10 0 L10 40 M20 0 L20 40 M30 0 L30 40" stroke="#aaa" strokeWidth="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#graph-paper)" />
            
            {/* Random sketchy doodles */}
            <path d="M50,150 Q100,50 200,180 T350,120" stroke="#888" strokeWidth="0.5" fill="none" />
            <path d="M500,200 Q600,250 700,180" stroke="#888" strokeWidth="0.5" fill="none" />
            <circle cx="150" cy="300" r="20" fill="none" stroke="#888" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>
        
        {/* Section header */}
        <div className="text-center">
          <h2 className="relative inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif italic">
            Projects
            <svg className="absolute -bottom-2 left-0 w-full h-3 -z-10">
              <path d="M0,2 Q25%,0 50%,3 T100%,1" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h2>
          
          <div className="mt-6 max-w-2xl mx-auto relative">
            <p className="text-lg leading-8 text-gray-600 font-mono">
              Here are some of the projects I've worked on, showcasing my skills in backend, frontend, and mobile development.
            </p>
            
            {/* Decorative element */}
            <svg className="absolute -right-6 -bottom-4 w-12 h-12 text-gray-200 -z-10">
              <path d="M2,6 Q6,2 10,8" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M8,10 Q12,6 16,12" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
        </div>
  
        {/* Paper clip decoration */}
        <div className="absolute top-20 right-8 hidden lg:block">
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
            <path d="M30,0 Q40,10 30,20 L15,70 Q12,80 5,75 Q0,72 5,65 L20,15 Q25,5 30,0" fill="none" stroke="#888" strokeWidth="1.5" />
          </svg>
        </div>
  
        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card shadow/backing */}
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-gray-100 rounded-lg"></div>
              
              {/* Main card */}
              <div className="relative flex flex-col items-start p-8 bg-white rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors duration-300">
                {/* Sketchy border */}
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={generateSketchPath(100, 100, 3)} 
                    className="w-full h-full"
                    fill="none" 
                    stroke="rgba(0,0,0,0.1)" 
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Project icon (randomized) */}
                <div className="mb-4 text-gray-400">
                  {index % 2 === 0 ? <Code size={24} /> : <FlaskConical size={24} />}
                </div>
                
                {/* Project title with underline */}
                <h3 className="text-xl font-serif italic font-semibold text-gray-900 mb-4 relative">
                  {project.title}
                  <svg className="absolute -bottom-1 left-0 w-full h-2">
                    <path d="M0,1 Q25%,0 50%,1 T100%,1" stroke="#9ca3af" strokeWidth="1" fill="none" />
                  </svg>
                </h3>
                
                {/* Project description */}
                <p className="text-base text-gray-700 mb-6 font-mono">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="relative inline-block px-3 py-1"
                    >
                      {/* Sketchy pill background */}
                      <svg className="absolute inset-0 w-full h-full -z-10">
                        <path 
                          d={generateSketchyPill(tech.length * 8 + 16, 28)} 
                          fill="#f3f4f6" 
                          stroke="#d1d5db" 
                          strokeWidth="1"
                        />
                      </svg>
                      <span className="text-gray-800 text-sm font-mono">{tech}</span>
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center space-x-6 mt-auto pt-2">
                  {/* Conditionally render "View Project" link */}
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-teal-600 font-mono font-semibold hover:text-teal-800 transition-colors group-hover:underline relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" /> 
                      View Project
                      <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M0,0 Q25%,1 50%,0 T100%,0" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" fill="none" />
                      </svg>
                    </a>
                  )}
                  
                  {/* Conditionally render "GitHub Repo" link */}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center text-teal-600 font-mono font-semibold hover:text-teal-800 transition-colors group-hover:underline relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" /> 
                      GitHub Repo
                      <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M0,0 Q25%,1 50%,0 T100%,0" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" fill="none" />
                      </svg>
                    </a>
                  )}
                </div>
                
                {/* Decorative corner elements */}
                <svg className="absolute top-3 right-3 w-6 h-6 text-gray-200">
                  <circle cx="3" cy="3" r="2" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
                
                <svg className="absolute bottom-3 left-3 w-6 h-6 text-gray-200">
                  <path d="M1,1 L5,5" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M1,5 L5,1" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
              
              {/* Paper fold corner */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <svg viewBox="0 0 12 12" className="w-full h-full">
                  <path d="M12,0 L12,12 L0,12 Z" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5" />
                  <path d="M10,2 L10,10 L2,10" fill="none" stroke="#d1d5db" strokeWidth="0.5" strokeDasharray="0.5 1" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Paper edge */}
        <svg className="absolute bottom-0 left-0 w-full h-8 overflow-visible">
          <path d="M0,0 Q25%,8 50%,2 T100%,5" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />  
        </svg>
        
        {/* Pencil doodle */}
        <svg className="absolute bottom-20 left-8 w-32 h-32 text-gray-200 -z-10 hidden lg:block">
          <path d="M10,30 L25,5 L30,2 L35,5 L50,30 L35,25 L30,28 L25,25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M10,30 L10,35 L50,35 L50,30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20,35 L20,38 M30,35 L30,38 M40,35 L40,38" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </section>
    );
  }
