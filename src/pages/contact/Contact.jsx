import React from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

export const Contact = () => {
  // Function to generate sketch path for border
  const generateSketchPath = (width, height, roughness = 2) => {
    const variance = roughness;
    const topLine = `M0,0 Q${width/4},${0-Math.random()*variance} ${width/2},${0+Math.random()*variance} T${width},0`;
    const rightLine = `M${width},0 Q${width+Math.random()*variance},${height/4} ${width-Math.random()*variance},${height/2} T${width},${height}`;
    const bottomLine = `M${width},${height} Q${3*width/4},${height+Math.random()*variance} ${width/2},${height-Math.random()*variance} T0,${height}`;
    const leftLine = `M0,${height} Q${0-Math.random()*variance},${3*height/4} ${0+Math.random()*variance},${height/2} T0,0`;
    
    return `${topLine} ${rightLine} ${bottomLine} ${leftLine}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl py-20 p-6 lg:px-8 relative">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg width="100%" height="100%" className="absolute opacity-5">
          <defs>
            <pattern id="notebook-lines" width="100%" height="24" patternUnits="userSpaceOnUse">
              <line x1="0" y1="23" x2="100%" y2="23" stroke="#888" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#notebook-lines)" />
          
          {/* Random sketchy doodles */}
          <path d="M50,80 Q150,40 250,100" stroke="#888" strokeWidth="0.5" fill="none" />
          <path d="M400,50 Q500,100 600,60" stroke="#888" strokeWidth="0.5" fill="none" />
          <circle cx="700" cy="150" r="15" fill="none" stroke="#888" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Section header */}
      <div className="text-center">
        <h2 className="relative inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif italic">
          Get in Touch
          <svg className="absolute -bottom-2 left-0 w-full h-3 -z-10">
            <path d="M0,2 Q25%,0 50%,3 T100%,1" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </h2>
        
        <div className="mt-6 max-w-2xl mx-auto relative">
          <p className="text-lg leading-8 text-gray-600 font-mono">
            If you're interested in working together, feel free to drop me a message. 
            I'm open to freelance projects, collaborations, or even just a friendly hello!
          </p>
          
          {/* Decorative element */}
          <svg className="absolute -right-8 -bottom-4 w-16 h-16 text-gray-200 -z-10">
            <path d="M2,8 Q8,2 14,10 T24,2" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M4,16 Q14,10 20,18" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-2xl relative">
          {/* Form backing/shadow */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-100 rounded-lg"></div>
          
          {/* Main form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="relative w-full p-8 bg-white rounded-lg border-2 border-gray-300"
          >
            {/* Sketchy border */}
            <svg className="absolute inset-0 w-full h-full -z-10">
              <path 
                d={generateSketchPath(100, 100, 4)} 
                className="w-full h-full"
                fill="none" 
                stroke="rgba(0,0,0,0.1)" 
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Paper clip decoration */}
            <div className="absolute -top-6 right-8 hidden sm:block">
              <svg width="30" height="60" viewBox="0 0 30 60" fill="none">
                <path d="M22,0 Q30,7 22,15 L12,50 Q10,58 5,55 Q0,52 3,48 L15,12 Q18,5 22,0" fill="none" stroke="#888" strokeWidth="1.5" />
              </svg>
            </div>
            
            {/* Message icon */}
            <div className="absolute -top-3 -left-3 w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center shadow-md">
              <MessageSquare size={24} className="text-white" />
              
              {/* Sketchy circle around icon */}
              <svg className="absolute inset-0 w-full h-full">
                <circle 
                  cx="28" 
                  cy="28" 
                  r="26" 
                  fill="none" 
                  stroke="rgba(0,0,0,0.1)" 
                  strokeWidth="1" 
                  strokeDasharray="4 2"
                />
              </svg>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2 font-serif italic" htmlFor="name">
                Name
                <svg className="inline-block ml-1 w-6 h-6">
                  <path d="M0,6 Q3,3 6,6" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-teal-500 font-mono"
                />
                {/* Sketchy input border */}
                <svg className="absolute pointer-events-none inset-0 w-full h-full -z-10">
                  <path 
                    d={generateSketchPath(100, 40, 2)} 
                    className="w-full h-full"
                    fill="none" 
                    stroke="#d1d5db" 
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2 font-serif italic" htmlFor="email">
                Email
                <svg className="inline-block ml-1 w-6 h-6">
                  <path d="M0,6 Q3,3 6,6" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-teal-500 font-mono"
                />
                {/* Sketchy input border */}
                <svg className="absolute pointer-events-none inset-0 w-full h-full -z-10">
                  <path 
                    d={generateSketchPath(100, 40, 2)} 
                    className="w-full h-full"
                    fill="none" 
                    stroke="#d1d5db" 
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2 font-serif italic" htmlFor="message">
                Message
                <svg className="inline-block ml-1 w-6 h-6">
                  <path d="M0,6 Q3,3 6,6" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-teal-500 font-mono"
                />
                {/* Sketchy textarea border */}
                <svg className="absolute pointer-events-none inset-0 w-full h-full -z-10">
                  <path 
                    d={generateSketchPath(100, 100, 2)} 
                    className="w-full h-full"
                    fill="none" 
                    stroke="#d1d5db" 
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="relative group inline-block"
              >
                <div className="absolute inset-0 bg-teal-400 transform rotate-1 rounded-full"></div>
                <div className="relative px-6 py-3 bg-teal-500 rounded-full font-mono font-bold text-white transform transition-all duration-200 group-hover:-translate-y-0.5">
                  <svg className="absolute inset-0 w-full h-full -z-10">
                    <path 
                      d={generateSketchPath(125, 40, 3)} 
                      fill="none" 
                      stroke="rgba(0,0,0,0.1)" 
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </div>
                </div>
              </button>
            </div>
            
            {/* Decorative corner elements */}
            <svg className="absolute top-3 right-3 w-8 h-8 text-gray-200">
              <path d="M1,1 L7,7" stroke="currentColor" strokeWidth="0.5" />
              <path d="M7,1 L1,7" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            
            <svg className="absolute bottom-3 left-3 w-8 h-8 text-gray-200">
              <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="mt-12 text-center text-gray-700 relative">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          {/* Email */}
          <div className="relative group">
            <a href="mailto:esaputra168@gmail.com" className="flex items-center font-mono hover:text-teal-600 transition-colors">
              <Mail size={18} className="mr-2" />
              <span className="font-semibold">esaputra168@gmail.com</span>
              <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M0,0 Q25%,1 50%,0 T100%,0" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" fill="none" />
              </svg>
            </a>
          </div>
          
          {/* GitHub */}
          <div className="relative group">
            <a href="https://github.com/egasa21" className="flex items-center font-mono hover:text-teal-600 transition-colors">
              <Github size={18} className="mr-2" />
              <span className="font-semibold">GitHub</span>
              <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M0,0 Q25%,1 50%,0 T100%,0" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" fill="none" />
              </svg>
            </a>
          </div>
          
          {/* LinkedIn */}
          <div className="relative group">
            <a href="https://www.linkedin.com/in/ega-saputra-83736a179/" className="flex items-center font-mono hover:text-teal-600 transition-colors">
              <Linkedin size={18} className="mr-2" />
              <span className="font-semibold">LinkedIn</span>
              <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M0,0 Q25%,1 50%,0 T100%,0" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" fill="none" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Decorative element */}
        <svg className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-16 text-gray-200">
          <path d="M0,8 Q16,0 32,8 T64,8 T96,8 T128,8" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      
      {/* Paper edge */}
      <svg className="absolute bottom-0 left-0 w-full h-8 overflow-visible">
        <path d="M0,0 Q25%,8 50%,2 T100%,5" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />  
      </svg>
    </section>
  );
};