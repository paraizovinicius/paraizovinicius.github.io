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

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    tech: string[];
    github: string;
    demo?: string;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, github, demo }) => {
    const [current, setCurrent] = useState(0); // for photos
    useEffect(() => {
        if (title !== "Nemesis") return;
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % nemesisImages.length);
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
            </div>
            {title === "Nemesis" && (
                <>
                    <div className="relative w-[100%] h-[400px] mx-auto overflow-hidden rounded-2xl shadow-lg mt-4">
                        <img
                        src={nemesisImages[current]}
                        alt={`Nemesis screenshot ${current + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        />

                        {/* Área clicável direita */}
                        <div
                        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
                        onClick={() => setCurrent((prev) => (prev + 1) % nemesisImages.length)}
                        />
                        {/* Área clicável esquerda (opcional - para voltar) */}
                        <div
                        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
                        onClick={() =>
                            setCurrent((prev) =>
                            prev === 0 ? nemesisImages.length - 1 : prev - 1
                            )
                        }
                        />
                    </div>

                    {/* Indicadores */}
                    <div className="flex gap-2 justify-center mt-2">
                        {nemesisImages.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === current ? "bg-gray-200" : "bg-gray-400"
                            }`}
                        />
                        ))}
                    </div>
                    </>
            )}
        </div>
    );
};

export default ProjectCard;
