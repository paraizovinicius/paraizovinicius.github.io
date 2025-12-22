import React from "react";
import eu from "../assets/eu.png";
import { Mail } from "lucide-react";
import tese from "../assets/TCC_2024_ViniciusParaizo.pdf"
import cv from "../assets/CV - Vinicius Paraizo.pdf"
import { useLanguage } from "../contexts/LanguageContext";


const LandingPage: React.FC = () => {
  const { language, t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mx-auto">
      {/* Hero Section */}
    <section className="flex flex-col items-center justify-center mt-10 md:mt-0 py-8 px-6 text-center bg-gradient-to-r from-gray-100 to-blue-100">
      <div>
        <img src={eu} alt="EU" className="w-40 h-auto rounded-full" />
      </div>
      <h1 className="text-4xl font-bold mb-2">{t("landing.title")}</h1>
      <div className="text-lg text-gray-700 max-w-xl mt-4">
        <span className="text-xl font-bold">{t("landing.hello")}</span>
        
      {language === "en" ? (
        <>
          I am a Computer Scientist graduated by CEFET/RJ, with a Master's exchange program experience 
          at Aix-Marseille University. My final project thesis is entitled{" "}
          <em>"Audit of Government Spending: An approach using Natural Language Processing"</em>. 
          You can find the manuscript{" "}
          <a
            href={tese}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            here
          </a>.
        </>
      ) : (
        <>
          Je suis un informaticien diplômé par CEFET/RJ avec une expérience Master 1 à
          l'université d'Aix-marseille.
          Mon mémoire de fin d’études s’intitule{" "}
          <em>"Audit des dépenses publiques : une approche utilisant le traitement automatique du langage naturel"</em>. 
          Vous pouvez consulter le manuscrit{" "}
          <a
            href={tese}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            ici
          </a>.
        </>
      )}
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
          {t("landing.journey")}
        </h2>

        <div className="space-y-6">

          {/* CEFET */}
          <div className="p-4 border-l-4 border-orange-500 bg-orange-50 shadow-sm rounded-md">
            <h3 className="font-bold mb-2">2019 – 2025 · Computer Science BSc @ CEFET</h3>
            {language === "en" ? (
              <p className="text-gray-600">
                Built strong foundations in algorithms, data structures, and software engineering.
              </p>
            ) : (
              <p className="text-gray-600">
                Bases solides en algorithmes, structures de données et ingénierie logicielle.
              </p>
            )}
            
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
            {language === "en" ? (
              <li>Served as a teaching assistant (monitor) for Data Structures & Algorithms (C++).</li>
            ) : (
              <li>A travaillé comme moniteur pour le cours de Structures de Données & Algorithmes (C++).</li>
            )}
          </ul>
          </div>

          {/* AIX-MARSEILLE */}
          <div className="p-4 border-l-4 border-pink-500 bg-pink-50 shadow-sm rounded-md">
            <h3 className="font-bold mb-2">2023 – 2024 · Master 1 @ Aix-Marseille University</h3>
            {language === "en" ? (
              <p className="text-gray-600">
                Deepened my skills in Data Science, AI, and applied research while living in France.
              </p>
            ) : (
              <p className="text-gray-600">
                Approfondissement de mes compétences en science des données, intelligence artificielle et recherche appliquée tout en vivant en France.
              </p>
            )}
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1 text-left">
              {language === "en" ? (
                <>
                  <li>
                    Paid Research internship at LIS-LAB (TALEP), supervised by Prof.{" "}
                    <a href="https://pageperso.lis-lab.fr/benoit.favre/" className="underline text-blue-600 hover:text-blue-800">
                      Benoît Favre
                    </a>, working on HuBERT-based speech recognition and feature extraction.
                  </li>
                  <li>6-month paid internship at Euranova, developing a sustainable AI methodology and applying it to a LangChain RAG project to optimize resource efficiency.</li>
                  <li>Worked part-time as a student assistant supporting peers with special needs.</li>
                </>
              ) : (
                <>
                  <li>
                    Stage rémunéré en recherche au LIS-LAB (TALEP), supervisé par le Prof.{" "}
                    <a href="https://pageperso.lis-lab.fr/benoit.favre/" className="underline text-blue-600 hover:text-blue-800">
                      Benoît Favre
                    </a>, travaillant sur la reconnaissance vocale basée sur HuBERT et l’extraction de caractéristiques.
                  </li>
                  <li>Stage rémunéré de 6 mois chez Euranova, développement d’une méthodologie d’IA durable appliquée à un projet LangChain RAG pour optimiser l’efficacité des ressources.</li>
                  <li>Job étudiant comme secrétariat d'examen soutenant des étudiants en situation de handicap.</li>
                </>
              )}
            </ul>
          </div>

          {/* Final Year Project */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 shadow-sm rounded-md">
            <h3 className="font-bold mb-2">2024 – 2025 · Final Year Thesis</h3>
            {language === "en" ? (
            <p className="text-gray-600">
              Applied Deep Embedded Clustering (DEC) and Natural Language Processing (NLP) to group and analyze Brazilian government expenditure data, supervised by Prof.{" "}
              <a href="https://eic.cefet-rj.br/~ebezerra/" className="underline text-blue-600 hover:text-blue-800">
                Eduardo Bezerra
              </a>.
            </p>
          ) : (
            <p className="text-gray-600">
              Application du Deep Embedded Clustering (DEC) et du traitement automatique du langage (NLP) pour regrouper et analyser les données de dépenses publiques brésiliennes, supervisé par le Prof.{" "}
              <a href="https://eic.cefet-rj.br/~ebezerra/" className="underline text-blue-600 hover:text-blue-800">
                Eduardo Bezerra
              </a>.
            </p>
          )}
            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
            {language === "en" ? (
              <p className="text-gray-600 mt-2 text-left">
                <strong>Result:</strong> Earned highest honors for successfully tackling complex, real-world expenditure data and demonstrating the algorithm’s strong performance.
              </p>
            ) : (
              <p className="text-gray-600 mt-2 text-left">
                <strong>Résultat :</strong> Mention maximale obtenue pour avoir traité avec succès des données de dépenses complexes et démontré les performances élevées de l’algorithme.
              </p>
            )}
          </div>


          {/* Current Research */}
          <div className="p-4 border-l-4 border-green-500 bg-green-50 shadow-sm rounded-md">
            <h3 className="font-bold mb-2">Paper in progress: <i>SCRNA-Seq Analysis</i></h3>
            {language === "en" ? (
              <p className="text-gray-600">
                Leading a comparative study of clustering algorithms (SDEC, DEC, K-Means, Spectral Clustering) applied to genetic data for cancer prediction. Building ablation pipelines with PCA and scalers to evaluate reproducibility and performance.
              </p>
            ) : (
              <p className="text-gray-600">
                Direction d’une étude comparative des algorithmes de regroupement (SDEC, DEC, K-Means, Clustering Spectral) appliqués à des données génétiques pour la prédiction du cancer. Mise en place de pipelines d’ablation avec PCA et normalisations afin d’évaluer la reproductibilité et les performances.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>



    </div>
  );
};

export default LandingPage;
