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

          {/* 2019 */}
          <div className="p-4 border-l-4 border-orange-500 bg-orange-50 shadow-sm rounded-md">
            <h3 className="font-bold">2019 – Started Computer Science BSc</h3>
            <p className="text-gray-600">
              Enrolled at CEFET, where I built strong foundations in algorithms, data
              structures, and software engineering. Participated in competitive
              programming and earned 1st place at INOVA (Telebrasil) for innovative
              tech solutions.
            </p>
          </div>

          {/* 2022 */}
          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 shadow-sm rounded-md">
            <h3 className="font-bold">2022 – Procurement Systems Analyst @ VTEX</h3>
            <p className="text-gray-600">
              Maintained and improved procurement systems, automated internal
              processes with Python (Selenium + OpenPyXL), and collaborated closely
              with stakeholders to streamline operations.
            </p>
          </div>

          {/* 2024 – Research */}
          <div className="p-4 border-l-4 border-purple-500 bg-purple-50 shadow-sm rounded-md">
            <h3 className="font-bold">2024 – International Research & Applied AI</h3>
            <p className="text-gray-600">
              Conducted research in France at TALEP using HuBERT for speech
              recognition and feature extraction. Later, at Euranova, developed a
              methodology to improve AI lifecycle efficiency and applied it to a
              LangChain RAG project to reduce computational footprint.
            </p>
          </div>

          {/* 2025 – Professional Work + Academic Milestones */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 shadow-sm rounded-md">
            <h3 className="font-bold">2025 – Web Developer & Final Year Projects</h3>
            <p className="text-gray-600">
              Joined Anouk Partners, working on an integrated project with a Next.js
              frontend and Java Spring backend. Contributed to database integrations
              and frontend optimization in an agile team. Completed my Bachelor’s
              final project applying Deep Embedded Clustering (DEC) to detect
              anomalies in government expenditure data (graded with maximum score).
            </p>
          </div>

          {/* Current work */}
          <div className="p-4 border-l-4 border-green-500 bg-green-50 shadow-sm rounded-md">
            <h3 className="font-bold">Now – Research Paper in Progress</h3>
            <p className="text-gray-600">
              Working on a comparative study of clustering algorithms (SDEC, DEC,
              K-Means, Spectral Clustering) applied to genetic data for cancer
              prediction. Building ablation pipelines with PCA and data scaling to
              evaluate performance and reproducibility.
            </p>
          </div>

        </div>
      </div>
    </section>


    </div>
  );
};

export default LandingPage;
