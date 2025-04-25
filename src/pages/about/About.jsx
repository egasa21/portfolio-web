import React from 'react';
import { Pencil, Server, Code, Smartphone, GraduationCap } from 'lucide-react';

export default function About() {
    const generateSketchPath = (width, height, roughness = 2) => {
        const variance = roughness;
        const topLine = `M0,0 Q${width / 4},${0 - Math.random() * variance} ${width / 2},${0 + Math.random() * variance} T${width},0`;
        const rightLine = `M${width},0 Q${width + Math.random() * variance},${height / 4} ${width - Math.random() * variance},${height / 2} T${width},${height}`;
        const bottomLine = `M${width},${height} Q${3 * width / 4},${height + Math.random() * variance} ${width / 2},${height - Math.random() * variance} T0,${height}`;
        const leftLine = `M0,${height} Q${0 - Math.random() * variance},${3 * height / 4} ${0 + Math.random() * variance},${height / 2} T0,0`;

        return `${topLine} ${rightLine} ${bottomLine} ${leftLine}`;
    };

    // Skill cards data
    const skillCards = [
        {
            title: "Backend Development",
            icon: <Server className="stroke-2" />,
            description: "Experienced in designing scalable server-side systems using Go, Laravel, Node.js, Python, PostgreSQL, MongoDB, and implementing RESTful APIs.",
            color: "from-blue-200 to-teal-100",
            hoverColor: "text-teal-600"
        },
        {
            title: "Frontend Development",
            icon: <Code className="stroke-2" />,
            description: "Crafting interactive, responsive, and high-performance user interfaces using React.js and ensuring great UX across devices.",
            color: "from-gray-200 to-gray-100",
            hoverColor: "text-gray-600"
        },
        {
            title: "Mobile Development",
            icon: <Smartphone className="stroke-2" />,
            description: "Developing cross-platform mobile applications using Flutter and native Kotlin. Focused on delivering high performance, scalability, and a seamless user experience on both iOS and Android platforms.",
            color: "from-teal-200 to-teal-100",
            hoverColor: "text-teal-600"
        },
        {
            title: "Continuous Learning",
            icon: <GraduationCap className="stroke-2" />,
            description: "Committed to ongoing professional growth, including exploring machine learning, cloud computing, microservices architecture, and DevOps. Always eager to integrate new technologies and methodologies to stay at the forefront of the tech industry.",
            color: "from-blue-200 to-blue-100",
            hoverColor: "text-blue-600"
        }
    ];

    return (
        <section id="about" className="mx-auto max-w-7xl p-6 lg:px-8 relative">
            {/* Background patterns */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <svg width="100%" height="100%" className="absolute opacity-5">
                    <defs>
                        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#888" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />

                    {/* Sketchy lines */}
                    <path d="M20,50 Q70,30 150,70 T350,40" stroke="#888" strokeWidth="0.5" fill="none" />
                    <path d="M400,100 Q500,150 600,80 T750,120" stroke="#888" strokeWidth="0.5" fill="none" />
                    <path d="M100,400 Q200,380 300,420 T500,390" stroke="#888" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            {/* Section header */}
            <div className="text-center relative">
                <h2 className="inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif italic">
                    About Me
                    <svg className="absolute -bottom-2 left-0 w-full h-3 -z-10">
                        <path d="M0,2 Q25%,0 50%,3 T100%,1" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </h2>

                <div className="relative mt-8 max-w-2xl mx-auto">
                    <p className="text-lg leading-8 text-gray-600 font-mono">
                        I'm a passionate software engineer with a focus on delivering end-to-end solutions,
                        combining backend, frontend, and mobile development expertise.
                        I love turning ideas into reality through innovative and efficient code.
                    </p>

                    {/* Decorative element */}
                    <svg className="absolute -right-8 -bottom-6 w-16 h-16 text-gray-200 -z-10">
                        <path d="M2,8 Q8,2 14,10 T24,2" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M4,16 Q14,10 20,18" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Skills Cards Grid */}
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
                {skillCards.map((card, index) => (
                    <div key={index} className="relative group">
                        {/* Card shadow/backdrop - sketchy style */}
                        <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg bg-gray-100"></div>

                        {/* Main card */}
                        <div className="relative flex flex-col items-center p-8 rounded-lg bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors duration-300">
                            {/* Sketchy border */}
                            <svg className="absolute inset-0 w-full h-full">
                                <path
                                    d={generateSketchPath(100, 100, 4)}
                                    className="w-full h-full"
                                    fill="none"
                                    stroke="rgba(0,0,0,0.1)"
                                    strokeWidth="1"
                                    strokeLinejoin="round"
                                    strokeDasharray="1 3"
                                />
                            </svg>

                            {/* Card content */}
                            <div className="w-16 h-16 mb-4 flex items-center justify-center text-3xl text-gray-800 group-hover:text-teal-600 transition-colors duration-300 relative">
                                {card.icon}
                                {/* Sketchy circle around icon */}
                                <svg className="absolute inset-0 w-full h-full">
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="30"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeDasharray="4 2"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-xl font-serif italic font-semibold text-gray-800 group-hover:text-teal-600 mb-2 relative inline-block">
                                {card.title}
                                <svg className="absolute -bottom-1 left-0 w-full h-2">
                                    <path d="M0,1 Q25%,0 50%,1 T100%,1" stroke="currentColor" strokeWidth="1" fill="none" />
                                </svg>
                            </h3>

                            <p className="mt-4 text-base text-gray-700 text-center group-hover:text-gray-600 font-mono leading-relaxed">
                                {card.description}
                            </p>

                            {/* Doodles in corners */}
                            <svg className="absolute top-2 left-2 w-8 h-8 text-gray-200">
                                <path d="M1,1 L7,7" stroke="currentColor" strokeWidth="0.5" />
                                <path d="M7,1 L1,7" stroke="currentColor" strokeWidth="0.5" />
                            </svg>

                            <svg className="absolute bottom-2 right-2 w-8 h-8 text-gray-200">
                                <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
                <a
                    href="#contact"
                    className="relative group inline-block"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-300 transform rotate-1 rounded-lg"></div>
                    <div className="relative px-5 py-3 bg-gradient-to-r from-teal-400 to-teal-300 rounded-lg font-mono font-bold text-white transform transition-all duration-200 group-hover:-translate-y-0.5">
                        <svg className="absolute inset-0 w-full h-full -z-10">
                            <path
                                d={generateSketchPath(120, 40, 3)}
                                fill="none"
                                stroke="rgba(0,0,0,0.1)"
                                strokeWidth="1"
                            />
                        </svg>
                        <div className="flex items-center">
                            <Pencil size={16} className="mr-2" />
                            Get in Touch
                        </div>
                    </div>
                </a>
            </div>

            {/* Paper edge */}
            <svg className="absolute bottom-0 left-0 w-full h-8 overflow-visible">
                <path d="M0,0 Q25%,8 50%,2 T100%,5" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
            </svg>
        </section>
    );
}