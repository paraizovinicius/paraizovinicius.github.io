import React from "react";
import ProjectCard from "../components/projectCard";
import { useLanguage } from "../contexts/LanguageContext";

type Lang = "en" | "fr" | "de";

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

const Rule = () => (
  <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
);

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-6 text-left space-y-2">{children}</ul>
);

const link = "underline text-blue-600 hover:text-blue-800";

const Bezerra = () => (
  <a href="https://eic.cefet-rj.br/~ebezerra/" className={link}>
    Eduardo Bezerra
  </a>
);

const Areas = () => (
  <a
    href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=C181FBADA141F9C4C031C8B178FE4062.buscatextual_0"
    className={link}
  >
    Marcelo Arêas
  </a>
);

const BrcaLink = () => (
  <a
    href="https://github.com/AILAB-CEFET-RJ/brca-scrna-seq/tree/master"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    SCRNA-Seq Analysis of BRCA Patients
  </a>
);

const PtDecLink = () => (
  <a
    href="https://github.com/vlukiyanov/pt-dec/tree/master"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    vlukiyanov/pt-dec
  </a>
);

const Award: React.FC<{ text: string }> = ({ text }) => (
  <div className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
    🏆 {text}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

type Project = {
  title: string | Record<Lang, string>;
  description: Record<Lang, React.ReactNode>;
  tech: string[];
  github: string;
  demo?: string;
  externalLinks?: { url: string; label: string }[];
};

const projects: Project[] = [
  /* ---------------------------- Nemesis --------------------------- */
  {
    title: "Nemesis",
    tech: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL", "pgvector", "SDAE"],
    github: "https://github.com/AILAB-CEFET-RJ/nemesis",
    demo: "",
    externalLinks: [
      {
        url: "https://www.correiobraziliense.com.br/euestudante/educacao-profissional/2025/09/7240957-projetos-focados-em-inovacao-e-tecnologia-sao-premiados-em-brasilia.html",
        label: "Correio Braziliense",
      },
      { url: "https://youtu.be/a5sQ414Ikto?si=kA12jHchzoSNakxD", label: "GLOBO RJ1" },
    ],
    description: {
      en: (
        <div>
          <Award text="1st place — INOVA national innovation competition 2025/26" />
          Developed in collaboration with Prof. <Bezerra /> and M.Sc. Wellington Amaral,
          Nemesis (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) is a
          web application with database integration via FastAPI.
          <Rule />
          <List>
            <li>Direct and semantic database queries.</li>
            <li>
              3D projection of spending records, using a denoising autoencoder to map semantic
              embeddings into three-dimensional space for group detection.
            </li>
            <li>
              Access to the “fracionamento” (split payments) table, generated through a
              graph-based grouping algorithm with filtering rules.
            </li>
            <li>
              Overpricing analysis, comparing filtered spending records with semantically
              similar records from other municipalities in the same year using pgvector in
              PostgreSQL.
            </li>
          </List>
        </div>
      ),
      fr: (
        <div>
          <Award text="1re place — concours national d'innovation INOVA 2025/26" />
          Développé en collaboration avec le Prof. <Bezerra /> et le M.Sc. Wellington Amaral,
          Nemesis (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) est une
          application web intégrée à une base de données via FastAPI.
          <Rule />
          <List>
            <li>Requêtes directes et sémantiques sur la base de données.</li>
            <li>
              Projection 3D des enregistrements de dépenses, utilisant un autoencodeur débruiteur
              pour projeter les embeddings sémantiques dans un espace tridimensionnel afin de
              détecter des regroupements.
            </li>
            <li>
              Accès à la table « fracionamento » (paiements fractionnés), générée via un
              algorithme de regroupement basé sur des graphes avec règles de filtrage.
            </li>
            <li>
              Analyse de surfacturation, comparant les enregistrements filtrés avec des
              enregistrements sémantiquement similaires d'autres municipalités la même année en
              utilisant pgvector dans PostgreSQL.
            </li>
          </List>
        </div>
      ),
      de: (
        <div>
          <Award text="1. Platz — nationaler Innovationswettbewerb INOVA 2025/26" />
          In Zusammenarbeit mit Prof. <Bezerra /> und M.Sc. Wellington Amaral entwickelt.
          Nemesis (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) ist eine
          Webanwendung mit Datenbankanbindung über FastAPI.
          <Rule />
          <List>
            <li>Direkte und semantische Datenbankabfragen.</li>
            <li>
              3D-Projektion von Ausgabendatensätzen: Ein Denoising Autoencoder bildet semantische
              Embeddings in einen dreidimensionalen Raum ab, um Gruppen sichtbar zu machen.
            </li>
            <li>
              Tabelle der gestückelten Zahlungen („fracionamento“), erzeugt durch einen
              graphenbasierten Gruppierungsalgorithmus mit Filterregeln.
            </li>
            <li>
              Überpreis-Analyse: Vergleich gefilterter Ausgabendatensätze mit semantisch ähnlichen
              Datensätzen anderer Kommunen desselben Jahres mittels pgvector in PostgreSQL.
            </li>
          </List>
        </div>
      ),
    },
  },

  /* -------------------------- Fiscalizando ------------------------ */
  {
    title: "Fiscalizando",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "Nginx"],
    github: "https://github.com/paraizovinicius/Fiscalizando-App",
    demo: "",
    externalLinks: [
      { url: "https://www.youtube.com/watch?v=7BBp_R69gW0&t=48s", label: "YouTube" },
    ],
    description: {
      en: (
        <div>
          A web application serving as a transparency portal for citizens, providing access to
          voting records and legislative propositions from state deputies. Supervised by Prof.{" "}
          <Areas />.
          <Rule />
          <List>
            <li>
              Deputy comparison feature to analyse voting alignment between two representatives.
            </li>
            <li>
              Advanced search across deputies' legislative proposals, voting history, past
              mandates and contact information.
            </li>
            <li>
              Automated daily database updates using FastAPI to fetch new voting sessions and
              legislative proposals into PostgreSQL.
            </li>
            <li>Deployed with Docker and Nginx for scalable and reliable delivery.</li>
          </List>
        </div>
      ),
      fr: (
        <div>
          Application web servant de portail de transparence pour les citoyens, offrant l'accès
          aux registres de vote et aux propositions législatives des députés d'État. Encadré par
          le Prof. <Areas />.
          <Rule />
          <List>
            <li>
              Fonctionnalité de comparaison des députés afin d'analyser l'alignement de leurs
              votes.
            </li>
            <li>
              Recherche avancée permettant d'explorer les propositions législatives, l'historique
              de vote, les mandats passés et les informations de contact des députés.
            </li>
            <li>
              Mises à jour automatiques quotidiennes de la base de données via FastAPI pour
              récupérer les nouvelles sessions de vote et propositions législatives dans
              PostgreSQL.
            </li>
            <li>
              Déploiement à l'aide de Docker et Nginx pour une livraison scalable et fiable.
            </li>
          </List>
        </div>
      ),
      de: (
        <div>
          Webanwendung als Transparenzportal für Bürgerinnen und Bürger: Zugang zu
          Abstimmungsergebnissen und Gesetzesinitiativen von Landesabgeordneten. Betreut von Prof.{" "}
          <Areas />.
          <Rule />
          <List>
            <li>
              Vergleichsfunktion für zwei Abgeordnete zur Analyse ihrer
              Abstimmungsübereinstimmung.
            </li>
            <li>
              Erweiterte Suche über Gesetzesinitiativen, Abstimmungsverhalten, frühere Mandate und
              Kontaktdaten.
            </li>
            <li>
              Automatische tägliche Datenbankaktualisierung über FastAPI, die neue
              Abstimmungssitzungen und Gesetzesinitiativen nach PostgreSQL überträgt.
            </li>
            <li>
              Deployment mit Docker und Nginx für eine skalierbare und zuverlässige Auslieferung.
            </li>
          </List>
        </div>
      ),
    },
  },

  /* --------------------------- TasteBuddy ------------------------- */
  {
    title: "TasteBuddy",
    tech: ["Angular", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Vercel"],
    github: "https://github.com/paraizovinicius/myrestaurant",
    demo: "https://tastebuddy-blush.vercel.app/",
    description: {
      en: (
        <div>
          A web application for restaurant reviews and ratings. Users can publish, like and
          comment on reviews and rate restaurants.
          <Rule />
          <List>
            <li>Responsive UI built with Angular and Tailwind CSS.</li>
            <li>Database schema for storing restaurant information and reviews.</li>
            <li>User authentication and authorisation via Supabase.</li>
            <li>Deployed on Vercel.</li>
          </List>
        </div>
      ),
      fr: (
        <div>
          Application web pour les critiques et les évaluations de restaurants. Les utilisateurs
          peuvent publier, aimer et commenter des critiques et évaluer des restaurants.
          <Rule />
          <List>
            <li>Interface utilisateur réactive conçue avec Angular et Tailwind CSS.</li>
            <li>
              Schéma de base de données pour stocker les informations sur les restaurants et les
              critiques.
            </li>
            <li>Authentification et autorisation des utilisateurs avec Supabase.</li>
            <li>Déploiement sur Vercel.</li>
          </List>
        </div>
      ),
      de: (
        <div>
          Webanwendung für Restaurantkritiken und -bewertungen. Nutzerinnen und Nutzer können
          Rezensionen veröffentlichen, liken und kommentieren sowie Restaurants bewerten.
          <Rule />
          <List>
            <li>Responsive Benutzeroberfläche mit Angular und Tailwind CSS.</li>
            <li>Datenbankschema für Restaurantdaten und Rezensionen entworfen.</li>
            <li>Authentifizierung und Autorisierung über Supabase umgesetzt.</li>
            <li>Deployment auf Vercel.</li>
          </List>
        </div>
      ),
    },
  },

  /* -------------------------- SCRNA-Seq --------------------------- */
  {
    title: {
      en: "SCRNA-Seq Analysis",
      fr: "Analyse SCRNA-Seq",
      de: "SCRNA-Seq-Analyse",
    },
    tech: ["PyTorch", "DEC", "SDEC", "scikit-learn"],
    github: "https://github.com/paraizovinicius/SCRNA-Seq",
    description: {
      en: (
        <div>
          Benchmarking implementation for several clustering algorithms (SDEC, DEC, K-Means and
          Spectral Clustering) applied to single-cell RNA sequencing data.
          <Rule />
          <List>
            <li>
              Extended a previous project comparing K-Means and Spectral Clustering across
              different preprocessing pipelines: <BrcaLink />.
            </li>
            <li>
              Integrated Deep Embedded Clustering (DEC) based on <PtDecLink />.
            </li>
            <li>
              Implemented Semi-supervised Deep Embedded Clustering (SDEC) from scratch by
              extending the DEC loss function with pairwise constraints.
            </li>
            <li>
              Improved clustering performance on labelled data through semi-supervised learning
              techniques.
            </li>
          </List>
        </div>
      ),
      fr: (
        <div>
          Implémentation d'un benchmark de plusieurs algorithmes de regroupement (SDEC, DEC,
          K-Means et Clustering Spectral) appliqués aux données de séquençage ARN à cellule unique
          (scRNA-seq).
          <Rule />
          <List>
            <li>
              Extension d'un projet précédent comparant K-Means et le Clustering Spectral selon
              différents pipelines de prétraitement : <BrcaLink />.
            </li>
            <li>
              Intégration de l'algorithme Deep Embedded Clustering (DEC) basée sur
              l'implémentation <PtDecLink />.
            </li>
            <li>
              Implémentation complète de Semi-supervised Deep Embedded Clustering (SDEC) à partir
              de zéro, en enrichissant la fonction de perte de DEC avec des{" "}
              <i>pairwise constraints</i>.
            </li>
            <li>
              Amélioration des performances de regroupement sur des données étiquetées grâce à des
              techniques d'apprentissage semi-supervisé.
            </li>
          </List>
        </div>
      ),
      de: (
        <div>
          Benchmark-Implementierung mehrerer Clustering-Algorithmen (SDEC, DEC, K-Means und
          spektrales Clustering) für Einzelzell-RNA-Sequenzierungsdaten.
          <Rule />
          <List>
            <li>
              Erweiterung eines früheren Projekts, das K-Means und spektrales Clustering über
              verschiedene Vorverarbeitungspipelines vergleicht: <BrcaLink />.
            </li>
            <li>
              Integration von Deep Embedded Clustering (DEC) auf Basis von <PtDecLink />.
            </li>
            <li>
              Semi-supervised Deep Embedded Clustering (SDEC) von Grund auf implementiert, indem
              die DEC-Verlustfunktion um <i>Pairwise Constraints</i> erweitert wurde.
            </li>
            <li>
              Verbesserte Clustering-Leistung auf gelabelten Daten durch semi-überwachte
              Lernverfahren.
            </li>
          </List>
        </div>
      ),
    },
  },

  /* ----------------------- Thesis / TCE-NE ------------------------ */
  {
    title: {
      en: "Government Spending Audit: A Natural Language Processing Approach",
      fr: "Audit des dépenses publiques : une approche par traitement automatique du langage (NLP)",
      de: "Prüfung öffentlicher Ausgaben: ein Ansatz mit Natural Language Processing",
    },
    tech: ["PyTorch", "DEC", "NLP", "Streamlit", "LangChain", "Chroma"],
    github: "https://github.com/AILAB-CEFET-RJ/tcene",
    description: {
      en: (
        <div>
          Bachelor thesis, graded 20/20. Applied a Deep Embedded Clustering (DEC) algorithm to
          group public spending records of local government (TCE/RJ).
          <Rule />
          <List>
            <li>
              Converted 1.4M records from CSV to Parquet and transformed text fields into semantic
              embeddings.
            </li>
            <li>
              Trained an autoencoder for dimensionality reduction, followed by DEC clustering.
            </li>
            <li>
              Reached a silhouette score of 0.9172, indicating highly coherent clusters.
            </li>
          </List>
        </div>
      ),
      fr: (
        <div>
          Mémoire de fin d'études, noté 20/20. Application d'un algorithme Deep Embedded
          Clustering (DEC) pour regrouper les enregistrements de dépenses publiques du
          gouvernement local (TCE/RJ).
          <Rule />
          <List>
            <li>
              Conversion de 1,4 million d'enregistrements de CSV en Parquet et transformation des
              champs textuels en embeddings sémantiques.
            </li>
            <li>
              Entraînement d'un autoencodeur pour la réduction de dimension, suivi du clustering
              DEC.
            </li>
            <li>
              Score de silhouette de 0,9172 atteint, indiquant des clusters très cohérents.
            </li>
          </List>
        </div>
      ),
      de: (
        <div>
          Abschlussarbeit, Note 20/20. Anwendung eines Deep-Embedded-Clustering-Algorithmus (DEC)
          zur Gruppierung öffentlicher Ausgabendatensätze der Landesrechnungsprüfung (TCE/RJ).
          <Rule />
          <List>
            <li>
              Konvertierung von 1,4 Mio. Datensätzen von CSV nach Parquet und Umwandlung der
              Textfelder in semantische Embeddings.
            </li>
            <li>
              Training eines Autoencoders zur Dimensionsreduktion, anschließend DEC-Clustering.
            </li>
            <li>
              Erreichter Silhouettenkoeffizient von 0,9172 — ein Hinweis auf sehr kohärente
              Cluster.
            </li>
          </List>
        </div>
      ),
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const lang = (["en", "fr", "de"].includes(language) ? language : "en") as Lang;

  return (
    <div className="min-h-screen mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("projects.title")}</h1>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
        {projects.map((p) => (
          <ProjectCard
            key={typeof p.title === "string" ? p.title : p.title.en}
            title={typeof p.title === "string" ? p.title : p.title[lang]}
            description={p.description[lang]}
            tech={p.tech}
            github={p.github}
            demo={p.demo ?? ""}
            externalLinks={p.externalLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
