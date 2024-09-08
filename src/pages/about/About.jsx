import React from 'react';
import { FaServer, FaCode, FaMobileAlt, FaGraduationCap } from 'react-icons/fa';

export const About = () => {
    return (
        <section id="about" className="mx-auto max-w-7xl items-center p-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    I'm a passionate software engineer with a focus on delivering end-to-end solutions, combining backend, frontend, and mobile development expertise. I love turning ideas into reality through innovative and efficient code.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
                {/* Backend Development Card */}
                <div className="relative flex flex-col items-center p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-200 to-teal-100 backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 hover:scale-105 hover:shadow-xl transition-transform duration-300 group">
                    <FaServer className="text-gray-800 text-4xl mb-4 group-hover:text-teal-600 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600">Backend Development</h3>
                    <p className="mt-4 text-base text-gray-700 text-center group-hover:text-gray-600">
                        Experienced in designing scalable server-side systems using Go, Laravel, Node.js, Python, PostgreSQL, MongoDB, and implementing RESTful APIs.
                    </p>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100 to-teal-100 backdrop-blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

                {/* Frontend Development Card */}
                <div className="relative flex flex-col items-center p-8 rounded-lg shadow-lg bg-gradient-to-br from-gray-200 to-gray-100 backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 hover:scale-105 hover:shadow-xl transition-transform duration-300 group">
                    <FaCode className="text-gray-800 text-4xl mb-4 group-hover:text-gray-600 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">Frontend Development</h3>
                    <p className="mt-4 text-base text-gray-700 text-center group-hover:text-gray-600">
                        Crafting interactive, responsive, and high-performance user interfaces using React.js and ensuring great UX across devices.
                    </p>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

                {/* Mobile Development Card */}
                <div className="relative flex flex-col items-center p-8 rounded-lg shadow-lg bg-gradient-to-br from-teal-200 to-teal-100 backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 hover:scale-105 hover:shadow-xl transition-transform duration-300 group">
                    <FaMobileAlt className="text-gray-800 text-4xl mb-4 group-hover:text-teal-600 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600">Mobile Development</h3>
                    <p className="mt-4 text-base text-gray-700 text-center group-hover:text-gray-600">
                        Developing cross-platform mobile applications using Flutter and native Kotlin. Focused on delivering high performance, scalability, and a seamless user experience on both iOS and Android platforms.
                    </p>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>


                {/* Continuous Learning Card */}
                <div className="relative flex flex-col items-center p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-200 to-blue-100 backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 hover:scale-105 hover:shadow-xl transition-transform duration-300 group">
                    <FaGraduationCap className="text-gray-800 text-4xl mb-4 group-hover:text-blue-600 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">Continuous Learning</h3>
                    <p className="mt-4 text-base text-gray-700 text-center group-hover:text-gray-600">
                        Committed to ongoing professional growth, including exploring machine learning, cloud computing, microservices architecture, and DevOps. Always eager to integrate new technologies and methodologies to stay at the forefront of the tech industry.
                    </p>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
                <a
                    href="#contact"
                    className="rounded-md bg-gradient-to-r from-teal-400 to-teal-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-teal-500 hover:to-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
};
