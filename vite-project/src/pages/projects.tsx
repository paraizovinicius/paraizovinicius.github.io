import React from "react";
import ProjectCard from "../components/projectCard";
import { useLanguage } from "../contexts/LanguageContext";

const Projects: React.FC = () => {
    const { language, t } = useLanguage();
    return (
        <div className="min-h-screen pl-0 md:pl-22 md:pl-0 mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-8 text-center">{t("projects.title")}</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1 pl-4">
                <ProjectCard
                    title={
                        language === "en"
                        ? "Government Spending Audit: A Natural Language Processing Approach"
                        : "Audit des dépenses publiques : une approche par traitement automatique du langage (NLP)"
                    }
                    description={
                        language === "en" ? (
                        <div>
                            Applied a Deep Embedded Clustering (DEC) algorithm to group public spending 
                            records of local government (TCE/RJ). Preprocessing included converting 1.4M 
                            records from CSV to Parquet format and transforming text fields into semantic 
                            embeddings. Processing involved training an autoencoder for dimensionality 
                            reduction, followed by DEC clustering. Achieved a silhouette score of 0.9172, 
                            indicating highly coherent clusters.
                        </div>
                        ) : (
                        <div>
                            Application d’une implémentation de l’algorithme Deep Embedded Clustering (DEC) 
                            pour regrouper les enregistrements de dépenses publiques du gouvernement local (TCE/RJ). Le prétraitement comprenait la conversion de 1,4 million d’enregistrements de CSV en format Parquet et la transformation des champs textuels en embeddings sémantiques. Le traitement impliquait l’entraînement d’un autoencodeur pour la réduction de dimension, suivi du clustering DEC. Un score de silhouette de 0,9172 a été atteint, indiquant des clusters très cohérents.
                        </div>
                        )
                    }
                    tech={["Pytorch", "DEC", "NLP", "Streamlit", "LangChain", "Chroma"]}
                    github="https://github.com/AILAB-CEFET-RJ/tcene"
                />

                <ProjectCard
                    title="Nemesis"
                    description={
                        language === "en" ? (
                        <div>
                            Developed in collaboration with Prof.{" "}
                            <a href="https://eic.cefet-rj.br/~ebezerra/" className="underline text-blue-600 hover:text-blue-800">
                                Eduardo Bezerra
                            </a> and M.Sc Wellington Amaral, Nemesis 
                            (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) is a web application 
                            with database integration via FastAPI.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                            <li>Direct and semantic database queries.</li>
                            <li>
                                3D projection of spending records, using a Denoised Autoencoder to map semantic embeddings into three-dimensional space for group detection.
                            </li>
                            <li>
                                Access to the 'fracionamento' (split payments) table, generated through a graph-based grouping algorithm with filtering rules.
                            </li>
                            <li>
                                Overpricing analysis, comparing filtered spending records with semantically similar records from other municipalities in the same year using pgvector in PostgreSQL.
                            </li>
                            </ul>
                        </div>
                        ) : (
                        <div>
                            Développé en collaboration avec le Prof.{" "}
                            <a href="https://eic.cefet-rj.br/~ebezerra/" className="underline text-blue-600 hover:text-blue-800">
                                Eduardo Bezerra
                            </a> et le M.Sc Wellington Amaral, Nemesis 
                            (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) est une application web 
                            intégrée à une base de données via FastAPI.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                            <li>Requêtes directes et sémantiques sur la base de données.</li>
                            <li>
                                Projection 3D des enregistrements de dépenses, utilisant un Autoencodeur Débruité pour mapper les embeddings sémantiques dans un espace tridimensionnel afin de détecter des regroupements.
                            </li>
                            <li>
                                Accès à la table de "fracionamento" (paiements fractionnés), générée via un algorithme de regroupement basé sur des graphes avec règles de filtrage.
                            </li>
                            <li>
                                Analyse de surfacturation, comparant les enregistrements filtrés avec des enregistrements sémantiquement similaires d’autres municipalités la même année en utilisant pgvector dans PostgreSQL.
                            </li>
                            </ul>                        </div>
                        )
                    }
                    tech={["React", "FastAPI", "SQLAlchemy", "Pgvector", "SDAE"]}
                    github="https://github.com/AILAB-CEFET-RJ/nemesis"
                    demo=""
                    externalLinks={[
                        {
                            url: "https://www.correiobraziliense.com.br/euestudante/educacao-profissional/2025/09/7240957-projetos-focados-em-inovacao-e-tecnologia-sao-premiados-em-brasilia.html",
                            label: "Correio Braziliense"
                        },
                        {
                            url: "https://youtu.be/a5sQ414Ikto?si=kA12jHchzoSNakxD",
                            label: "GLOBO RJ1"
                        }
                    ]}
                />

                <ProjectCard
                    title="Fiscalizando"
                    description={
                        language === "en" ? (
                        <div>
                            Developed a web application serving as a transparency portal for citizens, providing access to voting records and legislative propositions from state deputies. Supervised by Prof.{" "}
                            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=C181FBADA141F9C4C031C8B178FE4062.buscatextual_0" className="underline text-blue-600 hover:text-blue-800">
                                Marcelo Arêas
                            </a>.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                                <li>Implemented a deputy comparison feature to analyze voting alignment between two representatives.</li>
                                <li>Built advanced search functionality to explore deputies’ legislative proposals, voting history, past mandates, and contact information.</li>
                                <li>Designed automated daily database updates using FastAPI to fetch new voting sessions and legislative proposals into PostgreSQL.</li>
                                <li>Deployed the application using Docker and Nginx for scalable and reliable delivery.</li>
                            </ul>
                        </div>
                        ) : (
                        <div>
                            Développement d'une application web servant de portail de transparence pour les citoyens, offrant l'accès aux registres de vote et aux propositions législatives des députés d'État. Supervision: Prof.{" "}
                            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=C181FBADA141F9C4C031C8B178FE4062.buscatextual_0" className="underline text-blue-600 hover:text-blue-800">
                                Marcelo Arêas
                            </a>.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                                <li>Mise en place d’une fonctionnalité de comparaison des députés afin d’analyser l’alignement de leurs votes.</li>
                                <li>Développement d’une recherche avancée permettant d’explorer les propositions législatives, l’historique de vote, les mandats passés et les informations de contact des députés.</li>
                                <li>Conception de mises à jour automatiques quotidiennes de la base de données via FastAPI pour récupérer les nouvelles sessions de vote et propositions législatives dans PostgreSQL.</li>
                                <li>Déploiement de l’application à l’aide de Docker et Nginx pour une livraison scalable et fiable.</li>
                            </ul>
                        </div>
                        )
                    }
                    tech={["React", "FastAPI", "PostgreSQL", "Docker", "Nginx"]}
                    github="https://github.com/paraizovinicius/Fiscalizando-App"
                    demo=""
                    externalLinks={[
                        {
                            url: "https://www.youtube.com/watch?v=7BBp_R69gW0&t=48s",
                            label: "YouTube"
                        }
                    ]}
                />

                <ProjectCard
                    title={language === "en" ? "SCRNA-Seq Analysis" : "Analyse SCRNA-Seq"}
                    description={
                        language === "en" ? (
                        <div>
                            Benchmarking implementation for several clustering algorithms (SDEC, DEC, KMeans, and Spectral Clustering) applied to single-cell RNA sequencing data.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                            <li>
                                Extended a previous project comparing KMeans and Spectral Clustering across different preprocessing pipelines:{" "}
                                <a
                                href="https://github.com/AILAB-CEFET-RJ/brca-scrna-seq/tree/master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                                >
                                SCRNA-Seq Analysis of BRCA Patients
                                </a>.
                            </li>
                            <li>
                                Integrated Deep Embedded Clustering (DEC) based on{" "}
                                <a
                                href="https://github.com/vlukiyanov/pt-dec/tree/master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                                >
                                vlukiyanov/pt-dec
                                </a>.
                            </li>
                            <li>
                                Implemented Semi-supervised Deep Embedded Clustering (SDEC) from scratch by enhancing the DEC loss function with pairwise constraints.
                            </li>
                            <li>
                                Improved clustering performance on labeled data through semi-supervised learning techniques.
                            </li>
                            </ul>
                        </div>
                        ) : (
                        <div>
                            Implémentation d’un benchmark de plusieurs algorithmes de regroupement (SDEC, DEC, KMeans et Clustering Spectral) appliqués aux données de séquençage ARN à cellule unique (scRNA-seq).
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                            <li>
                                Extension d’un projet précédent comparant KMeans et le Clustering Spectral selon différents pipelines de prétraitement:{" "}
                                <a
                                href="https://github.com/AILAB-CEFET-RJ/brca-scrna-seq/tree/master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                                >
                                SCRNA-Seq Analysis of BRCA Patients
                                </a>.
                            </li>
                            <li>
                                Intégration de l’algorithme Deep Embedded Clustering (DEC) basée sur l’implémentation{" "}
                                <a
                                href="https://github.com/vlukiyanov/pt-dec/tree/master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                                >
                                vlukiyanov/pt-dec
                                </a>.
                            </li>
                            <li>
                                Implémentation complète de Semi-supervised Deep Embedded Clustering (SDEC) à partir de zéro, en enrichissant la fonction de perte de DEC avec des <i>pairwise constraints</i>.
                            </li>
                            <li>
                                Amélioration des performances de regroupement sur des données étiquetées grâce à des techniques d’apprentissage semi-supervisé.
                            </li>
                            </ul>
                        </div>
                        )
                    }
                    tech={["PyTorch", "SDEC"]}
                    github="https://github.com/paraizovinicius/SCRNA-Seq"
                />
            </div>
        </div>
    );
};

export default Projects;
