import React from "react";
import eu from "../assets/eu.png";
import { Mail } from "lucide-react";


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
        My final project thesis is entitled "Fiscalização de Compras Públicas: Uma Abordagem com Processamento de Linguagem Natural". You can find that manuscript <a href="#" className="underline text-blue-600 hover:text-blue-800">here</a>.
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        <span className="text-gray-700">paraizovinicius@gmail.com</span>
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
              <li>Participated in competitive programming contests, winning 1st place at INOVA (Telebrasil).</li>
            </ul>
          </div>

          {/* AIX-MARSEILLE */}
          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 shadow-sm rounded-md">
            <h3 className="font-bold">2023 – 2024 · Master 1 (Exchange) @ Aix-Marseille University</h3>
            <p className="text-gray-600">
              Deepened my skills in Data Science, AI, and applied research while living in France.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
              <li>Research internship at LIS-LAB (TALEP), supervised by Benoît Favre, working on HuBERT-based speech recognition and feature extraction.</li>
              <li>6-month internship at Euranova, developing a sustainable AI methodology and applying it to a LangChain RAG project to optimize resource efficiency.</li>
              <li>Worked part-time as a student assistant supporting peers with special needs.</li>
            </ul>
          </div>

          {/* Final Year Project */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 shadow-sm rounded-md">
            <h3 className="font-bold">2024 – 2025 · Bachelor’s Final Project</h3>
            <p className="text-gray-600">
              Applied Deep Embedded Clustering (DEC) and Natural Language Processing (NLP) to group and analyze Brazilian government expenditure data.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <p className="text-gray-600 mt-2 text-left">
              <strong>Result:</strong> Project graded with highest honors for its innovative approach to anomaly detection and data auditing.
            </p>
          </div>

          {/* Project Nemesis */}
            <div className="p-4 border-l-4 border-red-500 bg-red-50 shadow-sm rounded-md">
            <h3 className="font-bold">Project <i>Nemesis</i></h3>
            <p className="text-gray-600">
              Developed a web-based auditing platform for the government of Rio de Janeiro.
            </p>
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
              <li>Implemented NLP-driven embedding and clustering to detect suspicious spending patterns.</li>
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
