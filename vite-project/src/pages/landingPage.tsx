import React from "react";
import eu from "../assets/eu.png";
import { Mail, MapPin, FileText, ArrowUpRight } from "lucide-react";
import tese from "../assets/TCC_2024_ViniciusParaizo.pdf";
import cv from "../assets/CV - Vinicius Paraizo.pdf";
import cv_de from "../assets/CV - Paraizo [german].pdf";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

type Lang = "en" | "fr" | "de";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/*  All copy lives here instead of nested ternaries in the markup.     */
/*  Move this into your locale JSON files when you get the chance.     */
/* ------------------------------------------------------------------ */

const ui = {
  en: {
    role: "AI & Full-Stack Engineer",
    bio: "I have been building production software for four years — from agentic AI systems (RAG, LangChain, AWS Bedrock) to full-stack applications in React, Next.js and Java/Spring. Most recently I built retrieval pipelines and a permission-aware conversational agent for a banking client.",
    facts: {
      location: "Based in",
      locationValue: "Dresden, Germany",
      permit: "Work authorisation",
      permitValue: "Italian citizen (EU) — no permit needed",
      status: "Open to",
      statusValue: "Permanent or freelance · remote or hybrid",
    },
    cvLabel: "Download CV (PDF)",
    projectsLabel: "See projects",
    experience: "Experience",
    education: "Education",
    highlight: "Selected work",
    highlightBody:
      "Nemesis — a full-stack audit tool for Rio de Janeiro's public spending authority. Semantic and direct database queries, 3D projection of expenditure records via a denoising autoencoder, split-payment detection through graph-based grouping, and overpricing analysis against comparable records using pgvector.",
    award: "1st place, INOVA national innovation competition 2025/26",
    highlightCta: "Read the full case",
    research: "Currently writing",
    researchBody:
      "A comparative study of clustering algorithms (SDEC, DEC, K-Means, Spectral) on single-cell RNA sequencing data for cancer prediction, with ablation pipelines over PCA and scaling choices.",
    thesisLine: "Thesis on NLP for auditing public expenditure, graded 20/20 —",
    thesisLink: "read the abstract",
  },
  fr: {
    role: "Ingénieur IA & Full-Stack",
    bio: "Je développe des logiciels en production depuis quatre ans — des systèmes d'IA agentique (RAG, LangChain, AWS Bedrock) aux applications full-stack en React, Next.js et Java/Spring. Récemment, j'ai construit des pipelines de recherche documentaire et un agent conversationnel avec filtrage par permissions pour un client bancaire.",
    facts: {
      location: "Basé à",
      locationValue: "Dresde, Allemagne",
      permit: "Autorisation de travail",
      permitValue: "Citoyen italien (UE) — aucun permis requis",
      status: "Ouvert à",
      statusValue: "CDI ou freelance · télétravail ou hybride",
    },
    cvLabel: "Télécharger le CV (PDF)",
    projectsLabel: "Voir les projets",
    experience: "Expérience",
    education: "Formation",
    highlight: "Projet phare",
    highlightBody:
      "Nemesis — un outil d'audit full-stack pour l'organe de contrôle des dépenses publiques de Rio de Janeiro. Requêtes directes et sémantiques, projection 3D des dépenses via un autoencodeur débruiteur, détection de paiements fractionnés par regroupement en graphe et analyse de surfacturation avec pgvector.",
    award: "1re place au concours national d'innovation INOVA 2025/26",
    highlightCta: "Lire l'étude de cas",
    research: "En cours de rédaction",
    researchBody:
      "Une étude comparative d'algorithmes de clustering (SDEC, DEC, K-Means, spectral) appliqués au séquençage ARN à cellule unique pour la prédiction du cancer, avec des pipelines d'ablation sur la PCA et les normalisations.",
    thesisLine: "Mémoire sur le TAL appliqué à l'audit des dépenses publiques, noté 20/20 —",
    thesisLink: "lire le résumé",
  },
  de: {
    role: "AI- & Full-Stack-Entwickler",
    bio: "Seit vier Jahren entwickle ich Software im produktiven Einsatz — von agentischen KI-Systemen (RAG, LangChain, AWS Bedrock) bis zu Full-Stack-Anwendungen mit React, Next.js und Java/Spring. Zuletzt habe ich für einen Kunden aus dem Bankensektor Retrieval-Pipelines und einen konversationellen Agenten mit berechtigungsbasierter Filterung gebaut.",
    facts: {
      location: "Wohnort",
      locationValue: "Dresden, Deutschland",
      permit: "Arbeitserlaubnis",
      permitValue: "Italienische Staatsbürgerschaft (EU) — keine erforderlich",
      status: "Offen für",
      statusValue: "Festanstellung oder Freelance · remote oder hybrid",
    },
    cvLabel: "Lebenslauf herunterladen (PDF)",
    projectsLabel: "Projekte ansehen",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    highlight: "Ausgewähltes Projekt",
    highlightBody:
      "Nemesis — ein Full-Stack-Audit-Tool für die Rechnungsprüfungsbehörde des Bundesstaates Rio de Janeiro. Direkte und semantische Datenbankabfragen, 3D-Projektion von Ausgabendaten mittels Denoising Autoencoder, Erkennung gestückelter Zahlungen über graphenbasierte Gruppierung und Überpreis-Analyse mit pgvector.",
    award: "1. Platz beim nationalen Innovationswettbewerb INOVA 2025/26",
    highlightCta: "Zum vollständigen Projekt",
    research: "In Arbeit",
    researchBody:
      "Eine vergleichende Studie von Clustering-Algorithmen (SDEC, DEC, K-Means, spektral) auf Einzelzell-RNA-Sequenzierungsdaten zur Krebsprognose, mit Ablationspipelines über PCA- und Skalierungsvarianten.",
    thesisLine: "Abschlussarbeit über NLP zur Prüfung öffentlicher Ausgaben, Note 20/20 —",
    thesisLink: "Zusammenfassung lesen",
  },
} as const;



