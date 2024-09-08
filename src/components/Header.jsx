import React, { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';

import eggLogo from '../assets/egg-dev-icon.svg';

export const Header = ({ scrollToSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuClick = (section) => {
        scrollToSection(section);
        setMobileMenuOpen(false); // Close the mobile menu after clicking an item
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <button onClick={() => scrollToSection('hero')} className="-m-1.5 p-1.5">
                        <span className="sr-only">Egg Dev</span>
                        <img alt="" src={eggLogo} className="h-8 w-auto" />
                    </button>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6 text-black" />
                    </button>
                </div>
                <PopoverGroup className="mx-auto hidden lg:flex lg:gap-x-12">
                    <button onClick={() => scrollToSection('hero')} className="text-base font-normal leading-6 text-black">
                        Home
                    </button>
                    <button onClick={() => scrollToSection('about')} className="text-base font-normal leading-6 text-black">
                        About
                    </button>
                    <button onClick={() => scrollToSection('projects')} className="text-base font-normal leading-6 text-black">
                        Projects
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="text-base font-normal leading-6 text-black">
                        Contact
                    </button>
                </PopoverGroup>
            </nav>
            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <div className="flex items-center justify-between">
                        <button href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={eggLogo} className="h-8 w-auto" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <button
                                    onClick={() => handleMenuClick('hero')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => handleMenuClick('about')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => handleMenuClick('projects')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => handleMenuClick('contact')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};
