import React from "react";
import { TimelineComponent } from "../components/timeline";
import { useLanguage } from "../contexts/LanguageContext";

type Lang = "en" | "fr" | "de";

/* ------------------------------------------------------------------ */
/*  Copy                                                               */
/* ------------------------------------------------------------------ */

const ui: Record<Lang, { introHeading: string; intro: string; timelineHeading: string }> = {
  en: {
    introHeading: "Engineer with a research background",
    intro:
      "I build software and I do research, and the two feed each other. Academic work taught me to understand a problem thoroughly before writing code; four years of shipping taught me that a model only matters once it runs reliably for someone else. I am most useful where those meet — machine learning systems that have to work in production, not only in a notebook. I am based in Dresden and looking for engineering work in Germany, while continuing to publish and to teach machine learning on my YouTube channel.",
    timelineHeading: "Professional trajectory",
  },
  fr: {
    introHeading: "Ingénieur au parcours de recherche",
    intro:
      "Je développe des logiciels et je fais de la recherche, et les deux se nourrissent mutuellement. Le travail académique m'a appris à bien comprendre un problème avant d'écrire du code ; quatre ans de mise en production m'ont appris qu'un modèle ne compte qu'à partir du moment où il fonctionne de façon fiable pour quelqu'un d'autre. Je suis le plus utile là où les deux se rejoignent : des systèmes d'apprentissage automatique qui doivent tourner en production, et pas seulement dans un notebook. Je vis à Dresde et je cherche un poste d'ingénieur en Allemagne, tout en continuant à publier et à enseigner le machine learning sur ma chaîne YouTube.",
    timelineHeading: "Mon parcours",
  },
  de: {
    introHeading: "Entwickler mit Forschungshintergrund",
    intro:
      "Ich entwickle Software und ich forsche — beides befruchtet sich gegenseitig. Die wissenschaftliche Arbeit hat mich gelehrt, ein Problem gründlich zu durchdringen, bevor ich Code schreibe; vier Jahre Praxis haben mich gelehrt, dass ein Modell erst dann zählt, wenn es für jemand anderen zuverlässig läuft. Am nützlichsten bin ich dort, wo sich beides trifft: bei Machine-Learning-Systemen, die im Produktivbetrieb funktionieren müssen und nicht nur im Notebook. Ich lebe in Dresden und suche eine Stelle als Entwickler in Deutschland — parallel dazu veröffentliche ich weiter und vermittle Machine Learning auf meinem YouTube-Kanal.",
    timelineHeading: "Beruflicher Werdegang",
  },
};

/* ------------------------------------------------------------------ */
/*  Timeline                                                           */
/* ------------------------------------------------------------------ */

type Block = { heading: Record<Lang, string>; body: Record<Lang, string> };
type Entry = { id: string; year: string; blocks: Block[] };

