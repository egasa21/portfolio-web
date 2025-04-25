import { Pencil } from 'lucide-react';
import React from 'react';

export const Hero = () => {
    const generateSketchPath = (width, height, roughness = 2) => {
        // Simple sketch effect for rectangles
        const variance = roughness;
        const topLine = `M0,0 Q${width / 4},${0 - Math.random() * variance} ${width / 2},${0 + Math.random() * variance} T${width},0`;
        const rightLine = `M${width},0 Q${width + Math.random() * variance},${height / 4} ${width - Math.random() * variance},${height / 2} T${width},${height}`;
        const bottomLine = `M${width},${height} Q${3 * width / 4},${height + Math.random() * variance} ${width / 2},${height - Math.random() * variance} T0,${height}`;
        const leftLine = `M0,${height} Q${0 - Math.random() * variance},${3 * height / 4} ${0 + Math.random() * variance},${height / 2} T0,0`;

        return `${topLine} ${rightLine} ${bottomLine} ${leftLine}`;
    };

    return (
        <div className="relative mx-auto max-w-2xl px-6 py-20 sm:py-32 lg:py-56 overflow-hidden">
            {/* Background sketch elements */}
            <div className="absolute inset-0 -z-10">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <pattern id="sketch-bg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20 L40 20" stroke="#e5e7eb" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                            <path d="M20 0 L20 40" stroke="#e5e7eb" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#sketch-bg)" />
                </svg>
            </div>

            {/* Announcement banner with hand-drawn look */}
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-gray-700">
                    {/* SVG hand-drawn border */}
                    <svg className="absolute inset-0 w-full h-full -z-10">
                        <path
                            d={generateSketchPath(380, 34)}
                            fill="none"
                            stroke="#9ca3af"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="font-mono tracking-tight">
                        Specializing in full-stack development from backend to mobile.{' '}
                        <a href="#projects" className="font-semibold text-teal-600 relative inline-block">
                            <span className="absolute -bottom-0.5 left-0 right-0 h-0.5">
                                <svg width="100%" height="2">
                                    <path d="M0,1 Q25%,0 50%,1 T100%,1" stroke="#0d9488" strokeWidth="1.5" fill="none" />
                                </svg>
                            </span>
                            Explore my work <span aria-hidden="true" className="ml-1">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main heading and description with sketchy styles */}
            <div className="text-center">
                <h1 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-2">
                    <div className="relative">
                        <span className="relative z-10 font-serif italic">Transforming ideas into</span>
                        <svg className="absolute bottom-1 left-0 w-full h-2 -z-10">
                            <path d="M0,1 Q25%,2 50%,0 T100%,1" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="relative mt-2">
                        <span className="relative z-10 font-serif italic">seamless digital experiences</span>
                        <svg className="absolute bottom-1 left-0 w-full h-2 -z-10">
                            <path d="M0,1 Q25%,0 50%,2 T100%,1" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </h1>

                <div className="mt-8 relative">
                    <p className="text-lg leading-8 text-gray-600 font-mono">
                        As a software engineer proficient in backend systems,<br />frontend interfaces, and mobile app development,<br />
                        I create innovative solutions that drive success.<br />Let's collaborate to bring your vision to life.
                    </p>

                    {/* Decorative pen strokes */}
                    <svg className="absolute -right-6 -bottom-8 w-16 h-16 text-gray-300">
                        <path d="M2,14 Q7,8 14,12 T24,6" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M4,22 Q12,15 18,20 T30,12" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                {/* Call to action buttons with hand-drawn style */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="#contact"
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-300 transform rotate-1 rounded-lg"></div>
                        <div className="relative px-5 py-3 bg-gradient-to-r from-teal-400 to-teal-300 rounded-lg font-mono font-bold text-white transform transition-all duration-200 group-hover:-translate-y-0.5">
                            <svg className="absolute inset-0 w-full h-full -z-10">
                                <path
                                    d={generateSketchPath(140, 40, 3)}
                                    fill="none"
                                    stroke="rgba(0,0,0,0.1)"
                                    strokeWidth="1"
                                />
                            </svg>
                            <div className="flex items-center">
                                <Pencil size={16} className="mr-2" />
                                Start a Project
                            </div>
                        </div>
                    </a>

                    <a href="#projects" className="group relative font-mono font-semibold text-gray-900">
                        View My Portfolio
                        <span className="ml-1 inline-block transform transition-transform group-hover:translate-x-1">→</span>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5">
                            <svg width="100%" height="2">
                                <path d="M0,1 Q25%,0 50%,2 T100%,1" stroke="#111827" strokeWidth="1" fill="none" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Decorative sketch elements */}
            <svg className="absolute top-10 left-2 w-16 h-16 text-gray-200 -z-10">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M2,20 Q10,10 20,18" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>

            <svg className="absolute bottom-16 right-6 w-20 h-20 text-gray-200 -z-10">
                <path d="M2,2 L18,18" stroke="currentColor" strokeWidth="1" />
                <path d="M18,2 L2,18" stroke="currentColor" strokeWidth="1" />
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
        </div>
    );
}