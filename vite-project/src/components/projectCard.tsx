import React from "react";
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons"
import { useState, useEffect } from "react";

// Import Nemesis images
import telebrasil2 from "../assets/nemesis/telebrasil2.jpg";
import telebrasil3 from "../assets/nemesis/telebrasil3.jpg";
import telebrasil6 from "../assets/nemesis/telebrasil6.jpg";
import app1 from "../assets/nemesis/app1.png";
import app2 from "../assets/nemesis/app2.png";
import app3 from "../assets/nemesis/app3.png";
import app5 from "../assets/nemesis/app5.png";
import app7 from "../assets/nemesis/app7.png";
import fiscaliza1 from "../assets/fiscaliza/fiscaliza1.png"
import fiscaliza2 from "../assets/fiscaliza/fiscaliza2.png"
import fiscaliza3 from "../assets/fiscaliza/fiscaliza3.png"
import fiscaliza4 from "../assets/fiscaliza/fiscaliza4.png"
import fiscaliza5 from "../assets/fiscaliza/fiscaliza5.png"
import fiscaliza6 from "../assets/fiscaliza/fiscaliza6.png"

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    tech: string[];
    github: string;
    demo?: string;
    externalLinks?: Array<{
        url: string;
        label: string;
    }>;
}

const nemesisImages = [
  telebrasil3,
  telebrasil6,
  app1,
  app2,
  app3,
  app5,
  app7,
  telebrasil2,
];

const fiscalizaImages = [
    fiscaliza1,
    fiscaliza2,
    fiscaliza3,
    fiscaliza4,
    fiscaliza5,
    fiscaliza6,
]

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, github, demo, externalLinks }) => {
    const [current, setCurrent] = useState(0); // for photos
    useEffect(() => {
        if (title !== "Nemesis" && title !== "Fiscalizando") return;
        const images = title === "Nemesis" ? nemesisImages : fiscalizaImages;
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 10000); // 10 s
        return () => clearInterval(interval);
    }, [title]);
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col mb-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <div className="text-gray-700 mb-4">{description}</div>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((techItem) => (
                    <span
                        key={techItem}
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium"
                    >
                        {techItem}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex gap-4">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors duration-200"
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
                    GitHub <ExternalLink className="w-4 h-4" />
                </a>
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                        <ExternalLink size={18} />
                        Demo
                    </a>
                )}
                {externalLinks && externalLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-200"
                        title="Open project details in new tab"
                    >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                ))}
            </div>
            {(title === "Nemesis" || title === "Fiscalizando") && (() => {
                const images = title === "Nemesis" ? nemesisImages : fiscalizaImages;
                const altText = title === "Nemesis" ? "Nemesis" : "Fiscalizando";
                return (
                <>
                    <div className="relative w-[100%] h-[450px] mx-auto overflow-hidden rounded-2xl shadow-lg mt-4">
                        <img
                        src={images[current]}
                        alt={`${altText} screenshot ${current + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        />

                        {/* Área clicável direita */}
                        <div
                        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
                        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                        />
                        {/* Área clicável esquerda (opcional - para voltar) */}
                        <div
                        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
                        onClick={() =>
                            setCurrent((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                            )
                        }
                        />
                    </div>

                    {/* Indicadores */}
                    <div className="flex gap-2 justify-center mt-2">
                        {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === current ? "bg-gray-300" : "bg-gray-500"
                            }`}
                        />
                        ))}
                    </div>
                </>
                );
            })()}
        </div>
    );
};

export default ProjectCard;