const experience = [
  {
    role: { en: "AI Engineer", fr: "Ingénieur IA", de: "AI Engineer" },
    org: "Prime Up",
    place: "Rio de Janeiro, BR",
    period: "10/2025 – 06/2026",
    accent: "border-blue-500 bg-blue-50",
    desc: {
      en: "Agentic AI for the client BNY: RAG pipelines with LangChain and AWS Bedrock, and an IBM Watson conversational agent with tool selection and permission-based chunk filtering. Python backend, Docker, IBM Cloud, React frontends.",
      fr: "IA agentique pour le client BNY : pipelines RAG avec LangChain et AWS Bedrock, agent conversationnel IBM Watson avec sélection d'outils et filtrage des chunks par permissions. Backend Python, Docker, IBM Cloud, frontends React.",
      de: "Agentische KI für den Kunden BNY: RAG-Pipelines mit LangChain und AWS Bedrock sowie ein konversationeller Agent auf IBM Watson mit Tool-Auswahl und berechtigungsbasierter Chunk-Filterung. Python-Backend, Docker, IBM Cloud, React-Frontends.",
    },
  },
  {
    role: {
      en: "Full-Stack Developer (B2B contract)",
      fr: "Développeur Full-Stack (contrat B2B)",
      de: "Full-Stack-Entwickler (B2B-Vertrag)",
    },
    org: "Anouk Partners — client Hapvida",
    place: "Remote, BR",
    period: "07/2025 – 10/2025",
    accent: "border-indigo-500 bg-indigo-50",
    desc: {
      en: "Dockerised application with a Next.js frontend and Java/Spring backend, integrating external APIs and a relational database. Delivered in Scrum.",
      fr: "Application dockerisée avec frontend Next.js et backend Java/Spring, intégrant des API externes et une base de données relationnelle. Livraison en Scrum.",
      de: "Dockerisierte Anwendung mit Next.js-Frontend und Java-Spring-Backend, Anbindung externer APIs und einer relationalen Datenbank. Umsetzung nach Scrum.",
    },
  },
  {
    role: {
      en: "AI Engineer (internship)",
      fr: "Ingénieur IA (stage)",
      de: "AI Engineer (Praktikum)",
    },
    org: "Euranova",
    place: "Marseille, FR",
    period: "08/2024 – 02/2025",
    accent: "border-pink-500 bg-pink-50",
    desc: {
      en: "Built a methodology for resource-efficient AI across the model lifecycle and applied it to a LangChain RAG project running on Qdrant.",
      fr: "Développement d'une méthodologie d'IA sobre en ressources sur l'ensemble du cycle de vie, appliquée à un projet RAG LangChain sur Qdrant.",
      de: "Entwicklung einer Methodik für ressourceneffiziente KI über den gesamten Modelllebenszyklus, angewendet auf ein LangChain-RAG-Projekt mit Qdrant.",
    },
  },
  {
    role: {
      en: "ML Consultant (internship)",
      fr: "Consultant ML (stage)",
      de: "ML Consultant (Praktikum)",
    },
    org: "LIS-LAB, team TALEP",
    place: "Marseille, FR",
    period: "02/2024 – 05/2024",
    accent: "border-purple-500 bg-purple-50",
    desc: {
      en: "Research on HuBERT-based speech recognition and feature extraction (MFCC), supervised by Prof. Benoît Favre.",
      fr: "Recherche sur la reconnaissance vocale basée sur HuBERT et l'extraction de caractéristiques (MFCC), encadrée par le Prof. Benoît Favre.",
      de: "Forschung zu HuBERT-basierter Spracherkennung und Merkmalsextraktion (MFCC), betreut von Prof. Benoît Favre.",
    },
  },
  {
    role: {
      en: "Systems Analyst (internship)",
      fr: "Analyste systèmes (stage)",
      de: "Systemanalyst (Praktikum)",
    },
    org: "VTEX",
    place: "Rio de Janeiro, BR",
    period: "08/2022 – 08/2023",
    accent: "border-teal-500 bg-teal-50",
    desc: {
      en: "Process automation in Python with Selenium and OpenPyXL.",
      fr: "Automatisation de processus en Python avec Selenium et OpenPyXL.",
      de: "Prozessautomatisierung in Python mit Selenium und OpenPyXL.",
    },
  },
];

