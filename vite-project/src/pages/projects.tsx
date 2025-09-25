import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "AI-Powered Crane Simulator",
        description:
            "A web-based simulator using fuzzy logic to control crane movements. Built with React and Flask, featuring real-time feedback and interactive controls.",
        tech: ["React", "Flask", "Fuzzy Logic", "Python"],
        github: "https://github.com/paraizovinicius/crane-simulator",
        demo: "https://crane-simulator-demo.com",
    },
    {
        title: "Audio Feature Extractor",
        description:
            "A tool for extracting features from audio files using HuBERT and semi-supervised learning. Includes visualization and export options.",
        tech: ["Python", "HuBERT", "Machine Learning", "Streamlit"],
        github: "https://github.com/paraizovinicius/audio-feature-extractor",
        demo: "https://audio-feature-extractor-demo.com",
    },
];

const Projects: React.FC = () => {
    return (

        <div className="min-h-screen max-w-3xl mx-auto bg-gray-50 text-gray-800 py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2"></div>
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-600 hover:text-black"
                            >
                                <Github size={18} />
                                GitHub
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-600 hover:text-black"
                            >
                                <ExternalLink size={18} />
                                Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
    
    );
};

export default Projects;
