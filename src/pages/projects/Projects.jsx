import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectsData } from '../../data/projectsData'

export const Projects = () => {

    const projects = projectsData;

    return (
        <section id="projects" className="mx-auto max-w-7xl py-20 p-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on, showcasing my skills in backend, frontend, and mobile development.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-start p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-teal-100 backdrop-blur-md bg-opacity-40 border border-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                        <p className="text-base text-gray-700 mb-4">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center space-x-4">
                            <a
                                href={project.link}
                                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt className="mr-2" /> View Project
                            </a>
                            <a
                                href={project.github}
                                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="mr-2" /> GitHub Repo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
