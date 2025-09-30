import React from 'react';
import { Mail } from "lucide-react";
import { siGithub } from "simple-icons"

const Footer: React.FC = () => (
    <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Contact Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
                <div className="flex justify-center gap-8 mb-6">
                    <a
                        href="mailto:paraizovinicius@gmail.com"
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" /> 
                        <span>Email</span>
                    </a>
                    <a
                        href="https://github.com/paraizovinicius"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
                    >
                        <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-200"
                        >
                        <title>{siGithub.title}</title>
                        <path d={siGithub.path} />
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/paraizovinicius"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
                    >
                        <span className="text-[#676FFF] text-[18px] font-bold w-5 h-6 fill-current group-hover:scale-110 transition-transform duration-200">in</span> 
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 pt-6 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Vinicius Paraizo. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
