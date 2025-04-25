import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Pencil } from 'lucide-react';
import eggLogo from '../assets/egg-dev-icon.svg';

export const Header = ({ scrollToSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuClick = (section) => {
        scrollToSection(section);
        setMobileMenuOpen(false);
    };

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
        <header className="bg-white shadow-sm sticky top-0 z-50 relative">
            {/* Sketchy background */}
            <div className="absolute inset-0 -z-10">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <pattern id="header-sketch-bg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20 L40 20" stroke="#e5e7eb" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                            <path d="M20 0 L20 40" stroke="#e5e7eb" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#header-sketch-bg)" />
                    <path
                        d={generateSketchPath('100%', 80, 4)}
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <button onClick={() => scrollToSection('hero')} className="-m-1.5 p-1.5 relative group">
                        <span className="sr-only">Egg Dev</span>
                        <div className="absolute inset-0 -m-1 rounded-full">
                            <svg width="100%" height="100%" className="absolute inset-0">
                                <path
                                    d={generateSketchPath(40, 40, 2)}
                                    fill="none"
                                    stroke="#9ca3af"
                                    strokeWidth="1"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-teal-500 transition-colors"
                                />
                            </svg>
                        </div>
                        <img alt="" src={eggLogo} className="h-8 w-auto relative z-10" />
                    </button>
                </div>
                
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 relative"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="relative">
                            <Pencil size={24} className="text-gray-700" />
                            <svg className="absolute inset-0 w-full h-full -z-10">
                                <path
                                    d={generateSketchPath(24, 24, 1)}
                                    fill="none"
                                    stroke="#9ca3af"
                                    strokeWidth="1"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
                
                <PopoverGroup className="mx-auto hidden lg:flex lg:gap-x-12">
                    {['hero', 'about', 'projects', 'contact'].map((section, index) => (
                        <button 
                            key={section}
                            onClick={() => scrollToSection(section)} 
                            className="font-mono text-base font-normal leading-6 text-gray-900 relative group"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg width="100%" height="2">
                                    <path 
                                        d={`M0,1 Q25%,${index % 2 ? 0 : 2} 50%,${index % 2 ? 2 : 0} T100%,1`} 
                                        stroke="#0d9488" 
                                        strokeWidth="1.5" 
                                        fill="none" 
                                    />
                                </svg>
                            </span>
                        </button>
                    ))}
                </PopoverGroup>
            </nav>
            
            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
                >
                    <div className="absolute inset-0 -z-10">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="mobile-sketch-bg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M0 20 L40 20" stroke="#e5e7eb" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                                    <path d="M20 0 L20 40" stroke="#e5e7eb" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#mobile-sketch-bg)" />
                            <path
                                d={generateSketchPath('100%', '100%', 8)}
                                fill="none"
                                stroke="#d1d5db"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between relative z-10">
                        <button onClick={() => scrollToSection('hero')} className="-m-1.5 p-1.5 relative">
                            <span className="sr-only">Egg Dev</span>
                            <div className="absolute inset-0 -m-1 rounded-full">
                                <svg width="100%" height="100%">
                                    <path
                                        d={generateSketchPath(40, 40, 2)}
                                        fill="none"
                                        stroke="#9ca3af"
                                        strokeWidth="1"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <img alt="" src={eggLogo} className="h-8 w-auto relative z-10" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 relative"
                        >
                            <span className="sr-only">Close menu</span>
                            <div className="relative">
                                <XMarkIcon className="h-6 w-6" />
                                <svg className="absolute inset-0 w-full h-full -z-10">
                                    <path
                                        d={generateSketchPath(24, 24, 1)}
                                        fill="none"
                                        stroke="#9ca3af"
                                        strokeWidth="1"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                    
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {['hero', 'about', 'projects', 'contact'].map((section, index) => (
                                    <button
                                        key={section}
                                        onClick={() => handleMenuClick(section)}
                                        className="relative w-full group"
                                    >
                                        <div className="relative -mx-3 px-3 py-2">
                                            <svg className="absolute inset-0 w-full h-full -z-10">
                                                <path
                                                    d={generateSketchPath('100%', 40, index % 2 ? 3 : 2)}
                                                    fill="none"
                                                    stroke="rgba(0,0,0,0.05)"
                                                    strokeWidth="1"
                                                    className="group-hover:stroke-teal-100 transition-colors"
                                                />
                                            </svg>
                                            <span className="block font-mono text-base font-semibold leading-7 text-gray-900">
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </span>
                                            <span className="absolute bottom-1 left-3 right-3 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <svg width="100%" height="2">
                                                    <path 
                                                        d={`M0,1 Q25%,${index % 2 ? 0 : 2} 50%,${index % 2 ? 2 : 0} T100%,1`} 
                                                        stroke="#0d9488" 
                                                        strokeWidth="1" 
                                                        fill="none" 
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
            
            {/* Decorative sketch elements */}
            <svg className="absolute top-2 left-2 w-12 h-12 text-gray-200 -z-10">
                <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M1,12 Q6,8 12,11" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
            
            <svg className="absolute bottom-2 right-6 w-12 h-12 text-gray-200 -z-10">
                <path d="M1,1 L10,10" stroke="currentColor" strokeWidth="0.5" />
                <path d="M10,1 L1,10" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
        </header>
    );
};