const education = [
  {
    period: "2019 – 2025",
    degree: {
      en: "BSc Computer Science — CEFET/RJ, Brazil",
      fr: "Licence en informatique — CEFET/RJ, Brésil",
      de: "B.Sc. Informatik — CEFET/RJ, Brasilien",
    },
    note: {
      en: "Final grade 8.04/10 (German equivalent 2.1). Teaching assistant for Data Structures & Algorithms (C++).",
      fr: "Note finale 8,04/10 (équivalent allemand 2,1). Moniteur pour le cours de structures de données et algorithmes (C++).",
      de: "Abschlussnote 8,04/10 (deutsche Entsprechung 2,1). Studentische Hilfskraft für Datenstrukturen & Algorithmen (C++).",
    },
  },
  {
    period: "2023 – 2024",
    degree: {
      en: "Master 1 Informatique (exchange year) — Aix-Marseille Université, France",
      fr: "Master 1 Informatique (année d'échange) — Aix-Marseille Université, France",
      de: "Master 1 Informatique (Austauschjahr) — Aix-Marseille Université, Frankreich",
    },
    note: {
      en: "Data science, AI and applied research.",
      fr: "Science des données, IA et recherche appliquée.",
      de: "Data Science, KI und angewandte Forschung.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

const Fact: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="text-left">
    <div className="text-[11px] uppercase tracking-widest text-gray-500">{label}</div>
    <div className="text-sm font-medium text-gray-900">{value}</div>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
    {children}
  </h2>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const LandingPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const lang = (["en", "fr", "de"].includes(language) ? language : "en") as Lang;
  const c = ui[lang];
  const cvFile = lang === "de" ? cv_de : cv;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-gradient-to-r from-gray-100 to-blue-100 px-6 py-12 md:py-16">
        <div className="mt-10 lg:mt-3 mx-auto max-w-4xl flex flex-col md:flex-row md:items-start gap-8">
          <img
            src={eu}
            alt="Vinicius Paraizo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-sm mx-auto md:mx-0 shrink-0"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Vinicius Paraizo
            </h1>
            <p className="mt-1 text-lg md:text-xl font-medium text-blue-700">{c.role}</p>

            <p className="mt-4 text-gray-700 leading-relaxed">{c.bio}</p>

            {/* Signature block: the three things a German recruiter checks first */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-lg border border-gray-200 bg-white/70 p-4 backdrop-blur-sm">
              <Fact label={c.facts.location} value={c.facts.locationValue} />
              <Fact label={c.facts.permit} value={c.facts.permitValue} />
              <Fact label={c.facts.status} value={c.facts.statusValue} />
            </div>



            {/* Actions */}
            <div className="mt-6 text-white flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold !text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <FileText className="h-4 w-4" />
                {c.cvLabel}
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                onClick={() => {
                  navigate("/Projects");
                  window.scrollTo(0, 0);
                }}
              >
                {c.projectsLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Contact */}
            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-gray-700">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gray-500" />
                Dresden, DE
              </span>
              <a
                href="mailto:paraizovinicius@gmail.com"
                className="inline-flex items-center gap-1.5 underline decoration-gray-400 underline-offset-2 hover:text-blue-700"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                paraizovinicius@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/paraizovinicius/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 underline-offset-2 hover:text-blue-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/paraizovinicius"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 underline-offset-2 hover:text-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Selected work ---------------- */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>{c.highlight}</SectionTitle>

          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-gray-900">Nemesis</h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                🏆 {c.award}
              </span>
            </div>

            <p className="mt-3 text-gray-700 leading-relaxed">{c.highlightBody}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {["React", "FastAPI", "SQLAlchemy", "PostgreSQL", "pgvector", "PyTorch"].map((s) => (
                <li
                  key={s}
                  className="rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-700"
                >
                  {s}
                </li>
              ))}
            </ul>

            <a
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
              onClick={() => {
                navigate("/Projects");
                window.scrollTo(0, 0);
              }}
            >
              {c.highlightCta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Experience ---------------- */}
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>{c.experience}</SectionTitle>

          <div className="space-y-5">
            {experience.map((job) => (
              <article
                key={job.org + job.period}
                className={`rounded-md border-l-4 p-5 shadow-sm ${job.accent}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-bold text-gray-900">
                    {job.role[lang]} · {job.org}
                  </h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">{job.period}</span>
                </div>
                <div className="text-sm text-gray-500">{job.place}</div>
                <p className="mt-2 text-gray-700 leading-relaxed">{job.desc[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Education ---------------- */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>{c.education}</SectionTitle>

          <div className="space-y-5">
            {education.map((ed) => (
              <div key={ed.period} className="border-l-2 border-gray-200 pl-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-gray-900">{ed.degree[lang]}</h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">{ed.period}</span>
                </div>
                <p className="mt-1 text-gray-600 text-left">{ed.note[lang]}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-600">
            {c.thesisLine}{" "}
            <a
              href={tese}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700 hover:text-blue-900"
            >
              {c.thesisLink}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ---------------- Research ---------------- */}
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>{c.research}</SectionTitle>
          <div className="rounded-md border-l-4 border-green-500 bg-green-50 p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">
              <i>scRNA-seq clustering benchmark</i>
            </h3>
            <p className="text-gray-700 leading-relaxed">{c.researchBody}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
