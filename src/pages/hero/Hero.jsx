import React from 'react';

export const Hero = () => {
    return (
        <div className="mx-auto max-w-2xl px-6 py-20 sm:py-32 lg:py-56">
            {/* Announcement or personal tagline */}
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-gray-300 hover:ring-gray-500">
                    Specializing in full-stack development from backend to mobile.{' '}
                    <a href="#projects" className="font-semibold text-teal-600">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Explore my work <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            {/* Main heading and description */}
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Transforming ideas into seamless digital experiences
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    As a software engineer proficient in backend systems, frontend interfaces, and mobile app development, I create 
                    innovative solutions that drive success. Let's collaborate to bring your vision to life.
                </p>
                {/* Call to action buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#contact"
                        className="rounded-md bg-gradient-to-r from-teal-400 to-teal-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-teal-500 hover:to-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                        Start a Project
                    </a>
                    <a href="#projects" className="text-sm font-semibold leading-6 text-gray-900">
                        View My Portfolio <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
