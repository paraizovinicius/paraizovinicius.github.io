import React from "react";
import eu from "../assets/eu.png";
import { Mail, ExternalLink } from "lucide-react";
import tese from "../assets/TCC_2024_ViniciusParaizo.pdf"
import cv from "../assets/CV - Vinicius Paraizo.pdf"

// TODO: idiomas diferentes

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mx-auto">
      {/* Hero Section */}
    <section className="flex flex-col items-center justify-center mt-10 md:mt-0 py-8 px-6 text-center bg-gradient-to-r from-gray-100 to-blue-100">
      <div>
        <img src={eu} alt="EU" className="w-40 h-auto rounded-full" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Vinicius Paraizo</h1>
      <div className="text-lg text-gray-700 max-w-xl mt-4">
        <span className="text-xl font-bold">Hello there !</span> I am a Computer Sciences student who will graduate at the end of 2025. Most recently, in 2024, I did a Master's exchange program at Aix-Marseille University. 
        My final project thesis is entitled <em>"Audit of Government Spending: An approach using Natural Language Processing"</em>. 
        You can find the manuscript{" "}
        <a
          href={tese}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          here
        </a>.
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 items-center">
        {/* Email - Full width on mobile, first item on desktop */}
        <div className="flex items-center justify-center gap-1 w-full md:w-auto">
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-gray-700">paraizovinicius@gmail.com</span>
        </div>

        {/* LinkedIn and CV - Side by side on mobile, continue row on desktop */}
        <div className="flex flex-row gap-4 md:gap-8 justify-center">
            <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/paraizovinicius/"
              className="underline text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span className="text-[#676FFF] text-[18px] font-bold w-5 h-6 fill-current group-hover:scale-110 transition-transform duration-200">
              in
              </span>
              LinkedIn
            </a>
            </div>

          <div className="flex items-center gap-1">
            <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
            >
            CV<span className="text-[10px]">[pdf]</span>
            </a>.
          </div>
        </div>
      </div>
      
    </section>

    {/* Trajectory */}
    <section className="bg-white py-8 px-6 mx-auto md:max-w-[70%]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          My Journey in Computer Science
        </h2>

        <div className="space-y-6">

          {/* CEFET */}
          <div className="p-4 border-l-4 border-orange-500 bg-orange-50 shadow-sm rounded-md">
            <h3 className="font-bold">2019 – 2025 · Computer Science BSc @ CEFET</h3>
            <p className="text-gray-600">
              Built strong foundations in algorithms, data structures, and software engineering.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
              <li>Served as a teaching assistant (monitor) for Data Structures & Algorithms (C++).</li>
            </ul>
          </div>

          {/* AIX-MARSEILLE */}
          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 shadow-sm rounded-md">
            <h3 className="font-bold">2023 – 2024 · Master (Exchange) @ Aix-Marseille University</h3>
            <p className="text-gray-600">
              Deepened my skills in Data Science, AI, and applied research while living in France.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
              <li>Paid Research internship at LIS-LAB (TALEP), supervised by Prof. <a href="https://pageperso.lis-lab.fr/benoit.favre/" className="underline text-blue-600 hover:text-blue-800">Benoît Favre</a>, working on HuBERT-based speech recognition and feature extraction.</li>
              <li>6-month paid internship at Euranova, developing a sustainable AI methodology and applying it to a LangChain RAG project to optimize resource efficiency.</li>
              <li>Worked part-time as a student assistant supporting peers with special needs.</li>
            </ul>
          </div>

          {/* Final Year Project */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 shadow-sm rounded-md">
            <h3 className="font-bold">2024 – 2025 · Bachelor’s Final Project</h3>
            <p className="text-gray-600">
              Applied Deep Embedded Clustering (DEC) and Natural Language Processing (NLP) to group and analyze Brazilian government expenditure data, supervised by Prof. <a href="https://eic.cefet-rj.br/~ebezerra/" className="underline text-blue-600 hover:text-blue-800">Eduardo Bezerra</a>.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <p className="text-gray-600 mt-2 text-left">
              <strong>Result:</strong> Earned highest honors for successfully tackling complex, real-world expenditure data and demonstrating the algorithm’s strong performance.
            </p>
          </div>

          {/* Project Nemesis */}
          
            <div className="p-4 border-l-4 border-red-500 bg-red-50 shadow-sm rounded-md">
              <div className="flex items-center gap-2 mx-auto justify-center">
                <h3 className="font-bold">Project <i>Nemesis</i></h3>
                <div className="flex gap-4">
                <a 
                  href="https://www.correiobraziliense.com.br/euestudante/educacao-profissional/2025/09/7240957-projetos-focados-em-inovacao-e-tecnologia-sao-premiados-em-brasilia.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[10px] gap-1 text-red-600 hover:text-red-800 transition-colors duration-200"
                  title="Open project details in new tab"
                >
                  (correio braziliense)
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://oglobo.globo.com/google/amp/rio/bairros/tijuca-e-zona-norte/noticia/2025/09/29/com-software-que-promete-revolucionar-fiscalizacao-do-tce-alunos-e-professores-do-cefet-ganham-premio-nacional.ghtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[10px] gap-1 text-red-600 hover:text-red-800 transition-colors duration-200"
                  title="Open project details in new tab"
                >
                  (oglobo)
                  <ExternalLink className="w-4 h-4" />
                </a>
                </div>
              </div>
            
            
            <p className="text-gray-600">
              Developed a web-based auditing platform for the government of Rio de Janeiro.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
              <li>Grouping government expenditures embeddings based on their similarity score to detect suspicious spending patterns.</li>
              <li>Won the national INOVA contest (Telebrasil) for innovative technological solutions.</li>
            </ul>
            </div>

          {/* Current Research */}
          <div className="p-4 border-l-4 border-green-500 bg-green-50 shadow-sm rounded-md">
            <h3 className="font-bold">2025 – Present · Research Paper in Progress</h3>
            <p className="text-gray-600">
              Leading a comparative study of clustering algorithms (SDEC, DEC, K-Means, Spectral Clustering) applied to genetic data for cancer prediction. Building ablation pipelines with PCA and scalers to evaluate reproducibility and performance.
            </p>
          </div>

        </div>
      </div>
    </section>



    </div>
  );
};

export default LandingPage;
