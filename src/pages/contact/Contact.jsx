import React from 'react';

export const Contact = () => {
    return (
        <section id="contact" className="mx-auto max-w-7xl py-20 p-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    If you're interested in working together, feel free to drop me a message. I'm open to freelance projects, collaborations, or even just a friendly hello!
                </p>
            </div>

            {/* Contact Form */}
            <div className="mt-12 flex justify-center">
                <form
                    action="https://formspree.io/f/YOUR_FORM_ID" 
                    method="POST"
                    className="w-full max-w-2xl p-8 rounded-lg shadow-xl bg-gradient-to-br from-teal-400 to-teal-300 backdrop-blur-lg bg-opacity-50 border border-white/20"
                >
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-white/10 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-white/10 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 bg-white/10 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block rounded-full bg-teal-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-400 transition-transform"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Details */}
            <div className="mt-12 text-center text-gray-700">
                <p className="text-lg">Or reach out via email: <a href="mailto:youremail@example.com" className="font-semibold hover:text-teal-600 transition-colors">egg@example.com</a></p>
                <p className="mt-4 text-lg">Find me on: 
                    <a href="https://github.com/egasa21" className="ml-4 font-semibold hover:text-teal-600 transition-colors">GitHub</a> | 
                    <a href="https://www.linkedin.com/in/ega-saputra-83736a179/" className="ml-4 font-semibold hover:text-teal-600 transition-colors">LinkedIn</a>
                </p>
            </div>
        </section>
    );
};