const timeline: Entry[] = [
  {
    id: "academic-beginnings",
    year: "2019",
    blocks: [
      {
        heading: {
          en: "Two degrees at once",
          fr: "Deux cursus en parallèle",
          de: "Zwei Studiengänge parallel",
        },
        body: {
          en: "I started a BSc in Economics at Ibmec, working on market viability projects in the junior enterprise Ibmec Jr, while beginning a BSc in Computer Science at CEFET/RJ. Some days I moved between both universities and still delivered client work. It taught me to plan my time strictly, and it left me with an economics grounding I still draw on whenever I work with public spending data.",
          fr: "J'ai commencé une licence en économie à l'Ibmec, en travaillant sur des projets d'étude de marché au sein de la junior entreprise Ibmec Jr, tout en démarrant une licence en informatique au CEFET/RJ. Certains jours, je faisais la navette entre les deux universités tout en livrant des projets clients. J'y ai appris à planifier mon temps rigoureusement, et j'en garde des bases en économie qui me servent encore dès que je travaille sur des données de dépenses publiques.",
          de: "Ich begann ein Wirtschaftsstudium am Ibmec und arbeitete in der studentischen Unternehmensberatung Ibmec Jr an Marktstudien, während ich zugleich mein Informatikstudium am CEFET/RJ aufnahm. An manchen Tagen pendelte ich zwischen beiden Hochschulen und lieferte nebenbei Kundenprojekte ab. Das hat mich strikte Zeitplanung gelehrt und mir ökonomische Grundlagen gegeben, auf die ich bis heute zurückgreife, wenn ich mit Daten zu öffentlichen Ausgaben arbeite.",
        },
      },
    ],
  },
  {
    id: "teaching-and-industry",
    year: "2022",
    blocks: [
      {
        heading: {
          en: "Teaching what I wanted to master",
          fr: "Enseigner ce que je voulais maîtriser",
          de: "Lehren, um es zu beherrschen",
        },
        body: {
          en: "Once I committed fully to Computer Science, I went back to the subject I felt I understood least well — data structures in C++ — and spent a year as its teaching assistant. Explaining it to other students is what made it stick, and it is where my interest in teaching began.",
          fr: "Une fois pleinement engagé en informatique, je suis revenu à la matière que je maîtrisais le moins — les structures de données en C++ — et j'en ai été moniteur pendant un an. C'est en l'expliquant à d'autres étudiants que je l'ai vraiment assimilée, et c'est là qu'est né mon intérêt pour l'enseignement.",
          de: "Als ich mich ganz der Informatik widmete, kehrte ich zu dem Fach zurück, das ich am wenigsten durchdrungen hatte — Datenstrukturen in C++ — und war ein Jahr lang als studentische Hilfskraft dafür tätig. Erst durch das Erklären für andere saß der Stoff wirklich; daher rührt auch mein Interesse an der Lehre.",
        },
      },
      {
        heading: {
          en: "First role in industry",
          fr: "Première expérience en entreprise",
          de: "Erste Erfahrung in der Wirtschaft",
        },
        body: {
          en: "I joined VTEX, a global e-commerce company, automating internal processes in Python with Selenium and OpenPyXL.",
          fr: "J'ai rejoint VTEX, une entreprise internationale de commerce électronique, où j'automatisais des processus internes en Python avec Selenium et OpenPyXL.",
          de: "Ich stieg bei VTEX ein, einem international tätigen E-Commerce-Unternehmen, und automatisierte dort interne Prozesse mit Python, Selenium und OpenPyXL.",
        },
      },
    ],
  },
  {
    id: "academic-exchange",
    year: "2023",
    blocks: [
      {
        heading: {
          en: "Exchange year and first research",
          fr: "Année d'échange et première recherche",
          de: "Austauschjahr und erster Kontakt zur Forschung",
        },
        body: {
          en: "I spent a year at Aix-Marseille Université on a Master 1 exchange. Alongside my courses I worked as a job étudiant supporting students with disabilities during examinations, and joined LIS-Lab as a paid intern. There I had my first serious contact with research — HuBERT-based speech recognition and feature extraction — and found that the work suited me.",
          fr: "J'ai passé un an à l'Université d'Aix-Marseille dans le cadre d'un échange en Master 1. En parallèle de mes cours, j'ai travaillé comme job étudiant en accompagnant des étudiants en situation de handicap lors des examens, et j'ai rejoint le LIS-Lab comme stagiaire rémunéré. J'y ai eu mon premier contact sérieux avec la recherche — reconnaissance vocale basée sur HuBERT et extraction de caractéristiques — et j'ai découvert que ce travail me convenait.",
          de: "Ein Jahr verbrachte ich als Austauschstudent im Master 1 an der Universität Aix-Marseille. Neben dem Studium arbeitete ich als Prüfungsassistenz für Studierende mit Beeinträchtigung und stieg als bezahlter Praktikant am LIS-Lab ein. Dort hatte ich meinen ersten ernsthaften Kontakt mit der Forschung — Spracherkennung auf Basis von HuBERT und Merkmalsextraktion — und merkte, dass mir diese Arbeit liegt.",
        },
      },
    ],
  },
  {
    id: "applied-research",
    year: "2024",
    blocks: [
      {
        heading: {
          en: "Applied research at Euranova",
          fr: "Recherche appliquée chez Euranova",
          de: "Angewandte Forschung bei Euranova",
        },
        body: {
          en: "A six-month paid internship in Euranova's R&D group in Marseille. The placement required an exemption from CEFET's regulations, which I obtained after making the case to the faculty administration. The work meant reading widely across the literature and produced an internal guide for Euranova's developers on building AI more frugally. I presented progress to the company monthly in 30-minute sessions — the best technical communication training I have had. All of it ran in parallel with my thesis.",
          fr: "Un stage rémunéré de six mois dans le groupe R&D d'Euranova à Marseille. Ce stage nécessitait une dérogation au règlement du CEFET, que j'ai obtenue après avoir plaidé le dossier auprès de la direction. Le travail a demandé une lecture approfondie de la littérature et a abouti à un guide interne destiné aux développeurs d'Euranova sur la conception d'une IA plus sobre. Je présentais l'avancement à l'entreprise chaque mois en sessions de 30 minutes — la meilleure formation en communication technique que j'aie reçue. Le tout menait de front avec mon mémoire.",
          de: "Ein sechsmonatiges bezahltes Praktikum in der Forschungsabteilung von Euranova in Marseille. Dafür war eine Ausnahmegenehmigung des CEFET nötig, die ich nach einem Gespräch mit der Hochschulleitung erhielt. Die Arbeit erforderte eine breite Literaturrecherche und mündete in einen internen Leitfaden für Euranovas Entwicklerinnen und Entwickler, wie sich KI ressourcenschonender umsetzen lässt. Monatlich stellte ich dem Unternehmen den Fortschritt in 30-minütigen Sessions vor — das beste Training in technischer Kommunikation, das ich hatte. Parallel dazu schrieb ich meine Abschlussarbeit.",
        },
      },
    ],
  },
  {
    id: "thesis-and-nemesis",
    year: "2025",
    blocks: [
      {
        heading: {
          en: "Thesis and top marks",
          fr: "Mémoire et note maximale",
          de: "Abschlussarbeit und Bestnote",
        },
        body: {
          en: "Two semesters of focused work on machine learning produced my final thesis, which the examining committee graded 20/20 unanimously.",
          fr: "Deux semestres de travail concentré en apprentissage automatique ont abouti à mon mémoire de fin d'études, noté 20/20 à l'unanimité du jury.",
          de: "Zwei Semester konzentrierter Arbeit zum maschinellen Lernen mündeten in meine Abschlussarbeit, die der Prüfungsausschuss einstimmig mit 20/20 bewertete.",
        },
      },
      {
        heading: {
          en: "First full-stack role, and Nemesis",
          fr: "Premier poste full-stack, et Nemesis",
          de: "Erste Full-Stack-Position und Nemesis",
        },
        body: {
          en: "I joined a senior team building a platform for Hapvida, one of Brazil's largest health insurers, working in Scrum with Next.js and Java/Spring. In parallel, with Prof. Eduardo Bezerra, I turned the thesis into Nemesis — which took first place among 44 entries in a national innovation competition and which we presented at Painel Telebrasil 2025 in Brasília.",
          fr: "J'ai rejoint une équipe senior développant une plateforme pour Hapvida, l'un des plus grands assureurs santé du Brésil, en méthodologie Scrum avec Next.js et Java/Spring. En parallèle, avec le Prof. Eduardo Bezerra, j'ai transformé mon mémoire en Nemesis — projet arrivé premier parmi 44 candidatures à un concours national d'innovation, que nous avons présenté au Painel Telebrasil 2025 à Brasília.",
          de: "Ich arbeitete in einem erfahrenen Team an einer Plattform für Hapvida, einen der größten Krankenversicherer Brasiliens — nach Scrum, mit Next.js und Java/Spring. Parallel entwickelte ich gemeinsam mit Prof. Eduardo Bezerra aus der Abschlussarbeit das Projekt Nemesis, das sich in einem nationalen Innovationswettbewerb gegen 44 Mitbewerber durchsetzte und das wir beim Painel Telebrasil 2025 in Brasília vorstellten.",
        },
      },
    ],
  },
  {
    id: "agentic-ai",
    year: "2026",
    blocks: [
      {
        heading: {
          en: "Agentic AI, and moving to Germany",
          fr: "IA agentique, et installation en Allemagne",
          de: "Agentische KI und der Umzug nach Deutschland",
        },
        body: {
          en: "At Prime Up I worked on agentic AI for a banking client: systems built on multiple reasoning agents, RAG pipelines over a Milvus vector store, and AWS Bedrock APIs for response generation. Alongside that I continued my research on deep clustering architectures (DEC, IDEC, BRB) and kept publishing to the YouTube channel I created to teach this material. I am now based in Dresden.",
          fr: "Chez Prime Up, j'ai travaillé sur l'IA agentique pour un client bancaire : des systèmes fondés sur plusieurs agents de raisonnement, des pipelines RAG sur un magasin de vecteurs Milvus et les API AWS Bedrock pour la génération de réponses. En parallèle, j'ai poursuivi mes recherches sur les architectures de deep clustering (DEC, IDEC, BRB) et continué à publier sur la chaîne YouTube que j'ai créée pour enseigner ce domaine. Je vis désormais à Dresde.",
          de: "Bei Prime Up arbeitete ich an agentischer KI für einen Kunden aus dem Bankensektor: Systeme auf Basis mehrerer Reasoning-Agenten, RAG-Pipelines über einen Milvus-Vektorspeicher und AWS-Bedrock-APIs für die Antwortgenerierung. Daneben setzte ich meine Forschung zu Deep-Clustering-Architekturen (DEC, IDEC, BRB) fort und veröffentlichte weiter Videos auf dem YouTube-Kanal, den ich für dieses Thema gestartet habe. Inzwischen lebe ich in Dresden.",
        },
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Divider = () => (
  <hr className="border-t border-gray-300 mt-2 mb-8 max-w-[80%] mx-auto" />
);

const AboutMe: React.FC = () => {
  const { language, t } = useLanguage();
  const lang = (["en", "fr", "de"].includes(language) ? language : "en") as Lang;
  const c = ui[lang];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-8 md:mt-0">
      <section className="max-w-3xl mx-auto py-12 px-6 space-y-6">
        <h1 className="text-4xl font-bold mb-2 text-center">{t("about.title")}</h1>
        <Divider />

        <div>
          <h2 className="font-bold text-[20px] text-left">{c.introHeading}</h2>
          <p className="text-gray-600 leading-relaxed text-[18px] text-left">{c.intro}</p>
        </div>

        <h2 className="mt-5 text-4xl font-semibold mb-2 text-center">{c.timelineHeading}</h2>
        <Divider />

        <TimelineComponent
          items={timeline.map((entry) => ({
            id: entry.id,
            year: entry.year,
            content: (
              <>
                {entry.blocks.map((block, i) => (
                  <div key={block.heading.en} className={i > 0 ? "mt-4" : undefined}>
                    <div className="font-bold text-[20px] text-left">{block.heading[lang]}</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                      {block.body[lang]}
                    </div>
                  </div>
                ))}
              </>
            ),
          }))}
        />
      </section>
    </div>
  );
};

export default AboutMe;
